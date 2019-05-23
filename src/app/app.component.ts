import { Component, OnInit, SimpleChange, Input } from '@angular/core';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material';
import { RegisterComponent } from './core/pages/register/register.component';
import { TokenStorageService } from './services/auth/token-storage.service';
import { SpeechRecognitionService } from './services/speech-recognition.service';
import { NgModel } from '@angular/forms';

@Component({
  selector: 'app-root',
  providers: [SpeechRecognitionService],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  private roles: string[];
  private authority: string;
  

  constructor(
    private tokenStorage: TokenStorageService,
    private token: TokenStorageService, 
    public router: Router,
    private speech: SpeechRecognitionService,
    private dialog: MatDialog) {
      this.speech.record('es_ES')
      .subscribe(e => {
        console.log(e);
        if(e.includes('iniciar sesión'))
          this.router.navigate(['login']);
        if(e.includes('home'))
          this.router.navigate(['home']);
        if(e.includes('tablas'))
          this.router.navigate(['admin']);
        if(e.includes('registrar usuario'))
          this.openDialog(null);
        if(e.includes('cerrar sesión'))
          this.logout();
        
      })
    }

  /*stopSpeechRecognition(){
    console.log(this.speech)
    this.speech.endSpeech();
  }*/

  //Menu 
  ngOnInit() {
    if (this.tokenStorage.getToken()) {
      this.roles = this.tokenStorage.getAuthorities();
      this.roles.every(role => {
        if (role === 'ROLE_ADMIN') {
          this.authority = 'admin';
          return false;
        } else if (role === 'ROLE_TEACHER') {
          this.authority = 'teacher';
          return false;
        }
        this.authority = 'user';
        return true;
      });
    }
  }

  //Abrir dialog para registrar usuario
  openDialog(element:any): void {
    const dialogRef = this.dialog.open(RegisterComponent,{
      data:{
        element: element
      },
      width: '500px',height:'600px'});
  }

  //Cerrar sesion
  logout() {
    this.token.signOut();
    window.location.reload();
    this.router.navigate(['home']);
  }
}
