import { CommonModule } from '@angular/common';
import {NgModule} from '@angular/core';
import { AppModule } from 'src/app/app.module';

import {CoreModule} from '../../core.module';
import HeaderComponent from '../header/header.component';
import HeaderModule from '../header/header.module';
import { HomeComponent } from './home.component';

@NgModule({
  imports: [CoreModule],
})
export default class HomeModule {
}
