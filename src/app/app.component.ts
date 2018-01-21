import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  
  private _userName : string;
  public get userName() : string {
    return this._userName;
  }
  public set userName(v : string) {
    this._userName = v;
  }
  
  
  private _password : string;
  public get password() : string {
    return this._password;
  }
  public set password(v : string) {
    this._password = v;
  }
  
  
  private _status : string;
  public get status() : string {
    return this._status;
  }
  public set status(v : string) {
    this._status = v;
  }
  
  isAuthenticated():boolean{
      let result = this.userName === 'balram' && this.password === 'chavan';
      debugger;
      if(result){
        this.status = "Login successful!";
      }
      return result;
  }
}
