import { Component, OnInit } from '@angular/core';
import { MockData } from '../../shared/services/mock-data';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-attendence',
  imports: [CommonModule],
  templateUrl: './attendence.html',
  styleUrl: './attendence.scss',
})
export class Attendence implements OnInit{
  attendanceList: any[] = [];

  constructor(private mockData: MockData) {}

  ngOnInit(): void {
    this.attendanceList = this.mockData.getAttendance();
  }

  onSearch(value: string) {
    this.attendanceList = value
      ? this.mockData.searchAttendance(value)
      : this.mockData.getAttendance();
  }

}
