import {
  Component
} from '@angular/core';
import {
  DataRequestService
} from '../services/data-request.service';
import {
  AuthService
} from '../services/auth.service';
import { Router } from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  public hide = true;
  public email: string = "";
  public password: string = "";
  public loginSuccess: boolean = false;

  constructor(private dataRequest: DataRequestService, private authService: AuthService, private router: Router) {}

  loginUser() {
    var users = this.dataRequest.getUsers();
    users.subscribe(allUsers => {
      allUsers.forEach(user => {

        if(user.email == this.email) {
          if(user.password == this.password) {
              this.loginSuccess = true;
              this.authService.isLoggedIn = true;
            }else {
              console.log("Login nicht erfolgreich. Bitte erneut probieren");
            }
          }
        });

        if(this.loginSuccess) {
          this.router.navigate(["/main"]);
        }

    })
  }
}
