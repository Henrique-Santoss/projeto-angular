import { Component, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: false,

  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnDestroy {
  ngOnDestroy(): void {
    console.log('Destruiu')
  }
}
