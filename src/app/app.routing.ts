import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Import Containers
import { DefaultLayoutComponent } from './containers';

import { P404Component } from './views/error/404.component';
import { P500Component } from './views/error/500.component';
import { LoginComponent } from './views/login/login.component';
import { RegisterComponent } from './views/register/register.component';
import { GradesComponent } from './views/grades/grades.component';
import { CurriculumComponent } from './views/curriculum/curriculum.component';
import { ScheduleComponent } from './views/schedule/schedule.component';
import { ProfileComponent } from './views/profile/profile.component';
import { BalanceDuesComponent } from './views/balance-dues/balance-dues.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'grades',
    pathMatch: 'full',
  },
  {
    path: '404',
    component: P404Component,
    data: {
      title: 'Page 404'
    }
  },
  {
    path: '500',
    component: P500Component,
    data: {
      title: 'Page 500'
    }
  },
  {
    path: 'login',
    component: LoginComponent,
    data: {
      title: 'Login Page'
    }
  },
  {
    path: 'register',
    component: RegisterComponent,
    data: {
      title: 'Register Page'
    }
  },
  {
    path: '',
    component: DefaultLayoutComponent,
    data: {
      title: 'Home'
    },
    children: [
      {
        path: 'dashboard',
        loadChildren: './views/dashboard/dashboard.module#DashboardModule'
      },
      {
        path: 'grades',
        component: GradesComponent,
        data: {
          title: 'Grade Viewing'
        }
      },
      {
        path: 'curriculum',
        component: CurriculumComponent,
        data: {
          title: 'Curriculum'
        }
      },
      {
        path: 'schedule',
        component: ScheduleComponent,
        data: {
          title: 'Schedule'
        }
      },
      {
        path: 'profile',
        component: ProfileComponent,
        data: {
          title: 'Profile'
        }
      },
      {
        path: 'balancedues',
        component: BalanceDuesComponent,
        data: {
          title: 'Balance Dues'
        }
      }
    ]
  },
  { path: '**', component: P404Component }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
