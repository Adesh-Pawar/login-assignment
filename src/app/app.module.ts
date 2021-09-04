import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AngularFireModule} from '@angular/fire/compat'
import { AppComponent } from './app.component';
import { FirebaseService } from './services/firebase.service';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp({
      apiKey: "AIzaSyBiiDPSW7_QMp2ZSeKrWpWhC1ySFQ2pnYI",
      authDomain: "login-app-assignment.firebaseapp.com",
      projectId: "login-app-assignment",
      storageBucket: "login-app-assignment.appspot.com",
      messagingSenderId: "984626006731",
      appId: "1:984626006731:web:c2bcc6fe0889c82fc8694e"
    })
  ],
  providers: [FirebaseService],
  bootstrap: [AppComponent]
})
export class AppModule { }
