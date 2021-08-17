import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexModule } from '@angular/flex-layout';
import { HomeComponent } from './components/home/home.component';

@NgModule({
    imports: [
        CommonModule,
        FlexModule
    ],
    exports: [
        CommonModule,
        FlexModule
    ],
    declarations: [HomeComponent]
})
export class CoreModule {}
