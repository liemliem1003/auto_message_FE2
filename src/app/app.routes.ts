import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { ChannelsComponent } from './channels/channels.component';
import { ChannelDetailsComponent } from './channel-details/channel-details.component';
import { PostsComponent } from './posts/posts.component';
import { PostDetailsComponent } from './post-details/post-details.component';
import { PostOnBatchComponent } from './post-on-batch/post-on-batch.component';


// var routeLogin: Routes = [
//     { path: 'dashboard', component: DashboardComponent },
//     { path: 'sale-report', component: SalesreportComponent },
//     { path: 'restaurant', component: RestaurantsComponent },
//     { path: 'customer', component: CustomerComponent },
//     { path: 'customer-detail', component: CustomerDetailComponent },
//     { path: 'customer-detail2', component: CustomerDetail2Component },
//     { path: 'restaurant-details', component: RestaurantDetailComponent },
//     { path: 'developing', component: DevelopingComponent },
//     { path: '**', redirectTo: '/dashboard', pathMatch: 'full' },
// ]

var Login: Routes = [
    { path: 'login', component: LoginComponent },
    { path: 'channels', component: ChannelsComponent },
    { path: 'channel-details', component: ChannelDetailsComponent },
    { path: 'post-on-bacth', component: PostOnBatchComponent },
    { path: 'posts', component: PostsComponent },
    { path: 'post-details', component: PostDetailsComponent },
    { path: '**', redirectTo: '/login', pathMatch: 'full' },
]

export const routes: Routes = Login