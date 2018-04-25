import { Component } from '@angular/core'
import { FavouritesPage} from '../favourites/favourites'
import { LibrariesPage } from '../libraries/libraries'


@Component({
  selector : 'page-tabs',
  templateUrl : `
  <ion-tabs selectedIndex = 1>
     <ion-tab [root] = "favouritesPage" tabTitle = "Favourites" tabIcon = "star"></ion-tab>
     <ion-tab [root] = "librariesPage" tabTitle = "Libraries" tabIcon = "book"></ion-tab>
  </ion-tabs>`

})

export class Tabs{

    favouritesPage = FavouritesPage;
    libraries = LibrariesPage;

}