import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {

  username = '';
  email = '';
  password = '';
  confirm = '';
  message = '';

  constructor(private auth: AuthService, private router: Router) {}

  signup() {

    if (this.password !== this.confirm) {
      this.message = 'Passwords do not match';
      return;
    }

    const success = this.auth.signup({
      username: this.username,
      email: this.email,
      password: this.password
    });

    if (!success) {
      this.message = 'User already exists!';
      return;
    }

    alert('Account created successfully!');
    this.router.navigate(['/login']);
  }
}
