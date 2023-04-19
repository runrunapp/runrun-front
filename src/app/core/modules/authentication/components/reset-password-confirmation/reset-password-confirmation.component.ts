import { ToastrService } from 'ngx-toastr';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthenticationService } from '../../services/authentication.services';
import { URLs } from 'src/app/app.constants';

@Component({
  selector: 'app-reset-password-confirmation',
  templateUrl: './reset-password-confirmation.component.html',
  styleUrls: ['./reset-password-confirmation.component.scss'],
})
export class ResetPasswordConfirmationComponent implements OnInit {
  uidb64!: string;
  token!: string;

  newPassword1!: string;
  newPassword2!: string;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private authService: AuthenticationService,
    private toastrService: ToastrService
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      this.uidb64 = params.get('uidb64') ?? '';
      this.token = params.get('token') ?? '';
    });
  }

  onSubmit() {
    this.authService
      .resetPasswordConfirm(
        this.newPassword1,
        this.newPassword2,
        this.uidb64,
        this.token
      )
      .subscribe(
        (response) => {
          this.toastrService.success(
            'Contraseña restablecida satisfactoriamente'
          );
          this.router.navigate([URLs.loginURL]);
        },
        (error) => {
          if (error.status === 400) {
            console.log(error);
            this.toastrService.error(error.error.newPassword2);
          } else {
            this.toastrService.error(
              'Algo salió mal. Estamos trabajando para resolverlo'
            );
          }
        }
      );
  }
}
