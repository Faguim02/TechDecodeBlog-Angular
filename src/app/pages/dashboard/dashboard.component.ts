import { Component, Injectable, OnInit } from '@angular/core';
import { NoticeComponentDashboardComponent } from '../../components/notice-component-dashboard/notice-component-dashboard.component';
import { FindAllNoticesService } from '../../service/notices/find-all-notices/find-all-notices.service';
import { NoticesDto } from '../../service/notices/find-all-notices/notices.dto';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [NoticeComponentDashboardComponent, CommonModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
@Injectable()
export class DashboardComponent implements OnInit {
  
  constructor(private findAllNoticesServices: FindAllNoticesService){}

  notices!: Promise<NoticesDto[]>
  
  ngOnInit(): void {
    this.notices = this.findAllNoticesServices.findAllNotices()
  }
}
