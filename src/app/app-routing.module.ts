import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import {NavController, Platform} from '@ionic/angular';
import {Storage} from '@ionic/storage';

const routes: Routes = [
  {
    path: 'tab2',
    loadChildren: () => import('./tab2/tab2.module').then(m => m.Tab2PageModule)
  },
  {
    path: 'tabs',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: '',
    loadChildren: () => import('./intro/intro.module').then( m => m.IntroPageModule)
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {
  constructor(
      private navCtrl: NavController,
      private storage: Storage,
      private platform: Platform
  ) {
    this.platform.ready().then(() => {
      this.storage.get('puppyApp.introOpened').then((data: any) => {
        if (data) {
          this.navCtrl.navigateRoot('/tabs');
        } else {
          this.navCtrl.navigateRoot('/');
        }
      });
    });
  }
}
