import { Component, Injectable, Input } from '@angular/core';
import { DashboardComponent } from '../../pages/dashboard/dashboard.component';
import { CommonModule } from '@angular/common';
import { DeleteNoticeService } from '../../service/notices/delete-notice/delete-notice.service';

@Component({
  selector: 'app-notice-component-dashboard',
  standalone: true,
  imports: [DashboardComponent, CommonModule],
  templateUrl: './notice-component-dashboard.component.html',
  styleUrl: './notice-component-dashboard.component.scss'
})
@Injectable()
export class NoticeComponentDashboardComponent {
  @Input() id!: string | any;
  @Input() title!: string;
  @Input() visites!: number;

  constructor(private deleteNoticeService: DeleteNoticeService){}

  async handleDeleteNotice(){
    await this.deleteNoticeService.deleteNotice(this.id)
  }
}
