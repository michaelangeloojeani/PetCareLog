import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule, ToastController } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { FirestoreService, Pet } from '../services/firestore.service';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, IonicModule, FormsModule],
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss']
})
export class HomePage {
  pets$ = this.fs.getPets();

  // add form
  name = '';
  species = '';
  birthday = '';
  notes = '';

  constructor(private fs: FirestoreService, private auth: AuthService, private toast: ToastController) {}

  async addPet() {
    if (!this.name || !this.species) return this.present('Name and species required');
    const pet: Pet = { name: this.name, species: this.species, birthday: this.birthday || undefined, notes: this.notes || undefined };
    try {
      await this.fs.addPet(pet);
      this.name = this.species = this.birthday = this.notes = '';
      this.present('Pet added');
    } catch (e: any) { this.present(e.message || 'Error adding pet'); }
  }

  async deletePet(id?: string) {
    if (!id) return;
    try { await this.fs.deletePet(id); this.present('Pet deleted'); }
    catch (e: any) { this.present(e.message || 'Error deleting pet'); }
  }