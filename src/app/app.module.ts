import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { MenageComponent } from './menage/menage.component';
import { VoitureComponent } from './voiture/voiture.component';
import { PlomberieComponent } from './plomberie/plomberie.component';
import { PetitstravauxComponent } from './petitstravaux/petitstravaux.component';
import { JardinageComponent } from './jardinage/jardinage.component';
import { ContactComponent } from './contact/contact.component';
import { NotreideeComponent } from './notreidee/notreidee.component';
import { AproposComponent } from './apropos/apropos.component';
import { ProfilComponent } from './profil/profil.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    MenageComponent,
    VoitureComponent,
    PlomberieComponent,
    PetitstravauxComponent,
    JardinageComponent,
    ContactComponent,
    NotreideeComponent,
    AproposComponent,
    ProfilComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
