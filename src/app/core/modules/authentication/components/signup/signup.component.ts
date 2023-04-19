import { Component, OnInit } from '@angular/core';

import { faGoogle, faFacebook } from '@fortawesome/free-brands-svg-icons';

import {
  AbstractControl,
  FormControl,
  FormGroup,
  FormGroupDirective,
  NgForm,
  ValidationErrors,
  ValidatorFn,
  Validators,
} from '@angular/forms';
import { SignupCredentials } from '../../models/credentials.model';
import { Store } from '@ngrx/store';
import { AppState, AuthenticationActions } from 'src/app/root-store';

import { ErrorStateMatcher } from '@angular/material/core';
import { URLs } from 'src/app/app.constants';
import {
  GoogleLoginProvider,
  SocialAuthService,
} from '@abacritt/angularx-social-login';
import { AuthenticationService } from '../../services/authentication.services';
import { Router } from '@angular/router';

const equalPasswordsValidator: ValidatorFn = (
  form: AbstractControl
): ValidationErrors | null => {
  const password1 = form.get('password1')?.value;
  const password2 = form.get('password2')?.value;
  return password1 && password2 && password1 !== password2
    ? { passwordNotMatch: true }
    : null;
};

export class SignUpErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(
    control: FormControl | null,
    form: FormGroupDirective | NgForm | null
  ): boolean {
    const invalidCtrl = !!(control?.invalid && control?.parent?.dirty);
    const invalidParent = !!(
      control?.parent?.errors?.passwordNotMatch && control?.parent?.dirty
    );

    return invalidCtrl || invalidParent;
  }
}

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
})
export class SignupComponent implements OnInit {
  constructor(
    private store: Store<AppState>,
    private socialAuthService: SocialAuthService,
    private authService: AuthenticationService,
    private router: Router
  ) {}
  faGoogle = faGoogle;
  faFacebook = faFacebook;

  credentialsForm!: FormGroup;
  matcher = new SignUpErrorStateMatcher();

  loginURL = URLs.loginURL;

  ngOnInit(): void {
    this.initForm();
  }

  initForm(): void {
    this.credentialsForm = new FormGroup(
      {
        firstName: new FormControl(null, Validators.required),
        lastName: new FormControl(null, Validators.required),
        email: new FormControl(null, [Validators.required, Validators.email]),
        password1: new FormControl(null, [
          Validators.required,
          Validators.minLength(8),
        ]),
        password2: new FormControl(null),
      },
      { validators: equalPasswordsValidator }
    );
  }
  handleSubmit(): void {
    const credentials = this.credentialsForm.value as SignupCredentials;

    this.store.dispatch(AuthenticationActions.signupRequest(credentials));
  }
  public checkError = (controlName: string, errorName: string) => {
    return (
      this.credentialsForm.controls[controlName].hasError(errorName) ||
      this.credentialsForm.hasError(errorName)
    );
  };

  signInWithGoogle(): void {
    this.socialAuthService
      .signIn(GoogleLoginProvider.PROVIDER_ID)
      .then((userData) => {
        this.authService.loginWithGoogle(userData.authToken).subscribe(
          (response) => {
            this.authService.saveUser(response.token, true);
            this.store.dispatch(AuthenticationActions.checkToken());
            this.router.navigateByUrl(URLs.landingPageURL);
          },
          (error) => {}
        );
      });
  }
}
