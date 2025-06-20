import { Routes } from '@angular/router';
import {  LoginComponent } from './components/login/login.component';
import { UploadComponent } from './components/upload/upload.component';
import { AdminComponent } from './components/admin/admin.component';
import { UserComponent } from './components/user/user.component';
import { RecordListComponent } from './components/record/record-list.component';
import { TeacherChatComponent } from './components/session/teacherChat/teacher-chat.component';
import { StudentChatComponent } from './components/session/studentChat/student-chat.component';
import { FeedbackChatComponent } from './components/feedbackChat/student/feedback-chat.component';
import { RegisterComponent } from './components/register/register.component';
import { authGuard } from './core/guards/auth.guard';
import { adminGuard } from './core/guards/admin.guard';
import { MyParashaComponent } from './components/my-parasha/my-parasha.component';

export const routes: Routes = [
  { path: 'login', component: LoginComponent, title: 'TuvTaam: Login' },
  { path: 'register', component: RegisterComponent, title: 'TuvTaam: Register' },
  {
    path: 'admin',
    component: AdminComponent,
    title: 'TuvTaam: Personal Area: Admin',
    canActivate: [adminGuard],
  },
  {
    path: 'user',
    component: UserComponent,
    title: 'TuvTaam: Personal Area: User',
    canActivate: [authGuard],
  },
  {
    path: 'upload',
    component: UploadComponent,
    title: 'TuvTaam: Upload Record',
    canActivate: [adminGuard],
  },
  {
    path: 'feedbackChat',
    component: FeedbackChatComponent,
    title: 'TuvTaam: Feedback Chat',
    canActivate: [authGuard],
  },
  {
    path: 'records',
    component: RecordListComponent,
    title: 'TuvTaam: Records',
    canActivate: [authGuard],
  },
  {
    path: 'my-parasha',
    component: MyParashaComponent,
    title: 'TuvTaam: My Parasha',
    canActivate: [authGuard],
  },
  { path: 'home', component: FeedbackChatComponent, title: 'TuvTaam' }, // TODO: Change to HomeComponent when created
  { path: '', redirectTo: 'home', pathMatch: 'full' },
];
