import { Component , OnInit} from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {Quote} from "../../data/quotes.interface"
import { AlertController } from 'ionic-angular/components/alert/alert-controller';
import { QuotesService} from '../../services/quotes';


/**
 * Generated class for the QuotesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-quotes',
  templateUrl: 'quotes.html',
})
export class QuotesPage implements OnInit{

  quoteGroup : {category : string, quote:Quote , icon:string}

  constructor(public navCtrl: NavController, public navParams: NavParams,
  private alertCtrl : AlertController , quotesService:QuotesService ) {
    
  }
  ngOnInit({
    this.quoteGroup = this.NavParams.data;

 // ionViewDidLoad() {
   // 
 // }
  onAddToFavourite(selectedQuote : Quote){
    const alert = this.alertCtrl.create({
      title: 'Add Quote':
      subTitle: 'Are you sure?',
      message:'Are you sure you want to add the quote?'
      button:[
        {
          text:'Okay',
          handler: () => {
            this.quotesService.addQuotesToFavourite(selectedQuote);
          }
        },
        {
          text:'No, I changed my mind!',
          role:'cancel',
          handler :()=> {
            console.log('Cancelled!');
        }

      ]
    });
    alert.present();

  }
}
