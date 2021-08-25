import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { ToastController } from '@ionic/angular';
import { IFilme } from '../models/IFilme.model';


@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

   titulo = 'Vídeos';

  listaFilmes: IFilme[] = [
    {
      nome: 'One Direction: This Is Us (2013)',
      lancamento: '13/09/2013',
      duracao: '1h 32m',
      classificacao: 85,
      cartaz: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/g4UUR4K3e1gfifF8dNorAUoqU5Y.jpg',
      generos: ['Documentário', 'Música'],
      pagina: '/one-direction-this-is-us'
    },
    {
      nome: 'One Direction: Where We Are (2014)',
      lancamento: '11/10/2014',
      duracao: '1h 46m',
      classificacao: 85,
      cartaz: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/wC3qjKzQTZ5yHEkTTyjsoRS0gir.jpg',
      generos: ['Documentário', 'Música'],
      pagina: '/one-direction-where-we-are'
    }
  ];

  constructor(public alertController: AlertController, public toastController: ToastController) {}

  async exibirAlertaFavorito() {
    const alert = await this.alertController.create({
      header: 'Alerta!',
      message: 'Deseja realmente favoritar o filme?',
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          handler: (blah) => {
            console.log('Confirm Cancel: blah');
          }
        }, {
          text: 'Sim, favoritar',
          handler: () => {
           this.apresentarToast();
          }
        }
      ]
    });

    await alert.present();
  }

  async apresentarToast() {
    const toast = await this.toastController.create({
      message: 'Filme adicionado aos favoritos',
      duration: 2000,
      color: 'success'
    });
    toast.present();
  }


}
