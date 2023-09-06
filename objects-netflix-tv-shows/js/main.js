//Create a Netflix TV Show class with a constructor that makes Netflix TV Shows with 4 properties and 3 methods

class NetflixCreator{
    constructor(title,type,series,episodes){
        this.NetflixShowName = title
        this.NetflixShowType = type 
        this.NetflixShowSeries = series
        this.NetflixShowEpisodes = episodes
    }
    play(){
        console.log('played some old series of netflex')
    }

    PlayTime(){
        console.log('played tv show at 9pm')
    }

    CloseTime(){
        console.log('closed tv show at 10pm')
    } 
    
}

let Mavrik = new NetflixCreator('Mavrik', 'shortMovie' , true , 7)

