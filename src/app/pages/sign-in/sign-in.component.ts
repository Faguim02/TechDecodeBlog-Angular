import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'
import { SignInService } from '../../service/sign-in.service';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-sign-in',
  standalone: true,
  imports: [FormsModule, HttpClientModule],
  templateUrl: './sign-in.component.html',
  styleUrl: './sign-in.component.scss'
})
export class SignInComponent {

  constructor(private signInService: SignInService){}

  @Input() user_email!: string;
  @Input() user_password!: string;

  async handleActiomForm(){
    const data = {
      user_email: this.user_email,
      user_password: this.user_password
    }

    await this.signInService.signIn(data)
  }
}
