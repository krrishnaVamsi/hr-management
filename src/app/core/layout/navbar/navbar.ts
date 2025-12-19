import { Component, EventEmitter, Output } from '@angular/core';
import { MockData } from '../../../shared/services/mock-data';
import { Router } from '@angular/router';
import { NotificationDialog } from '../../../modules/notification-dialog/notification-dialog';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, NotificationDialog],
  templateUrl: './navbar.html',
  styleUrls: ['./navbar.scss'],
})
export class Navbar {
  @Output() menuToggle = new EventEmitter<void>();
  showNotifications = false;

  constructor(private readonly mockData: MockData, private readonly router: Router) {}

  onMenuClick() {
    this.menuToggle.emit();
  }

  onSearch(event: Event) {
    const value = (event.target as HTMLInputElement).value;
    this.mockData.updateSearch(value);

    if (value.trim()) {
      this.router.navigate(['/employees']);
    }
  }

  toggleNotifications() {
    this.showNotifications = !this.showNotifications;
  }
  isUserMenuOpen = false;

  toggleUserMenu() {
    this.isUserMenuOpen = !this.isUserMenuOpen;
  }
  
}
