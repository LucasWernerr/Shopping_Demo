import { Component } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

  public displayLogout: boolean = false;

  constructor(private authService: AuthService, private router: Router) {
    if(this.authService.isLoggedIn) {
      this.displayLogout = true;
    }
  }


  /**
   * Benutzer ausloggen
   */
  logout() {
    this.authService.isLoggedIn = false;
    this.router.navigate(["/login"])
  }
}
