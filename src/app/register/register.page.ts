import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule, ToastController } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CommonModule, IonicModule, FormsModule, RouterLink],
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss']
})
export class RegisterPage {
  email = '';
  password = '';
  confirm = '';

  constructor(private auth: AuthService, private router: Router, private toast: ToastController) {}

  async register() {
    if (this.password !== this.confirm) {
      const t = await this.toast.create({ message: 'Passwords do not match', duration: 1500 });
      return t.present();
    }
    try {
      await this.auth.register(this.email, this.password);
      this.router.navigateByUrl('/home');
    } catch (e: any) {
      const t = await this.toast.create({ message: e.message || 'Registration failed', duration: 1500 });
      await t.present();
    }
  }
}