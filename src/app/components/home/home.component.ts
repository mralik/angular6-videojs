import {Component, OnInit, AfterViewInit, OnDestroy} from '@angular/core';

declare var videojs: any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, AfterViewInit, OnDestroy {
  private videoJSplayer: any;

  constructor() {
  }

  ngOnInit() {
  }

  ngAfterViewInit(): void {
    this.initVideoJs();
  }

  initVideoJs() {
    this.videoJSplayer = videojs('video_player');
    // const transcript = this.videoJSplayer.transcript();
    // const transcriptCon = document.querySelector('#transcriptContainer');
    // transcriptCon.appendChild(transcript.el());
  }

  ngOnDestroy() {
    this.videoJSplayer.dispose();
  }
}





