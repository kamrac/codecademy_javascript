class Media {
  constructor(title){
    this._title = title;
    this._isCheckedOut = false;
    this._ratings = [];
  }
    get title(){
      return this._title;
    }

    get isCheckedOut(){
      return this._isCheckedOut;
    }

    get ratings(){
      return this._ratings;
    }

    set isCheckedOut(value) {
      this._isCheckedOut =  value;

    }

    toggleCheckOutStatus(){
      this.isCheckedOut = !this.isCheckedOut;
    }

    getAverageRating(){
      let ratingsSum = this.ratings.reduce((accumulator, rating) => 
accumulator + rating);
      return ratingsSum/this.ratings.length;
    }

    addRating(value){
      this.ratings.push(value);
    }
}

class Book extends Media {
  constructor(author, title, pages) {
  super(title);
  this._author = author;
  this._pages = pages;
  }

  get author() {
    return this._author;
  }

  get page() {
    return this._pages;
  }

}

 // add  movie class, extension of media
  class Movie extends Media {
    constructor(director, title, runTime){
    super(title);
    this._director = director;
    this._runTime = runTime;
    }
  
    get director(){
      return this._director;
    }

  get runTime(){
      return this._runTime;
    }
  }
  // add additional class CD 
class CD extends Media {
    constructor(artist, title, songs){
    super(title);
    this._artist = artist;
    this._songs = [];
    }
  
    get artist(){
      return this._artist;
    }

    get songs(){
        return this._songs;
      }
    song(value){
        this.songs.push(value);
    }  

  }
    //Create new instance of book
    const historyOfEverything = new Book ("Bill Bryson", "A Short History 
of Nearly Everything", 544);

    historyOfEverything.toggleCheckOutStatus();

    console.log(historyOfEverything.isCheckedOut);
    // Add ratings to the books
    historyOfEverything.addRating(4);
    historyOfEverything.addRating(5);
    historyOfEverything.addRating(5);

    console.log(historyOfEverything.getAverageRating());
    //Create new instance of movie
    const speed = new Movie("Jan de Bont", "Speed", 116);

    speed.toggleCheckOutStatus();
    console.log(speed.isCheckedOut);
    // Add ratings to the movie
    speed.addRating(1);
    speed.addRating(1);
    speed.addRating(5);
    
    console.log(speed.getAverageRating());
    //Create new instance of CD
    const temsAlbum = new CD("Tems", "If Orange Was A Place", "Vibe Out" )
    temsAlbum.toggleCheckOutStatus();
    console.log(temsAlbum.isCheckedOut);
    temsAlbum.addRating(5);
    temsAlbum.addRating(4);
    temsAlbum.addRating(5);
    // Add songs to the album
    temsAlbum.song("Avoid Things");
    temsAlbum.song("Vibe Out");
    temsAlbum.song("Crazy Tings");
    temsAlbum.song("Replay");
    temsAlbum.song("Found");

    
    console.log(temsAlbum.getAverageRating());
    console.log(temsAlbum);
