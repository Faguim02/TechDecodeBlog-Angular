import { Injectable } from '@angular/core';
import { environment } from '../../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DeleteNoticeService {

  private url = environment.api_url;

  async deleteNotice(id: string){
    try {

      const token = document.cookie.split("=")[1]

      const headers = new Headers()

      headers.append('Authorization', `Bearer ${token}`)
      
      fetch(this.url+'admin/deleteNotice/'+id, {
        method: 'DELETE',
      })

    } catch (error) {
      
    }
  }

}