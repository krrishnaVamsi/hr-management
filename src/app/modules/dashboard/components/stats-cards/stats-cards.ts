import { Component } from '@angular/core';
import { MockData } from '../../../../shared/services/mock-data';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-stats-cards',
  imports: [CommonModule],
  templateUrl: './stats-cards.html',
  styleUrl: './stats-cards.scss',
})
export class StatsCards {
    stats : any = [];

  constructor(private mockData: MockData) {
    this.stats = this.mockData.getStats();
  }

}
