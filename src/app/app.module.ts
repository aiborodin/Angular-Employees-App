import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { GroupComponent } from './group/group.component';
import { NewGroupComponent } from './new-group/new-group.component';

@NgModule({
  declarations: [
    AppComponent, GroupComponent, NewGroupComponent
  ],
  imports: [
    BrowserModule, FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
