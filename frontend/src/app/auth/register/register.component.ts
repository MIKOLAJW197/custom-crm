import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { SharedService } from 'src/app/shared/shared.service';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  loading = false;
  registerForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private sharedService: SharedService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.registerForm = this.formBuilder.group({
      email: '',
      password: '',
    });
  }

  onSubmit() {
    const {
      value: { email, password },
    } = this.registerForm;
    this.loading = true;
    this.authService.registerUser(email, password).subscribe(
      (response) => {
        this.authService.setUser(response);
        this.loading = false;
        this.router.navigate(['/login']);
        this.sharedService.openModal.next({
          isError: false,
          message: 'Account created! Log in!',
        });
      },
      (error) => {
        this.loading = false;
        this.sharedService.openModal.next({
          isError: true,
          message: error.message,
        });
      }
    );
  }
}
