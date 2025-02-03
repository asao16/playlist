import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  IonButton,
  IonContent,
  IonHeader, IonIcon,
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
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonList, IonItem, IonThumbnail, IonLabel, IonButton, IonIcon]
})
export class PlaylistPage {

  constructor() { }

  songs = [
    { id: 1, title: 'Canción 1', artist: 'Artista 1', cover: 'https://via.placeholder.com/150' },
    { id: 2, title: 'Canción 2', artist: 'Artista 2', cover: 'https://via.placeholder.com/150' },
    { id: 3, title: 'Canción 3', artist: 'Artista 3', cover: 'https://via.placeholder.com/150' },
  ];

  currentSong: any = null;
  isPlaying = false;

  playSong(song: any) {
    this.currentSong = song;
    this.isPlaying = true;
  }

  togglePlay() {
    this.isPlaying = !this.isPlaying;
  }

  nextSong() {
    const currentIndex = this.songs.findIndex(song => song.id === this.currentSong.id);
    const nextIndex = (currentIndex + 1) % this.songs.length;
    this.playSong(this.songs[nextIndex]);
  }
}
