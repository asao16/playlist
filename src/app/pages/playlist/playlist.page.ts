import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  IonContent,
  IonHeader,
  IonItem,
  IonLabel,
  IonList,
  IonThumbnail,
  IonTitle,
  IonToolbar
} from '@ionic/angular/standalone';

@Component({
  selector: 'app-playlist',
  templateUrl: './playlist.page.html',
  styleUrls: ['./playlist.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonList, IonItem, IonThumbnail, IonLabel]
})
export class PlaylistPage {

  constructor() { }

 // export class PlaylistPage {
  songs = [
    { title: 'Song 1', artist: 'Artist 1', image: 'assets/song1.jpg' },
    { title: 'Song 2', artist: 'Artist 2', image: 'assets/song2.jpg' },
    { title: 'Song 3', artist: 'Artist 3', image: 'assets/song3.jpg' },
  ];
//}

}
