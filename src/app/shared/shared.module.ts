import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import {MatToolbarModule} from '@angular/material/toolbar';

const commonModules = [
  MatIconModule,
  MatMenuModule,
  MatToolbarModule
 ];
@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    SharedRoutingModule,
    ...commonModules
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    ...commonModules
  ],
})
export class SharedModule { }
