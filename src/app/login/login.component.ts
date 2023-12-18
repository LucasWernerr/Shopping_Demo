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
  hide = true;
  email: string = "";
  password: string = "";
  loginSuccess: boolean = false;

  constructor(private dataRequest: DataRequestService, private authService: AuthService, private router: Router) {}

  async loginUser() {
    console.log("User wird eingeloggt")
    var users = this.dataRequest.getUsers();
    (await users).subscribe(allUsers => {
      console.log(allUsers);
      console.log(typeof allUsers);
      allUsers.forEach(user => {

        console.log(user);
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
