import { Component } from '@angular/core';
import { PerformanceChart } from "../components/performance-chart/performance-chart";
import { RecentActivity } from "../components/recent-activity/recent-activity";
import { EmployeeTable } from "../components/employee-table/employee-table";
import { StatsCards } from "../components/stats-cards/stats-cards";
import { MockData } from '../../../shared/services/mock-data';

@Component({
  selector: 'app-dashboard',
  imports: [PerformanceChart, RecentActivity, EmployeeTable, StatsCards],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.scss',
})
export class Dashboard {

constructor(private mockData: MockData) {}
  quarterLabels: string[] = [];
  quarterRatings: number[] = [];
ngOnInit() {
  const data = this.mockData.getQuarterlyPerformance();
  this.quarterLabels = data.map(d => d.quarter);
  this.quarterRatings = data.map(d => d.averageRating);
}


}
