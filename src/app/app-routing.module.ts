import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AproposComponent } from './apropos/apropos.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { JardinageComponent } from './jardinage/jardinage.component';
import { MenageComponent } from './menage/menage.component';
import { NotreideeComponent } from './notreidee/notreidee.component';
import { PetitstravauxComponent } from './petitstravaux/petitstravaux.component';
import { PlomberieComponent } from './plomberie/plomberie.component';
import { ProfilComponent } from './profil/profil.component';
import { VoitureComponent } from './voiture/voiture.component';

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'menage', component: MenageComponent},
  {path: 'voiture', component: VoitureComponent},
  {path: 'plomberie', component: PlomberieComponent},
  {path: 'petits_travaux', component: PetitstravauxComponent},
  {path: 'jardinage', component: JardinageComponent},
  {path: 'notre_concept', component: NotreideeComponent},
  {path: 'a_propos', component: AproposComponent},
  {path: 'contact', component: ContactComponent},
  {path: 'profil', component: ProfilComponent},
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: '**', redirectTo: 'home'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
