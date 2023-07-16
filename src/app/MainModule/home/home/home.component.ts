import { Component, ElementRef, Renderer2, ViewChild} from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  // isPlaying: boolean[] = [false, false];
  constructor(private renderer: Renderer2) {}
  // @ViewChild('audioPlayer')
  // audioPlayer!: ElementRef;
  // isPlaying = false;
  // toggleAudio() {
  //   const audioElement: HTMLAudioElement = this.audioPlayer.nativeElement;
  //   if (audioElement.paused) {
  //     audioElement.play();
  //     this.isPlaying = true;
  //   } else {
  //     audioElement.pause();
  //     this.isPlaying = false;
  //   }
  // }

  isPlaying: boolean[] = [false, false, false, false, false, false, false, false, false, false];
  
  @ViewChild('audioPlayer0')
  audioPlayer0!: ElementRef;


  @ViewChild('audioPlayer1')
  audioPlayer1!: ElementRef;
  
  @ViewChild('audioPlayer2')
  audioPlayer2!: ElementRef;

  @ViewChild('audioPlayer3')
  audioPlayer3!: ElementRef;

  @ViewChild('audioPlayer4')
  audioPlayer4!: ElementRef;
 
  // @ViewChild('audioPlayer3')
  // audioPlayer3!: ElementRef;

  // @ViewChild('audioPlayer3')
  // audioPlayer3!: ElementRef;

  // Add more @ViewChild declarations for other audio players

  toggleAudio(index: number): void {
    const audioElements: HTMLAudioElement[] = [this.audioPlayer0.nativeElement,this.audioPlayer1.nativeElement, this.audioPlayer2.nativeElement, this.audioPlayer3.nativeElement,this.audioPlayer4.nativeElement];
    const currentAudioElement: HTMLAudioElement = audioElements[index];

    if (currentAudioElement.paused) {
      for (let i = 0; i < audioElements.length; i++) {
        if (i !== index) {
          audioElements[i].pause();
          this.isPlaying[i] = false;
        }
      }

      currentAudioElement.play();
      this.isPlaying[index] = true;
    } else {
      currentAudioElement.pause();
      this.isPlaying[index] = false;
    }
  }
}

