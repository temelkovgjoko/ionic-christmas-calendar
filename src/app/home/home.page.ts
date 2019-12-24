import { Component } from "@angular/core";
import { ToastController, AlertController } from "@ionic/angular";

@Component({
  selector: "app-home",
  templateUrl: "home.page.html",
  styleUrls: ["home.page.scss"]
})
export class HomePage {
  doors = [...Array(31).keys()];
  currentDate = new Date();
  constructor(
    private toastCtrl: ToastController,
    private alertCtrl: AlertController
  ) {}

  async openDoor(index) {
    console.log("door", index + 1);
    if (this.closed(index)) {
      const toast = await this.toastCtrl.create({
        header: "Just a few more days...",
        duration: 2000
      });
      toast.present();
    } else {
      const alert = await this.alertCtrl.create({
        header: `Day ${index + 1}`,
        message: "Ho ho ho!",
        buttons: ["Ok"]
      });
      alert.present();
    }
  }

  closed(day) {
    return this.currentDate.getDate() < day + 1;
  
  }
}
