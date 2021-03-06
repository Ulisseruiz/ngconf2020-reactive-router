import { Component, OnInit } from '@angular/core';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@ngconf/router';
import { Lazy2Component } from '../lazy2/lazy2.component';

@Component({
  selector: 'app-lazy',
  templateUrl: './lazy.component.html',
  styleUrls: ['./lazy.component.css'],
})
export class LazyComponent implements OnInit {
  lazy2Component = Lazy2Component;

  constructor() { }

  ngOnInit(): void {
  }

}

@NgModule({
  declarations: [LazyComponent],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class LazyModule { }
