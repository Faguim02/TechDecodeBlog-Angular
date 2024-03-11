import { Component } from '@angular/core';
import { NoticeComponentDashboardComponent } from '../../components/notice-component-dashboard/notice-component-dashboard.component';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [NoticeComponentDashboardComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {

}
