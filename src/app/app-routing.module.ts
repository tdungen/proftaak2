import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'detail',
    loadChildren: () => import('./detail/detail.module').then( m => m.DetailPageModule)
  },
  {
    path: 'aboutus',
    loadChildren: () => import('./aboutus/aboutus.module').then( m => m.AboutusPageModule)
  },
  {
    path: 'interstellar',
    loadChildren: () => import('./interstellar/interstellar.module').then( m => m.InterstellarPageModule)
  },
  {
    path: 'greenland',
    loadChildren: () => import('./greenland/greenland.module').then( m => m.GreenlandPageModule)
  },
  {
    path: 'armyofdead',
    loadChildren: () => import('./armyofdead/armyofdead.module').then( m => m.ArmyofdeadPageModule)
  },
  {
    path: 'fast',
    loadChildren: () => import('./fast/fast.module').then( m => m.FastPageModule)
  },
  {
    path: 'neverland',
    loadChildren: () => import('./neverland/neverland.module').then( m => m.NeverlandPageModule)
  },
  {
    path: 'starwars',
    loadChildren: () => import('./starwars/starwars.module').then( m => m.StarwarsPageModule)
  },
  {
    path: 'captainmarvel',
    loadChildren: () => import('./captainmarvel/captainmarvel.module').then( m => m.CaptainmarvelPageModule)
  },
  {
    path: 'socialdillema',
    loadChildren: () => import('./socialdillema/socialdillema.module').then( m => m.SocialdillemaPageModule)
  },
  {
    path: 'wave',
    loadChildren: () => import('./wave/wave.module').then( m => m.WavePageModule)
  },
  {
    path: 'divergent',
    loadChildren: () => import('./divergent/divergent.module').then( m => m.DivergentPageModule)
  },
  {
    path: 'ted',
    loadChildren: () => import('./ted/ted.module').then( m => m.TedPageModule)
  },
  {
    path: 'awake',
    loadChildren: () => import('./awake/awake.module').then( m => m.AwakePageModule)
  },
  {
    path: 'joker',
    loadChildren: () => import('./joker/joker.module').then( m => m.JokerPageModule)
  },
  {
    path: 'populair',
    loadChildren: () => import('./populair/populair.module').then( m => m.PopulairPageModule)
  },
  {
    path: 'tellme',
    loadChildren: () => import('./tellme/tellme.module').then( m => m.TellmePageModule)
  },
  {
    path: 'voyager',
    loadChildren: () => import('./voyager/voyager.module').then( m => m.VoyagerPageModule)
  },
  {
    path: 'place',
    loadChildren: () => import('./place/place.module').then( m => m.PlacePageModule)
  },
  {
    path: 'split',
    loadChildren: () => import('./split/split.module').then( m => m.SplitPageModule)
  },
  {
    path: 'jumanji',
    loadChildren: () => import('./jumanji/jumanji.module').then( m => m.JumanjiPageModule)
  },
  {
    path: 'hero',
    loadChildren: () => import('./hero/hero.module').then( m => m.HeroPageModule)
  },
  {
    path: 'hell',
    loadChildren: () => import('./hell/hell.module').then( m => m.HellPageModule)
  },
  {
    path: 'lionking',
    loadChildren: () => import('./lionking/lionking.module').then( m => m.LionkingPageModule)
  },
  {
    path: 'blackpanther',
    loadChildren: () => import('./blackpanther/blackpanther.module').then( m => m.BlackpantherPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
