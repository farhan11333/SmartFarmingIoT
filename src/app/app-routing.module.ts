import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
 {
   path: '', redirectTo: 'login', pathMatch: 'full' },
  {
    path: 'login', loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
},
  {
    path: 'registration',
    loadChildren: () => import('./registration/registration.module').then( m => m.RegistrationPageModule)
  },
  {
    path: 'forgot-password',
    loadChildren: () => import('../app/forgotpassword/forgot-password.module').then( m => m.ForgotPasswordPageModule)
  },
  {
    path: 'main',
    loadChildren: () => import('./main/main.module').then( m => m.MainPageModule)
  },
  {
    path: 'popover',
    loadChildren: () => import('./popover/popover.module').then( m => m.PopoverPageModule)
  },
  {
    path: 'motorstatus',
    loadChildren: () => import('./motorstatus/motorstatus.module').then( m => m.MotorstatusPageModule)
  },
  {
    path: 'user-profile',
    loadChildren: () => import('./user-profile/user-profile.module').then( m => m.UserProfilePageModule)
  },
  {
    path: 'admin-view',
    loadChildren: () => import('./admin-view/admin-view.module').then( m => m.AdminViewPageModule)
  },
  {
    path: 'admin-popover',
    loadChildren: () => import('./admin-popover/admin-popover.module').then( m => m.AdminPopoverPageModule)
  },
  {
    path: 'admin-view-users',
    loadChildren: () => import('./admin-view-users/admin-view-users.module').then( m => m.AdminViewUsersPageModule)
  },
  {
    path: 'admin-view-devices',
    loadChildren: () => import('./admin-view-devices/admin-view-devices.module').then( m => m.AdminViewDevicesPageModule)
  },
  {
    path: 'add-user',
    loadChildren: () => import('./add-user/add-user.module').then( m => m.AddUserPageModule)
  },
  {
    path: 'add-field',
    loadChildren: () => import('./add-field/add-field.module').then( m => m.AddFieldPageModule)
  },
  {
    path: 'administrator',
    loadChildren: () => import('./administrator/administrator.module').then( m => m.AdministratorPageModule)
  },
  {
    path: 'administratorpopover',
    loadChildren: () => import('./administratorpopover/administratorpopover.module').then( m => m.AdministratorpopoverPageModule)
  },
  {
    path: 'view-farmers',
    loadChildren: () => import('./view-farmers/view-farmers.module').then( m => m.ViewFarmersPageModule)
  },
  {
    path: 'view-smartdevices',
    loadChildren: () => import('./view-smartdevices/view-smartdevices.module').then( m => m.ViewSmartdevicesPageModule)
  },
  {
    path: 'add-farmer',
    loadChildren: () => import('./add-farmer/add-farmer.module').then( m => m.AddFarmerPageModule)
  },
  {
    path: 'add-smartdevices',
    loadChildren: () => import('./add-smartdevices/add-smartdevices.module').then( m => m.AddSmartdevicesPageModule)
  },
  {
    path: 'delete-popover',
    loadChildren: () => import('./delete-popover/delete-popover.module').then( m => m.DeletePopoverPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
