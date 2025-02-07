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
          title: 'الإنشاءات المعدنية',
          description:
            'وهي الإنشاءات التي تشكل من ألواح وأعمدة الصلب، وتمتاز المنشآت المعدنية بقدرتها على تحمل الضغط العالي ولا تستهلك مواد البناء مثل المباني الخرسانية',
          image: './../../../../assets/images/main-carousel/pexels-pixabay-269077.jpg',
        },
        {
          title: 'الإنشاءات الخرسانية',
          description:
            'وتشمل أعمال الأساسات والجدران والأعمدة والأدراج والكمرات والبلاطات والطوب وتصميم الخلطات الخرسانية',
            image: './../../../../assets/images/main-carousel/pexels-pixabay-302769.jpg',
        },
        {
          title: 'أعمال البناء الخاصة والفردية',
          description:
            'تمتد الأعمال المدنية لتغطي تشييد الأبنية وبنيتها التحتية والمباني الخرسانية وأعمال التشطيبات',
            image: './../../../../assets/images/main-carousel/pexels-pixabay-417273.jpg',
          },
        {
          title: 'أعمال التوسعة والترميم',
          description:
            'حيث نعمل على ترميم المباني الخرسانية والشروخ ودعم أعمال الدهانات والوصلات الكهربائية العمل على رفع كفاءة المباني والمنشآت',
          image: './../../../../assets/images/main-carousel/pexels-pixabay-269077.jpg',
        },
        {
          title: 'أعمال التوسعة والترميم',
          description:
          'حيث نعمل على ترميم المباني الخرسانية والشروخ ودعم أعمال الدهانات والوصلات الكهربائية العمل على رفع كفاءة المباني والمنشآت',
          image: './../../../../assets/images/main-carousel/pexels-pixabay-269077.jpg',
        },
        {
          title: 'أعمال التوسعة والترميم',
          description:
          'حيث نعمل على ترميم المباني الخرسانية والشروخ ودعم أعمال الدهانات والوصلات الكهربائية العمل على رفع كفاءة المباني والمنشآت',
          image: './../../../../assets/images/main-carousel/pexels-pixabay-269077.jpg',
        },
      ]
    )
  }
}
