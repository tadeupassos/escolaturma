import { Injectable } from '@angular/core';
import { AngularFirestoreCollection, AngularFirestore } from '@angular/fire/firestore';
import { map } from 'rxjs/operators';
import { Escola } from '../interfaces/escola';

@Injectable({
  providedIn: 'root'
})
export class EscolaService {

  private escolasCollection: AngularFirestoreCollection<Escola>;

  constructor(private afs: AngularFirestore) { 
    this.escolasCollection = this.afs.collection<Escola>('Escolas');
  }

  getEscolas(){
    return this.escolasCollection.snapshotChanges().pipe(
      map(actions => {
        return actions.map(a => {
          const data = a.payload.doc.data();
          const id = a.payload.doc.id;

          return {id, ...data };
        });
      })
    )
   }  

  addEscola(escola: Escola){
    return this.escolasCollection.add(escola);
  }

   getEscola(id: string){
    return this.escolasCollection.doc<Escola>(id).valueChanges();
  }

   updateEscola(id: string, escola: Escola){
    return this.escolasCollection.doc<Escola>(id).update(escola);
  }

   deleteEscola(id: string){
    return this.escolasCollection.doc(id).delete();
  }

}
