import { AppComponent } from './app.component'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { BrowserModule } from '@angular/platform-browser'
import { DataComponent } from './components/data/data.component'
import { ListenerService } from './services/listener/listener.service'
import { MaterialModule } from './modules/material.module'
import { NgModule } from '@angular/core'
import { reducers } from '../store/reducers/reducers'
import { SortOptionsComponent } from './components/sort-options/sort-options.component'
import { StoreModule } from '@ngrx/store'
import { WebSocketService } from './services/web-socket/web-socket.service'


@NgModule({
  declarations: [
    AppComponent,
    DataComponent,
    SortOptionsComponent
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    MaterialModule,
    StoreModule.forRoot(reducers)
  ],
  providers: [WebSocketService, ListenerService],
  bootstrap: [AppComponent],
  entryComponents: [SortOptionsComponent]
})
export class AppModule { }
