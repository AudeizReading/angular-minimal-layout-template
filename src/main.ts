import { Component } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { LayoutComponent } from '@app/layout/layout.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [LayoutComponent],
  template: `
  <app-layout>
    <h1  layoutHeader>Hello from {{ name }}!</h1>
	  <div layoutMain>
      <a target="_blank" href="https://angular.dev/overview">
        Learn more about Angular
      </a>
	  </div>
	  <div layoutFooter>
      {{ now }}
	  </div>
</app-layout>
    
   
  `,
})
export class App {
  public name = 'Angular';
  public now = new Date();
}

bootstrapApplication(App);
