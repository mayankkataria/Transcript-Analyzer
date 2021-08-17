import {NgModule} from '@angular/core';

import {CoreModule} from '../../core.module';
import HeaderComponent from '../header/header.component';
import HeaderModule from '../header/header.module';
import { HomeComponent } from './home.component';

@NgModule({
  imports: [CoreModule, HeaderModule],
})
export default class HomeModule {
}
