import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {MatDividerModule} from '@angular/material/divider';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import {MatListModule} from '@angular/material/list';
import {MatSidenavModule} from '@angular/material/sidenav';
import { FlexLayoutModule } from '@angular/flex-layout';

const commonModules = [
  MatIconModule,
  MatMenuModule,
  MatToolbarModule,
  MatButtonModule,
  MatDividerModule,
  MatListModule,
  MatSidenavModule,
  FlexLayoutModule
 ];
@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    SidenavComponent
  ],
  imports: [
    CommonModule,
    SharedRoutingModule,
    ...commonModules
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    SidenavComponent,
    ...commonModules
  ],
})
export class SharedModule { }
