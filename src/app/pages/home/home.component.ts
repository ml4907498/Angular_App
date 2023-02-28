import { Component, OnInit } from '@angular/core';
import { LastFMDataService } from 'src/app/services/lastFM-data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{
  artistData = [];
  albumData = [];

  constructor(
    private lastFMDataService: LastFMDataService
  ){}

  ngOnInit(): void {
    this.lastFMDataService.currentArtistData
      .subscribe(data => {
        console.log(data)
        this.artistData = data;
      })

    this.lastFMDataService.currentAlbumData
      .subscribe(data => {
        console.log(data)
        this.albumData = data;
    })

    // this.lastFMDataService.currentMessage.subscribe(message => console.log(message))
  }
  

}
