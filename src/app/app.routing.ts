import { Routes, RouterModule } from '@angular/router';
import { UsersComponent } from "./users/users.component";
import { AddUserComponent } from "./add-user/add-user.component";
import { UserProfileComponent } from "./user-profile/user-profile.component";


const MAINMENU_ROUTES: Routes = [

                      { path: '', redirectTo: '/users', pathMatch: 'full' },
                      { path: 'users', component: UsersComponent },
                      { path: 'add-user', component: AddUserComponent },
                      { path: 'user-profile', component: UserProfileComponent },
                    ];

export const CONST_ROUTING = RouterModule.forRoot(MAINMENU_ROUTES);
