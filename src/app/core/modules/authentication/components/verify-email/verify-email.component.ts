import { ToastrService } from 'ngx-toastr';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { AppState, AuthenticationActions } from 'src/app/root-store';
import { AuthenticationService } from '../../services/authentication.services';

@Component({
  templateUrl: './verify-email.component.html',
  styleUrls: ['./verify-email.component.scss'],
})
export class VerifyEmailComponent implements OnInit {
  private activationKey: string;
  message: string = '';

  constructor(
    private route: ActivatedRoute,
    private authService: AuthenticationService,
    private store: Store<AppState>,
    private router: Router,
    private toastrService: ToastrService
  ) {
    this.activationKey = this.route.snapshot.params['key'];
  }

  ngOnInit(): void {
    this.authService.verifyEmail(this.activationKey).subscribe({
      next: (value) => {
        this.authService.saveUser(value.key, true);
        this.store.dispatch(AuthenticationActions.checkToken());
        this.router.navigate(['/home/accounts/login']);
        this.toastrService.success('Correo verificado con éxito');
      },
      error: (error) => {
        this.message = error.error.message;
      },
    });
  }
}
