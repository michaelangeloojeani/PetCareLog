import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule, ToastController } from '@ionic/angular';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';   // ✅ add ReactiveFormsModule
import { Router, RouterLink } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    CommonModule,
    IonicModule,
    FormsModule,
    ReactiveFormsModule,   
    RouterLink
  ],
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss']
})
export class LoginPage {
  email = '';
  password = '';

  constructor(
    private auth: AuthService,
    private router: Router,
    private toast: ToastController
  ) {}

  async login() {
    try {
      await this.auth.login(this.email, this.password);
      this.router.navigateByUrl('/home');
    } catch (e: any) {
      const t = await this.toast.create({
        message: e.message || 'Login failed',
        duration: 1500
      });
      await t.present();
    }
  }
}
