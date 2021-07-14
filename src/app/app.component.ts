import { Component } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Ashar MIT Store';

  constructor(private store: AngularFirestore) { };

  // inProgress = this.store.collection('results').doc(this.title).set({"test":"plswork"});


}
