import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common'; // 👈 Necesario para *ngIf, *ngFor, etc.

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.html',
  styleUrls: ['./home.css'],
})
export class HomeComponent {
  constructor(private router: Router) {}

  goToChat(): void {
    this.router.navigate(['/chat']);
  }
}
