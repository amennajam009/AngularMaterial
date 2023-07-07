import { Component, ElementRef, Renderer2, ViewChild} from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  constructor(private renderer: Renderer2) {}
  @ViewChild('audioPlayer')
  audioPlayer!: ElementRef;
  isPlaying = false;
  toggleAudio() {
    const audioElement: HTMLAudioElement = this.audioPlayer.nativeElement;
    if (audioElement.paused) {
      audioElement.play();
      this.isPlaying = true;
    } else {
      audioElement.pause();
      this.isPlaying = false;
    }
  }
}
