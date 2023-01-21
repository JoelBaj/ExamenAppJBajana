import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.page.html',
  styleUrls: ['./alert.page.scss'],
})
export class AlertPage implements OnInit {

  handlerMessage = '';
  roleMessage = '';
  constructor(private alertCtrl: AlertController) { }

  ngOnInit() {
  }
  async presentAlert() {
    const alert = await this.alertCtrl.create({
      backdropDismiss: false,
      header: 'Prompt',
      inputs: [
        {
          name: 'valor',
          type: 'text',
          placeholder: 'Ingrese nombres'
        },
        {
          name: 'valor',
          type: 'text',
          placeholder: 'Ingrese apellidos'
        },
        {
          name: 'valor',
          type: 'text',
          placeholder: 'Ingrese descripcion Materia'
        },
        {
          name: 'valor',
          type: 'text',
          value: 'https://ionicframework.com'

        },
        {
          name: 'valor',
          type: 'date',

        },
        {
          name: 'valor',
          type: 'password',
          placeholder: 'password'
        },
        {
          name: 'valor',
          type: 'text',
          placeholder: 'Nickname (max 8 caracter)',
          attributes: {
            maxlength: 8,
          },
        },
        {
          name: 'valor',
          type: 'number',
          placeholder: 'Edad',
          min: 1,
          max: 100
        }
      ],
      buttons: ['OK', 'CANCEL']
    });
    await alert.present();
  }

}
