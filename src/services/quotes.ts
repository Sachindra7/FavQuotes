 import {Quote} from '../data/quotes.interface'

export class  QuotesService{

    private favouriteQuotes : Quote[] = [];

    
addQuoteToFavorites(quote : Quote){
  this.favouriteQuotes.push(quote);
  console.log(this.favouriteQuotes);
}

removeQuoteFromFavourites(){
    const position = this.favouriteQuotes.findIndex((quoteEl :Quote) => {
        return quoteEl.id == quote.id;
    })
   this.favouriteQuotes.slice(position,1)
}

getFavoriteQuote(){
   return this.favouriteQuotes.slice()
}


}