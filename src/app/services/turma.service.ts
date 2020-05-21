import { Injectable } from '@angular/core';
import { AngularFirestoreCollection, AngularFirestore } from '@angular/fire/firestore';
import { map } from 'rxjs/operators';
import { Turma } from '../interfaces/turma';

@Injectable({
  providedIn: 'root'
})
export class TurmaService {

  private turmasCollection: AngularFirestoreCollection<Turma>;

  constructor(private afs: AngularFirestore) { 
    this.turmasCollection = this.afs.collection<Turma>('Turmas');
  }

  getTurmas(){
    return this.turmasCollection.snapshotChanges().pipe(
      map(actions => {
        return actions.map(a => {
          const data = a.payload.doc.data();
          const id = a.payload.doc.id;

          return {id, ...data };
        });
      })
    )
   }  

  addTurma(turma: Turma){
    return this.turmasCollection.add(turma);
  }

   getTurma(id: string){
    return this.turmasCollection.doc<Turma>(id).valueChanges();
  }

   updateTurma(id: string, turma: Turma){
    return this.turmasCollection.doc<Turma>(id).update(turma);
  }

   deleteTurma(id: string){
    return this.turmasCollection.doc(id).delete();
  }  

}
