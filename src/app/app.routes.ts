import { Routes } from '@angular/router';
import { LayoutComponent } from '../app/core/layout/layout/layout';



export const routes: Routes = [
{
    path: '',
    component: LayoutComponent,
    children: [
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
      { path: 'dashboard', loadComponent: () => import('../app/modules/dashboard/dashboard/dashboard').then(m => m.Dashboard) },
      { path: 'attendance', loadComponent: () => import('../app/modules/attendence/attendence').then(m => m.Attendence) },
      { path: 'employees', loadComponent: () => import('../app/modules/dashboard/components/employee-table/employee-table').then(m => m.EmployeeTable) },
      { path: 'performance', loadComponent: () => import('../app/modules/dashboard/components/performance-chart/performance-chart').then(m => m.PerformanceChart) }
    ]
  }
];
