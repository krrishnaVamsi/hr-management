import { Component, EventEmitter, Output } from '@angular/core';
import { MockData } from '../../shared/services/mock-data';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-notification-dialog',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './notification-dialog.html',
  styleUrls: ['./notification-dialog.scss']
})
export class NotificationDialog {
  @Output() close = new EventEmitter<void>();
  notifications: any[] = [];

  constructor(private mockData: MockData) {
    this.notifications = this.mockData.getNotifications();
    console.log('Bell clicked, showNotifications=', this.notifications);
  }

  onOverlayClick() {
    this.close.emit();
  }
}
