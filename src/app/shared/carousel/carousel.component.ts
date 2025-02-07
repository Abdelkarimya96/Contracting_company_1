import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faAngleRight, faAngleLeft } from '@fortawesome/free-solid-svg-icons';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-carousel',
  standalone: true,
  imports: [
    CommonModule,
    FontAwesomeModule,
    RouterModule
  ],
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css'],
})
export class CarouselComponent implements OnInit {
  faAngleRight = faAngleRight;
  faAngleLeft = faAngleLeft;

  @Input() slides = [
    {
      id: '1',
      src: '../../../assets/images/main-carousel/pexels-pixabay-269077.jpg',
      title: 'في شركة مجال البناء للمقاولات العامة، نقدم مجموعة متكاملة من الخدمات المتخصصة في قطاع البناء',
      alt: 'Modern building structure',
    },
    {
      id: '2',
      src: '../../../assets/images/main-carousel/pexels-pixabay-302769.jpg',
      title: 'في شركة مجال البناء للمقاولات العامة، نقدم مجموعة متكاملة من الخدمات المتخصصة في قطاع البناء',
      alt: 'Skyscrapers with glass windows',
    },
    // {
    //   id: '3',
    //   src: '../../../assets/images/main-carousel/pexels-pixabay-417273.jpg',
    //   title: 'Classic Design',
    //   alt: 'Old architectural design building',
    //   text: 'أكثر من خمسين عميل لدينا',
    // },
  ];

  constructor() {}

  ngOnInit(): void {}
}


























// @Input() dots: boolean = true;
// @Input() buttons: boolean = true;
// @Input() isAutoSlide: boolean = true;
// @Input() slideInterval: number = 1000;


// selectedIndex: number = 0;
// private autoSlideInterval!: ReturnType<typeof setInterval>;
// private userInteracted = false;

// ngOnInit(): void {
//   this.startAutoSlide();
// }

// ngOnDestroy(): void {
//   this.clearAutoSlide();
// }

// selectImage(index: number){
//   this.selectedIndex = index;
//   console.log(this.selectedIndex);
//   this.resetAutoSlide();
// }

// onPrevClick(){
//   if (this.selectedIndex ===0){
//     this.selectedIndex = this.slides.length -1;
//   }else{
//     this.selectedIndex--;
//   }
//   this.resetAutoSlide();
// }
// onNextClick(){
//   if (this.selectedIndex === this.slides.length-1) {
//     this.selectedIndex = 0;
//   }else{
//     this.selectedIndex++;
//   }
//   this.resetAutoSlide();
// }
// private startAutoSlide(): void {
//   if (this.isAutoSlide) {
//     this.autoSlideInterval = setInterval(() => {
//       if (!this.userInteracted) {
//         this.onNextClick();
//       }
//     }, this.slideInterval);
//   }
// }

// private clearAutoSlide(): void {
//   if (this.autoSlideInterval) {
//     clearInterval(this.autoSlideInterval);
//   }
// }

// private resetAutoSlide(): void {
//   this.userInteracted = true;
//   this.clearAutoSlide();

//   setTimeout(() => {
//     this.userInteracted = false;
//     this.startAutoSlide();
//   }, 5000);
// }
