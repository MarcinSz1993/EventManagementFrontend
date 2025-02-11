import { Component } from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {MainComponent} from '../../pages/main/main.component';

@Component({
  selector: 'app-main-layout',
  imports: [
    RouterOutlet,
    MainComponent
  ],
  templateUrl: './main-layout.component.html',
  standalone: true,
  styleUrl: './main-layout.component.scss'
})
export class MainLayoutComponent {

}
