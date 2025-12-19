import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MockData {
  getStats() {
    return [
      { label: 'Total Employees', value: 120, trend: '+4' },
  { label: 'Active Employees', value: 105, trend: '+3' },
  { label: 'On Leave', value: 8, trend: '-1' },
  { label: 'New Joinees', value: 7, trend: '+2' }

    ];
  }

  getPerformanceData() {
    return {
      labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
      values: [65, 72, 68, 75, 80, 78],
    };
  }

  getRecentActivities() {
    return [
{ type: 'employee', text: 'John joined as Software Engineer', time: '2 hours ago' },
  { type: 'payroll', text: 'Payroll processed for May', time: '5 hours ago' },
  { type: 'leave', text: 'Anna applied for leave', time: '1 day ago' }
    ];
  }

  private employees = [
    { id: 1, name: 'John Doe', role: 'Developer', status: 'Active' },
    { id: 2, name: 'Anna Smith', role: 'HR', status: 'On Leave' },
    { id: 3, name: 'Raj Kumar', role: 'Designer', status: 'Active' },
  ];

  private searchSubject = new BehaviorSubject<string>('');
  search$ = this.searchSubject.asObservable();

  private modeSubject = new BehaviorSubject<'employee' | 'attendance'>('employee');
  mode$ = this.modeSubject.asObservable();

  getEmployees() {
    return this.employees;
  }

  updateSearch(term: string) {
    this.searchSubject.next(term.toLowerCase());
  }
  updateMode(mode: 'employee' | 'attendance') {
    this.modeSubject.next(mode);
  }
  private attendance = [
    {
      id: 1,
      name: 'John Doe',
      date: '2025-01-12',
      status: 'Present',
      checkIn: '09:10 AM',
      checkOut: '06:15 PM',
    },
    {
      id: 2,
      name: 'Anna Smith',
      date: '2025-01-12',
      status: 'Absent',
      checkIn: '-',
      checkOut: '-',
    },
    {
      id: 3,
      name: 'Raj Kumar',
      date: '2025-01-12',
      status: 'Present',
      checkIn: '09:30 AM',
      checkOut: '06:05 PM',
    },
  ];
getQuarterlyPerformance() {
  return [
    { quarter: 'Q1', averageRating: 4.2 },
    { quarter: 'Q2', averageRating: 4.5 },
    { quarter: 'Q3', averageRating: 4.3 },
    { quarter: 'Q4', averageRating: 4.6 }
  ];
}

getEmployeePerformance() {
  return [
    { id: 1, name: 'John Doe', averageRating: 4.5, ratings: [4,4.5,5,4.5] },
    { id: 2, name: 'Anna Smith', averageRating: 4.2, ratings: [4,4,4.5,4.5] },
    { id: 3, name: 'Raj Kumar', averageRating: 4.8, ratings: [4.5,5,4.8,5] },
    { id: 4, name: 'Priya Sharma', averageRating: 4.1, ratings: [4,4,4,4.5] }
  ];
}


  getNotifications() {
    return [
      { id: 1, text: 'John applied for leave', time: '2 mins ago' },
      { id: 2, text: 'New employee added', time: '1 hour ago' },
      { id: 3, text: 'Attendance updated', time: 'Today' },
    ];
  }

  getAttendance() {
    return this.attendance;
  }

  searchAttendance(query: string) {
    return this.attendance.filter((item) => item.name.toLowerCase().includes(query.toLowerCase()));
  }
}
