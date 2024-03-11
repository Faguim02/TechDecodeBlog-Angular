import { Routes } from '@angular/router';
import { SignInComponent } from './pages/sign-in/sign-in.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { CreateNoticeComponent } from './pages/create-notice/create-notice.component';
import { UpdateNoticeComponent } from './pages/update-notice/update-notice.component';

export const routes: Routes = [
    { path: 'signIn', component: SignInComponent },
    { path: 'dashboard', component: DashboardComponent },
    { path: 'createNotice', component: CreateNoticeComponent },
    { path: 'updateNOtice', component: UpdateNoticeComponent }
];
