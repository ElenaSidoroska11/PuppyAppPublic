import { Component, OnInit } from '@angular/core';
import { NavParams, PopoverController} from '@ionic/angular';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-doge-pop',
  templateUrl: './doge-pop.component.html',
  styleUrls: ['./doge-pop.component.scss'],
})


export class DogePopComponent implements OnInit {
  item: any = {};
  constructor(
      private popoverController: PopoverController,
      private navParams: NavParams,
      private storage: Storage
  ) {
    this.item = this.navParams.get('item');
  }



  ngOnInit() {}

  async dismissPopover() {
    await this.popoverController.dismiss();
  }
}
