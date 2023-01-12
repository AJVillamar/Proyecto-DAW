import { slideInAnimation } from './../../../animations';
import { Router, RouterOutlet } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { Admi } from 'src/app/Interfaces/IAdmi';

@Component({
  selector: 'app-customize',
  templateUrl: './customize.component.html',
  styleUrls: ['./customize.component.css'],
  animations: [ slideInAnimation ]
})

export class CustomizeComponent implements OnInit {
  administrador!: Admi;

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  constructor(
    private breakpointObserver: BreakpointObserver,
    private router: Router
  ) {
    // this.administrador = this.router.getCurrentNavigation()?.extras.state?.['data'];
  } 
  
  ngOnInit() {  
  }
  
  prepareRoute(outlet: RouterOutlet) {
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData['animation'];
  }
}
