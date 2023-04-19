import { Component, OnInit } from '@angular/core';

import { FormControl, FormGroup, Validators } from '@angular/forms';
import { LoginCredentials } from '../../models/credentials.model';
import { Store } from '@ngrx/store';
import { AppState, AuthenticationActions } from 'src/app/root-store';
import { URLs } from 'src/app/app.constants';
import { ToastrService } from 'ngx-toastr';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthenticationService } from '../../services/authentication.services';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  constructor(
    private store: Store<AppState>,
    private toastrService: ToastrService,
    private activatedRoute: ActivatedRoute,
    private authService: AuthenticationService,
    private router: Router
  ) {}
  credentialsForm!: FormGroup;

  // Constants
  signupURL = URLs.signupURL;
  resetPasswordURL = URLs.resetPassword;

  ngOnInit(): void {
    this.initForm();
    this.activatedRoute.queryParams.subscribe((params) => {
      const verified = params.verified;
      if (verified && verified == 1) {
        this.toastrService.info('Su cuenta ha sido verificada');
      }
    });
  }

  initForm(): void {
    this.credentialsForm = new FormGroup({
      email: new FormControl(null, [Validators.required, Validators.email]),
      password: new FormControl(null, [
        Validators.required,
        Validators.minLength(8),
      ]),
      keepLogin: new FormControl(false),
    });
  }
  handleSubmit(): void {
    this.store.dispatch(
      AuthenticationActions.loginRequest(this.credentialsForm.value)
    );
  }

  public checkError = (controlName: string, errorName: string) => {
    return this.credentialsForm.controls[controlName].hasError(errorName);
  };
}
