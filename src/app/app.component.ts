import { Component } from '@angular/core';
import {LiferayService} from "./liferay.service";

@Component({
  selector: 'lr-get-email',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'RetrieveEmail';

  constructor(public liferaySrv:LiferayService) {
    this.getEmail();
  }
  public userInfo : any;

  public async getEmail()
  {
    this.userInfo = await this.liferaySrv.getUserData("mahmoud.tayem@liferay.com","test123");
    console.clear();
    console.log(this.userInfo);
  }
}
