import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class InfoService {
  constructor() {}

  getInfo() {
    return {
      general_info: {
        name: 'أبو ياسين للمقاولات',
        about:
          'شركة أبو ياسين للمقاولات العامة شركة رائدة في مجال المقاولات العامة، تقدم خدمات متكاملة تشمل الهدم، البناء، التوسعات، المساح، السيجما، الديكورات، الأعمال الصحية، الكهرباء، الترميمات، تكسير الحمامات والمطابخ، تركيب السيراميك، العزل بجميع أنواعه، وأعمال الدهانات الداخلية والخارجية. نتميز بالدقة في العمل وتغطية جميع مناطق الكويت، مما جعلنا الخيار الأفضل لعملائنا.',
        work_hours: 'خدمة 24 ساعة على مدار الأسبوع',
        days_off: 'الجمعة',
        video: './../../assets/website-video.mp4',
      },
      social_links: {
        snapchat: 'https://www.snapchat.com/h.yassin3/',
        instagram: 'https://www.instagram.com/h.yassin3/',
        // twitter: 'https://www.twitter.com/',
        // pinterest: 'https://www.pinterest.com/',
        // behance: 'https://www.behance.com/',
        // linkedin: 'https://www.linkedin.com/',
        tiktok: 'https://www.tiktok.com/@h.yassin3',
        whatsapp: '96595530633',
      },
      contact_info: {
        email: 'info@emailaddress.com',
        phone_number: '96595530633',
        address: 'الكويت',
      },
    };
  }
}
