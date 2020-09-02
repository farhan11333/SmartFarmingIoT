import { AngularFirestore,AngularFirestoreCollection } from '@angular/fire/firestore';

// authentication.service.ts
import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';

import * as firebase from 'firebase';
import { first } from 'rxjs/operators';




@Injectable({
  providedIn: 'root'
})
export class AuthenticateService {

  constructor(
    private afAuth: AngularFireAuth,
    private afs: AngularFirestore
  ) { }

  /*****************************************getUserID******************************/
  async getUserIDAsync() {
    const user = await this.afAuth.authState.pipe(first()).toPromise();
    return user;
   // console.log(user.uid, user.email);
  }

  registerUser(value) {
   return new Promise<any>((resolve, reject) => {

      this.afAuth.auth.createUserWithEmailAndPassword(value.email, value.password)
        .then(res => {
          return this.afs.collection('users').doc(res.user.uid).set({
            email : value.email,
            password: value.password
          });
        }).then ( res => resolve(res),
        err => reject(err));
        // err => reject(err)); )
          // res => resolve(res);
          // err => reject(err));
      
    // });

  });
}

  loginUser(value) {
    return new Promise<any>((resolve, reject) => {
      this.afAuth.auth.signInWithEmailAndPassword(value.email, value.password)
        .then(
          res => resolve(res),
          err => reject(err));
        });
  }

  logoutUser() {
    return new Promise((resolve, reject) => {
      if (this.afAuth.auth.currentUser) {
        this.afAuth.auth.signOut()
          .then(() => {
            console.log('LOG Out');
            resolve();
          }).catch((error) => {
            reject();
          });
      }
    });
  }
  resetPassword(email: string): Promise<void> {
    return this.afAuth.auth.sendPasswordResetEmail(email);
  }

  userDetails() {
    return this.afAuth.user;
  } 



  registerworker(value){
    return new Promise<any>((resolve, reject) =>{
      this.afAuth.auth.createUserWithEmailAndPassword(value.email, value.password)
      .then(res => {
        return this.afs.collection('Farmers').doc('17CxmsbjAYMIOeGBKJTE').collection('users').doc(res.user.uid).set({
          email : value.email,
          password: value.password
          
        });
      }).then ( res => resolve(res),
      err => reject(err));
      // err => reject(err)); )
        // res => resolve(res);
        // err => reject(err));
    
  // });
  
  });
  }
}
