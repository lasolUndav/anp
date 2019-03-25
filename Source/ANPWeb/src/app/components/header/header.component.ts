// src/app/components/header.component.ts
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})

export class HeaderComponent implements OnInit {
  navigate(route){
    window.scrollTo({top:620, behavior: 'smooth'});
    this.router.navigate([route]);
    }
  constructor(private router : Router) {}
  ngOnInit() {}
  }