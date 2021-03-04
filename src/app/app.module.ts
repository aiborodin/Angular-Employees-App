import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { MyComponent } from './my/my.component';
import { GroupComponent } from './group/group.component';

@NgModule({
  declarations: [
    AppComponent, MyComponent, GroupComponent
  ],
  imports: [
    BrowserModule, FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
