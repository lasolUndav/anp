// src/app/components/header.component.ts
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})

export class HeaderComponent implements OnInit {
  classForMainTitle: string;
  classForSubTitle: string;
  mainTitleForDesktop = 'mat-display-4 titulo sombra';
  mainTitleForMobile = 'mat-display-1 titulo sombra';
  subTitleForDesktop = 'mat-display-1 sombra';
  subTitleForMobile = 'mat-caption sombra';
  navigate(route){
    window.scrollTo({top: 620, behavior: 'smooth'});
    this.router.navigate([route]);
    }
  constructor(private router : Router) {}

  ngOnInit() {
    this.setTypography();
  }

  onResize(event){
    this.setTypography();
  }

  private setTypography() {
    if (window.innerWidth <= 400) {
      this.classForMainTitle = this.mainTitleForMobile;
      this.classForSubTitle = this.subTitleForMobile;
    }
    else {
      this.classForMainTitle = this.mainTitleForDesktop;
      this.classForSubTitle = this.subTitleForDesktop;
    }
  }
}
