import { FormControl } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../../services/authentication.services';
import { ToastrService } from 'ngx-toastr';
import { URLs } from 'src/app/app.constants';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.scss'],
})
export class ResetPasswordComponent implements OnInit {
  email!: string;

  constructor(
    private authService: AuthenticationService,
    private router: Router,
    private toastrService: ToastrService
  ) {}

  ngOnInit(): void {}

  onSubmit() {
    this.authService.resetPasswordRequest(this.email).subscribe(
      (response) => {
        this.router.navigate([URLs.resetPasswordDone]);
      },
      (error) => {
        if (error.status === 400) {
          this.toastrService.error(error.error.email);
        } else {
          this.toastrService.error(
            'Algo salió mal. Estamos trabajando para resolverlo'
          );
        }
      }
    );
  }
}
