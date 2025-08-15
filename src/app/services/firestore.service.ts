import { Injectable } from '@angular/core';
import { Firestore, collection, addDoc, collectionData, doc, updateDoc, deleteDoc } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

export interface Pet {
  id?: string;
  name: string;
  species: string; // e.g., Dog, Cat
  birthday?: string; // ISO date string
  notes?: string;
}

@Injectable({ providedIn: 'root' })
export class FirestoreService {
  constructor(private fs: Firestore, private auth: AuthService) {}

  private userPetsCol() {
    const uid = this.auth.uid;
    if (!uid) throw new Error('Not authenticated');
    return collection(this.fs, `users/${uid}/pets`);
  }

  getPets(): Observable<Pet[]> {
    return collectionData(this.userPetsCol(), { idField: 'id' }) as Observable<Pet[]>;
  }

  addPet(pet: Pet) {
    return addDoc(this.userPetsCol(), pet);
  }

  updatePet(id: string, pet: Partial<Pet>) {
    const ref = doc(this.fs, `users/${this.auth.uid}/pets/${id}`);
    return updateDoc(ref, pet);
  }

  deletePet(id: string) {
    const ref = doc(this.fs, `users/${this.auth.uid}/pets/${id}`);
    return deleteDoc(ref);
  }
}