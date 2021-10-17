import { Component, OnInit } from '@angular/core';
import {NavController} from '@ionic/angular';
import {Storage} from '@ionic/storage';

@Component({
  selector: 'app-intro',
  templateUrl: './intro.page.html',
  styleUrls: ['./intro.page.scss'],
})
export class IntroPage implements OnInit {

  constructor(
      private navCtrl: NavController,
      private storage: Storage
  ) { }

  ngOnInit() {
  }
  goToHome() {
    this.navCtrl.navigateRoot('/tabs');
    this.storage.set('puppyApp.introOpened', true);
  }
}
