import {Component, OnInit} from '@angular/core';
import {CommonModule, NgOptimizedImage} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {
  IonButton,
  IonContent,
  IonHeader,
  IonIcon,
  IonItem,
  IonLabel,
  IonList,
  IonRange,
  IonThumbnail,
  IonTitle,
  IonToolbar,
} from '@ionic/angular/standalone';

@Component({
  selector: 'app-playlist',
  templateUrl: './playlist.page.html',
  styleUrls: ['./playlist.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonList, IonItem, IonThumbnail, IonLabel, IonButton, IonIcon, IonRange, NgOptimizedImage]
})
export class PlaylistPage implements OnInit{

  constructor() { }

  songs = [
    { id: 1, title: 'Canción 1', artist: 'Artista 1', album:'Album-1', cover: '../../../assets/mini/Vector.png' },
    { id: 2, title: 'Canción 2', artist: 'Artista 2', album:'Album-1', cover: '../../../assets/mini/Vector-1.png' },
    { id: 3, title: 'Canción 3', artist: 'Artista 3', album:'Album-2', cover: '../../../assets/mini/Vector-2.png' },
    { id: 4, title: 'Canción 4', artist: 'Artista 4', album:'Album-3', cover: '../../../assets/mini/Vector-3.png' },
    { id: 5, title: 'Canción 5', artist: 'Artista 5', album:'Album-4', cover: '../../../assets/mini/Vector-4.png' },
    { id: 6, title: 'Canción 6', artist: 'Artista 6', album:'Album-5', cover: '../../../assets/mini/Vector-5.png' },
    { id: 7, title: 'Canción 7', artist: 'Artista 7', album:'Album-6', cover: '../../../assets/mini/Vector-6.png' },
    { id: 8, title: 'Canción 8', artist: 'Artista 8', album:'Album-7', cover: '../../../assets/mini/Vector-7.png' },
    { id: 9, title: 'Canción 9', artist: 'Artista 9', album:'Album-8', cover: '../../../assets/mini/Vector-8.png' },
    { id: 10, title: 'Canción 10', artist: 'Artista 10', album:'Album-9', cover: '../../../assets/mini/Vector-9.png' },

  ];

  currentSong: any = null;
  isPlaying = false;
  isRepeat: boolean = false;
  progress: number = 0; // Tiempo transcurrido en segundos
  duration: number = 180; // Duración total de la canción en segundos (ejemplo: 3 minutos)

  ngOnInit() {
    this.preloadImages(); // Precarga las imágenes al inicializar el componente
  }

  // Precarga las imágenes
  preloadImages() {
    this.songs.forEach((song) => {
      const img = new Image();
      img.src = song.cover;
    });
  }

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


  // Cambia el estado de repetición
  toggleRepeat() {
    this.isRepeat = !this.isRepeat;
  }

  // Formatea el tiempo en segundos a un formato MM:SS
  formatTime(seconds: number): string {
    const minutes = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${minutes}:${secs < 10 ? '0' : ''}${secs}`;
  }

  // Actualiza la posición de reproducción
  seekTo(event: any) {
    this.progress = event.detail.value;
    // Aquí iría la lógica para mover la reproducción a la nueva posición
  }


  // Retrocede a la canción anterior
  previousSong() {
    // Lógica para retroceder a la canción anterior
  }

  volumen() {

  }
}
