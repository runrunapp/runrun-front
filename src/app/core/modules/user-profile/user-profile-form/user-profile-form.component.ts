import { Location } from '@angular/common';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { take } from 'rxjs/operators';
import { URLs } from 'src/app/app.constants';

import {
  AppState,
  AuthenticationActions,
  AuthenticationSelectors,
} from 'src/app/root-store';
import { UsersActions } from 'src/app/root-store/users-store';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-user-profile-form',
  templateUrl: './user-profile-form.component.html',
  styleUrls: ['./user-profile-form.component.scss'],
})
export class UserProfileFormComponent implements OnInit, OnDestroy {
  userId!: number;
  subscription!: Subscription;
  constructor(
    private fb: FormBuilder,
    private store: Store<AppState>,
    private router: Router,
    private userService: UsersService
  ) {}

  profileForm = this.fb.group({
    firstName: ['', Validators.required],
    lastName: ['', Validators.required],
    birthday: [new Date(), Validators.required],
    gender: [null, Validators.required],
    ocupationStudent: [false],
    ocupationWork: [false],
    ocupationOther: [false],

    facebook: [''],
    instagram: [''],
    twitter: [''],
    linkedin: [''],
    presentation: ['', Validators.required],
  });

  get progress() {
    let p = 0;
    if (this.profileForm.get('profilePicture1')?.value !== null) {
      p += 10;
    }
    if (this.profileForm.get('profilePicture2')?.value !== null) {
      p += 5;
    }
    if (this.profileForm.get('profilePicture3')?.value !== null) {
      p += 5;
    }
    if (this.profileForm.get('firstName')?.valid) {
      p += 10;
    }
    if (this.profileForm.get('lastName')?.valid) {
      p += 10;
    }
    if (this.profileForm.get('birthday')?.valid) {
      p += 10;
    }
    if (this.profileForm.get('gender')?.valid) {
      p += 10;
    }

    if (this.profileForm.get('presentation')?.valid) {
      p += 20;
    }

    if (
      this.profileForm.get('facebook')?.value !== null &&
      this.profileForm.get('facebook')?.value.length > 0
    ) {
      p += 5;
    }
    if (
      this.profileForm.get('instagram')?.value !== null &&
      this.profileForm.get('instagram')?.value.length > 0
    ) {
      p += 5;
    }
    if (
      this.profileForm.get('twitter')?.value !== null &&
      this.profileForm.get('twitter')?.value.length > 0
    ) {
      p += 5;
    }
    if (
      this.profileForm.get('linkedin')?.value !== null &&
      this.profileForm.get('linkedin')?.value.length > 0
    ) {
      p += 5;
    }
    return p;
  }

  profilePicture1: string | null = null;
  profilePicture2: string | null = null;
  profilePicture3: string | null = null;

  profilePictureFile1: File | null = null;
  profilePictureFile2: File | null = null;
  profilePictureFile3: File | null = null;

  ngOnInit(): void {
    this.subscription = this.store
      .pipe(select(AuthenticationSelectors.selectUser))
      .subscribe((user) => {
        if (user) {
          this.userId = user.id;
          this.profileForm.patchValue({
            firstName: user.firstName,
            lastName: user.lastName,
            birthday: user.profile.birthday || new Date(),
            gender: user.profile.gender,
            ocupationStudent: user.profile.ocupationStudent,
            ocupationWork: user.profile.ocupationWork,
            ocupationOther: user.profile.ocupationOther,
            facebook: user.profile.facebook ? user.profile.facebook : '',
            instagram: user.profile.instagram ? user.profile.instagram : '',
            twitter: user.profile.twitter ? user.profile.twitter : '',
            linkedin: user.profile.linkedin ? user.profile.linkedin : '',
            presentation: user.profile.presentation,
          });
          this.profilePicture1 = user.profile.profilePicture1;
          this.profilePicture2 = user.profile.profilePicture2;
          this.profilePicture3 = user.profile.profilePicture3;
        }
      });
  }

  onSubmit(): void {
    if (this.profileForm.invalid) {
      return;
    }

    const formData = new FormData();

    formData.append('first_name', this.profileForm.value.firstName);

    formData.append('last_name', this.profileForm.value.lastName);

    if (this.profileForm.value.birthday !== null) {
      formData.append(
        'profile[birthday]',
        this.profileForm.value.birthday.toISOString().split('T')[0]
      );
    }

    if (this.profilePictureFile1) {
      formData.append(
        'profile[profile_picture1]',
        this.profilePictureFile1,
        this.profilePictureFile1.name
      );
    }
    if (this.profilePictureFile2) {
      formData.append(
        'profile[profile_picture2]',
        this.profilePictureFile2,
        this.profilePictureFile2.name
      );
    }
    if (this.profilePictureFile3) {
      formData.append(
        'profile[profile_picture3]',
        this.profilePictureFile3,
        this.profilePictureFile3.name
      );
    }
    if (this.profileForm.value.gender !== null) {
      formData.append('profile[gender]', this.profileForm.value.gender);
    }
    if (this.profileForm.value.ocupationStudent !== null) {
      formData.append(
        'profile[ocupation_student]',
        this.profileForm.value.ocupationStudent
      );
    }
    if (this.profileForm.value.ocupationWork !== null) {
      formData.append(
        'profile[ocupation_work]',
        this.profileForm.value.ocupationWork
      );
    }
    if (this.profileForm.value.ocupationOther !== null) {
      formData.append(
        'profile[ocupation_other]',
        this.profileForm.value.ocupationOther
      );
    }

    formData.append('profile[facebook]', this.profileForm.value.facebook);
    formData.append('profile[instagram]', this.profileForm.value.instagram);
    formData.append('profile[twitter]', this.profileForm.value.twitter);
    formData.append('profile[linkedin]', this.profileForm.value.linkedin);

    formData.append(
      'profile[presentation]',
      this.profileForm.value.presentation
    );

    this.userService.updateUser(this.userId, formData).subscribe((user) => {
      this.store.dispatch(AuthenticationActions.checkToken()); // Request user again
      this.store.dispatch(UsersActions.fetchUserFulfilled({ user }));
      this.router.navigateByUrl(URLs.userProfileURL + '/' + this.userId);
    });
  }

  onCancel(): void {
    this.router.navigateByUrl(URLs.userProfileURL + '/' + this.userId);
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  isString(value: any): boolean {
    return typeof value === 'string';
  }

  onImageAdd(index: number, event: { file: File; base64: string }) {
    switch (index) {
      case 1:
        this.profilePicture1 = event.base64;
        this.profilePictureFile1 = event.file;
        break;
      case 2:
        this.profilePicture2 = event.base64;
        this.profilePictureFile2 = event.file;
        break;
      case 3:
        this.profilePicture3 = event.base64;
        this.profilePictureFile3 = event.file;
        break;
    }
  }

  onImageDelete(index: number) {
    switch (index) {
      // @ts-expect-error
      case 1:
        this.profilePicture1 = this.profilePicture2;
        this.profilePictureFile1 = this.profilePictureFile2;
      // FALLS THROUGH to 2
      // @ts-expect-error
      case 2:
        this.profilePicture2 = this.profilePicture3;
        this.profilePictureFile2 = this.profilePictureFile3;
      // FALLS THROUGH to 3
      case 3:
        this.profilePicture3 = null;
        this.profilePictureFile3 = null;
        break;
    }
  }
}
