import { Component } from '@angular/core';
import {Platform, PopoverController} from '@ionic/angular';
import {DogePopComponent} from '../doge-pop/doge-pop.component';
import {ModalController} from '@ionic/angular';
import {Storage} from '@ionic/storage';
import { LocalNotifications } from '@ionic-native/local-notifications/ngx';



@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  send(){
    this.localNotifications.schedule({
      title: 'REMINDER',
      text: 'Click the application and view what we have for you!',
      trigger: {at: new Date(new Date().getTime() + 6000)},
      led: 'FF0000',
    });
  }

  items: any = [];
  constructor(
      public popoverController: PopoverController,
      private modalCtrl: ModalController,
      private storage: Storage,
      public localNotifications: LocalNotifications , public plt:Platform
  ) {
    const item: any = {
      id: 1,
      title: 'Loni',
      extraInfo: '1 year',
      picture: 'assets/adoption/dog1.jpg',
      picture2:'assets/extra/11.jpg',
      picture3:'assets/extra/12.jpg',
      picture4:'assets/extra/13.jpg'
    };

    this.items.push(item);


    const item1: any = {
      id: 2,
      title: 'Mila',
      extraInfo: '3months',
      picture: 'assets/adoption/cat1.jpg',
      picture2:'assets/extra/21.jpg',
      picture3:'assets/extra/22.jpg',
      picture4:'assets/extra/23.jpg'


    };

    this.items.push(item1);

    const item2: any = {
      id: 3,
      title: 'Roni',
      extraInfo: '1year',
      picture: 'assets/adoption/dog2.jpg',
      picture2:'assets/extra/31.jpg',
      picture3:'assets/extra/32.jpg',
      picture4:'assets/extra/33.jpg'


    };

    this.items.push(item2);

    const item3: any = {
      id: 4,
      title: 'Bubu',
      extraInfo: '2months',
      picture: 'assets/adoption/cat2.jpg',
      picture2:'assets/extra/41.jpg',
      picture3:'assets/extra/42.jpg',
      picture4:'assets/extra/43.jpg'


    };

    this.items.push(item3);
    const item4: any = {
      id: 5,
      title: 'Kira',
      extraInfo: '2years',
      picture: 'assets/adoption/dog3.jpg',
      picture2:'assets/extra/51.jpg',
      picture3:'assets/extra/52.jpg',
      picture4:'assets/extra/53.jpg'


    };

    this.items.push(item4);
    const item5: any = {
      id: 6,
      title: 'Kjara',
      extraInfo: '3years',
      picture: 'assets/adoption/cat3.jpg',
      picture2:'assets/extra/61.jpg',
      picture3:'assets/extra/62.jpg',
      picture4:'assets/extra/63.jpg'


    };

    this.items.push(item5);
    const item6: any = {
      id: 7,
      title: 'Stela',
      extraInfo: '5years',
      picture: 'assets/adoption/dog4.jpg',
      picture2:'assets/extra/71.jpg',
      picture3:'assets/extra/72.jpg',
      picture4:'assets/extra/73.jpg'


    };

    this.items.push(item6);
    const item7: any = {
      id: 8,
      title: 'Biba',
      extraInfo: '3months',
      picture: 'assets/adoption/cat4.jpg',
      picture2:'assets/extra/81.jpg',
      picture3:'assets/extra/82.jpg',
      picture4:'assets/extra/83.jpg'


    };

    this.items.push(item7);
    const item8: any = {
      id: 9,
      title: 'Lara',
      extraInfo: '3months',
      picture: 'assets/adoption/dog5.jpg',
      picture2:'assets/extra/91.jpg',
      picture3:'assets/extra/92.jpg',
      picture4:'assets/extra/93.jpg'


    };

    this.items.push(item8);
    const item9: any = {
      id: 10,
      title: 'Maca',
      extraInfo: '1year',
      picture: 'assets/adoption/cat5.jpg',
      picture2:'assets/extra/110.jpg',
      picture3:'assets/extra/120.jpg',
      picture4:'assets/extra/130.jpg'


    };

    this.items.push(item9);

    const item11: any = {
      id: 12,
      title: 'Ron',
      extraInfo: '6years',
      picture: 'assets/adoption/dog7.jpg',
      picture2:'assets/extra/210.jpg',
      picture3:'assets/extra/220.jpg',
      picture4:'assets/extra/230.jpg'


    };

    this.items.push(item11);
  }


  async showOptions(item) {
    const popover = await this.popoverController.create({
      component: DogePopComponent,
      componentProps: { item }
    });

    await popover.present();
    const { data } = await popover.onWillDismiss();
  };
}
