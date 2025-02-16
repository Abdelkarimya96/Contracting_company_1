import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServicesArrayService {

  constructor() { }
  getServices(){
    return (
      [
        {
          title: ' ترميمات وتوسيعات',
          description: "جميع أعمال الترميمات والتوسيعات",
          image: './../../assets/images/services/ترميمات.jpg',
        },
        {
          title: "تركيب سيراميك",
          description: 'فريق متكامل متخصص في تركيب السيراميك بأحدث الطرق',
          image: './../../assets/images/services/سيراميك.jpg',
        },
        {
          title: 'أعمال كهرباء متكاملة',
          description: 'فريق متكامل وبأيدي ماهرة وخبرة ممتازة في الأعمال والتوصيلات الكهربية',
          image: './../../assets/images/services/كهرباء.jpg',
        },
        {
          title: 'أعمال العزل',
          description: 'عازل أسود - فوم - عازل جيتاروف مع طربال حرير سعودي - عازل سكريت',
          image: './../../assets/images/services/عزل.jpg',
        },
        {
          title: 'أعمال الصحي',
          description: 'جميع أنواع الأصباغ الداخلية والخارجية وتسليك مجاري المطبخ',
          image: './../../assets/images/services/أعمال الصحي.jpg',
        },
        {
          title: 'تشطيبات وترميمات',
          description: "تشطيبات وترميمات داخلية وخارجية",
          image: './../../assets/images/services/تشطيبات.jpg',
        },
        {
          title: 'هدم و بناء',
          description: "جميع أعمال الهدم والبناء",
          image: './../../assets/images/services/هدم-بناء.jpg',
        },
      ]
    )
  }
}
