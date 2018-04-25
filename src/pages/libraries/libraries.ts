import { Component , OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Quote } from '../../data/quotes.interface'
import { OnInit } from '@angular/core/src/metadata/lifecycle_hooks';
import  quotes from '../../data/quotes'
import  { QuotesPage } from '../quotes/quotes'

/**
 * Generated class for the LibrariesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-libraries',
  templateUrl: 'libraries.html',
})
export class LibrariesPage implements OnInit{

  quotesPage = QuotesPage;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LibrariesPage');
  }

  quoteCollection : { category :string , quote : Quote , icon:string}[];
 

}
ngOnInit(){
  this.quoteCollection = quotes;
}
