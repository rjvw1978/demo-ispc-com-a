import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { Contact } from './pages/contact/contact';
import { SignIn } from './auth/sign-in/sign-in';

export const routes: Routes = [
    { path:"home", component:Home},
    { path:"contact", component:Contact},
    { path: "sign-in", component:SignIn}
];
