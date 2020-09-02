import { UserProfilePageRoutingModule } from './../user-profile/user-profile-routing.module';
import { AngularFirestore,AngularFirestoreCollection } from '@angular/fire/firestore';

// authentication.service.ts
import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';

import * as firebase from 'firebase';
import { first } from 'rxjs/operators';
import { type } from 'os';
import { debugOutputAstAsTypeScript } from '@angular/compiler';

@Injectable({
  providedIn: 'root'
})
export class AuthenticateService {

  constructor(
    private afAuth: AngularFireAuth,
    private afs: AngularFirestore,
  ) { }

  /*****************************************getUserID******************************/
  async getUserIDAsync() {
    const user = await this.afAuth.authState.pipe(first()).toPromise();    
    //console.log(user.uid, user.email);
    //debugger;
    return user;
  }

  registerUser(value) {
   return new Promise<any>((resolve, reject) => {

      this.afAuth.auth.createUserWithEmailAndPassword(value.email, value.password)
        .then(res => {
          return this.afs.collection('users').add({
            email : value.email,
            password: value.password,
            type: 'owner'
          });
        }).then ( res => resolve(res),
        err => reject(err));
      });
}

  loginUser(value) {
    return new Promise<any>((resolve, reject) => {
//        console.log(this.afs.collection('users').doc('uid').get(value.type));
//           debugger;
      this.afAuth.auth.signInWithEmailAndPassword(value.email, value.password)
        .then(
          res =>{console.log('res', res); resolve(res)},
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
  registerfarmer(value){
     return new Promise<any>((resolve, reject) =>{
      this.afAuth.auth.createUserWithEmailAndPassword(value.email, value.password)
      .then(res => {
        return this.afs.collection('Farmers').doc(res.user.uid).set({
          email : value.email,
          password: value.password,
          username : value.username,
          type : 'farmer'
          
          
        });
      }).then ( res => resolve(res),
      err => reject(err));
      // err => reject(err)); )
        // res => resolve(res);
        // err => reject(err));
    
  // });
  
  });

  }



  registerworker(value){
    return new Promise<any>((resolve, reject) =>{
      this.afAuth.auth.createUserWithEmailAndPassword(value.email, value.password)
      .then(res => {
        return this.afs.collection('users').add({
          email : value.email,
          password: value.password,
          type: 'worker',
          username : value.username,
          farmId : value.farmId         });
      }).then ( res => resolve(res),
      err => reject(err));
       });
  }
}