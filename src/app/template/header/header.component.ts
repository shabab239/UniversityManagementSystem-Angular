import {Component, OnInit} from '@angular/core';
import {AuthService} from "../../security/auth/auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(
    protected authService: AuthService,
    private router: Router
  ) {
  }

  ngOnInit(): void {

  }

  logout() {
    this.authService.logout();
    this.router.navigate(['/login']);
  }
}
