import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { SignIn } from '../../pages/sign-in/sign-in.dto';

@Injectable({
  providedIn: 'root'
})
export class SignInService {

  private url = environment.api_url

  async signIn(data: SignIn): Promise<string>{
    let res = await fetch(`${this.url}auth/signIn`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })

    let jwt

    await res.json().then(res => jwt = res.access_token)

    if (jwt){
      document.cookie = `token=${jwt};path=/`;
      document.location.pathname = 'dashboard'
      return "sucess"
    }

    return "error"

  }

}
