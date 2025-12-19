import { Component } from '@angular/core';
import { MockData } from '../../../../shared/services/mock-data';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-recent-activity',
  imports: [CommonModule],
  templateUrl: './recent-activity.html',
  styleUrl: './recent-activity.scss',
})
export class RecentActivity {
  activities :any = [];

  constructor(private mockData: MockData) {
    this.activities = this.mockData.getRecentActivities();
  }

}
