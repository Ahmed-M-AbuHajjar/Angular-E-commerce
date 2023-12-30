import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-homeslider',
  templateUrl: './homeslider.component.html',
  styleUrls: ['./homeslider.component.scss']
})
export class HomesliderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  isPreviousButtonActive: boolean = false;
  isNextButtonActive: boolean = false;
  currentSlideIndex: number = 0;



  slides: any[] = [
    {
      imgClass:"slider-1",
      textClass:"text-center",
    },
    {
      imgClass:"slider-2",
      textClass:"text-start",

    },
    {
      imgClass:"slider-3",
      textClass:"text-end",
    },
  ];

  activatePreviousButton(): void {
    this.isPreviousButtonActive = true;
    this.isNextButtonActive = false;

  }

  activateNextButton(): void {
    this.isPreviousButtonActive = false;
    this.isNextButtonActive = true;
  }
  bulletsClicked():void{
    this.isPreviousButtonActive = false;
    this.isNextButtonActive = false;
  }

}
