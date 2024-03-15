import { Injectable } from '@angular/core';
import { environment } from '../../../../environments/environment';
import { NoticesDto } from './notices.dto';

@Injectable({
  providedIn: 'root'
})
export class FindAllNoticesService {

  private url = environment.api_url

  async findAllNotices(): Promise<NoticesDto[]>{

    const notices = await fetch(`${this.url}notices`)
    .then(res => res.json())

    return notices;

  }
}
