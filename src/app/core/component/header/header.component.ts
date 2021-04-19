import { Component, OnInit } from '@angular/core';
import { Routes, Router, NavigationStart, Event as RouterEvent } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

isHome: boolean = true;
isUserLoggedIn: boolean = false;
  constructor( private router: Router) { 
    router.events.subscribe((event: RouterEvent) => {
      if (router.url === '/') {
       this.isHome = false;
      } else {
       this.isHome = true;
      }

      const isLogged = sessionStorage.getItem('isUserLogged');
    console.log(isLogged);
    
    if(isLogged === 'true'){
      this.isUserLoggedIn = true;
    }else{
      this.isUserLoggedIn = false;
    }
    });
  }

  ngOnInit(): void {
    
  }

  logout(){
    sessionStorage.removeItem('isUserLogged');
    sessionStorage.removeItem('email');
    this.router.navigate(['./']);
  }
}
