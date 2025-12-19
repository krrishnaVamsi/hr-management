import { AfterViewInit, Component, Input, OnInit } from '@angular/core';
import { Chart } from 'chart.js/auto';
import { MockData } from '../../../../shared/services/mock-data';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-performance-chart',
  imports: [CommonModule],
  templateUrl: './performance-chart.html',
  styleUrls: ['./performance-chart.scss'],
  standalone: true,
})
export class PerformanceChart implements OnInit, AfterViewInit {
  @Input() title: string = 'Performance Overview';

  // Dashboard mode
  @Input() labels: string[] = [];
  @Input() values: number[] = [];

  // Employee mode
  employeePerformance: any[] = [];
  showEmployeeCards = false;

  constructor(private mockData: MockData, private router: Router) {}

  ngOnInit(): void {
    const url = this.router.url;

    if (url.includes('dashboard')) {
      const data = this.mockData.getQuarterlyPerformance();
      this.labels = data.map((d) => d.quarter);
      this.values = data.map((d) => d.averageRating);
      this.showEmployeeCards = false;
    } else if (url.includes('performance')) {
      this.employeePerformance = this.mockData.getEmployeePerformance();
      this.showEmployeeCards = true;
    }
  }

  ngAfterViewInit(): void {
    if (!this.showEmployeeCards && this.labels.length && this.values.length) {
      new Chart('performanceChart', {
        type: 'line',
        data: {
          labels: this.labels,
          datasets: [
            {
              label: 'Performance',
              data: this.values,
              backgroundColor: 'rgba(109, 142, 101, 0.7)',
              hoverBackgroundColor: 'rgba(14, 212, 27, 0.9)',
              fill: true,
              tension: 0.45,
              pointRadius: 4,
              borderWidth: 2.5,
              pointBorderColor: '#7dd3fc',
              pointBackgroundColor: '#046ce2f5',
            },
          ],
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          plugins: {
            legend: { display: false },
            
          },
          scales: {
              x: {
                ticks: { color: '#e5edff' },
                grid: { color: 'rgba(255,255,255,0.08)' },
              },
              y: {
                ticks: { color: '#e5edff' },
                grid: { color: 'rgba(255,255,255,0.08)' },
              },
            },
        },
      });
    } else if (this.showEmployeeCards) {
      // Render mini charts after view init for each employee
      setTimeout(() => {
        this.employeePerformance.forEach((emp) => {
          const ctx = document.getElementById(`chart-${emp.id}`) as HTMLCanvasElement;
          if (ctx) {
            new Chart(ctx, {
              type: 'bar',
              data: {
                labels: ['Q1', 'Q2', 'Q3', 'Q4'], // or random/mock per employee
                datasets: [
                  {
                    data: emp.ratings,
                    backgroundColor: 'rgba(109, 142, 101, 0.7)',
                    hoverBackgroundColor: 'rgba(147, 197, 253, 0.9)',
                  },
                ],
              },
              options: {
                responsive: true,
                plugins: { legend: { display: false } },
                scales: {
                  x: {
                    ticks: { color: '#e5edff' },
                    grid: { display: false },
                  },
                  y: {
                    ticks: { color: '#e5edff' },
                    grid: { color: 'rgba(255,255,255,0.08)' },
                  },
                },
              },
            });
          }
        });
      }, 0);
    }
  }
}
