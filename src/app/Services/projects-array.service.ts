import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProjectsArrayService {

  constructor() { }

  getProjects(){
    return [
        {
          id: 1,
          images: [
            './../../assets/images/projects/proj-1/462291504_3461647583970273_9084654474355003779_n.jpg',
            './../../assets/images/projects/proj-1/462459506_546682057772699_192830368349994038_n.jpg',
            './../../assets/images/projects/proj-1/462693074_394943460334815_7246458826401261064_n.jpg',
            './../../assets/images/projects/proj-1/462806923_1264166028088076_2841056928914683776_n.jpg'
          ],
          location: 'مدينة الكويت، الكويت',
          title: 'مختبر الصحة العامة في الكويت'
        },

        {
          id: 2,
          images: [
            './../../assets/images/projects/proj-2/461954469_1222444039095942_8625119978788603772_n.jpg',
            './../../assets/images/projects/proj-2/462061569_540688078372373_5978802085302891466_n.jpg',
            './../../assets/images/projects/proj-2/462159391_1213021399752249_9102974120401716357_n.jpg',
            './../../assets/images/projects/proj-2/462197590_3260998630698259_4731481668040533160_n.jpg',
          ],
          location: 'حولي، الكويت',
          title: 'مركز باي فرونت الصحي الطبي'
        },

        {
          id: 3,
          images: [
            './../../assets/images/projects/proj-3/69105435_216397989341907_9172025485626397333_n.jpg',
            './../../assets/images/projects/proj-3/69204159_389161441733323_1730653592305103073_n.jpg',
            './../../assets/images/projects/proj-3/69243832_2415802548631662_368742059701947824_n.jpg',
            './../../assets/images/projects/proj-3/69327759_758467844609575_8635653449754383661_n.jpg',
            './../../assets/images/projects/proj-3/69348582_3569643736395088_6894684416645920172_n.jpg',
            './../../assets/images/projects/proj-3/70201447_158408858608760_1206884463508780705_n.jpg',
            './../../assets/images/projects/proj-3/70936518_153832422477546_3668201893663098538_n.jpg',
          ],
          location: 'السالمية، الكويت',
          title: 'مركز صحة المرأة'
        },

        {
          id: 4,
          images: [
            './../../assets/images/projects/proj-4/461291926_18062041435657712_6182890102701871892_n.jpg',
            './../../assets/images/projects/proj-4/461470687_18062041462657712_7379477092241475982_n.jpg',
            './../../assets/images/projects/proj-4/461560630_18062041450657712_2237166786024361537_n.jpg',
            './../../assets/images/projects/proj-4/461651006_18062041459657712_6164852379168924341_n.jpg',
          ],
          location: 'الفروانية، الكويت',
          title: 'متحف الفنون والثقافة'
        },

        {
          id: 5,
          images: [
            './../../assets/images/projects/proj-5/460962483_18061637950657712_5023313554031371080_n.jpg',
            './../../assets/images/projects/proj-5/461089013_18061637986657712_7132819380848078399_n.jpg',
            './../../assets/images/projects/proj-5/461090591_18061637998657712_126358109610939008_n.jpg',
            './../../assets/images/projects/proj-5/461111450_18061637968657712_8982159649062630143_n.jpg',
            './../../assets/images/projects/proj-5/461161969_18061637959657712_149821974998859824_n.jpg',
            './../../assets/images/projects/proj-5/461163006_18061638007657712_2239452439528808479_n.jpg',
            './../../assets/images/projects/proj-5/461230218_18061637983657712_6860739822595582567_n.jpg',
          ],
          location: 'مدينة الكويت، الكويت',
          title: 'متحف الكويت الوطني'
        },

        {
          id: 6,
          images: [
            './../../assets/images/projects/proj-6/241182764_4546306802100263_6443395061552885556_n.jpg',
            './../../assets/images/projects/proj-6/241192542_228918472511665_3001324604885382705_n.jpg',
            './../../assets/images/projects/proj-6/241313744_983135905807717_8384554433796899497_n.jpg',
            './../../assets/images/projects/proj-6/241314817_390245672487288_8170417986987322130_n.jpg',
            './../../assets/images/projects/proj-6/241379037_835051877199326_6562592000604933190_n.jpg',
            './../../assets/images/projects/proj-6/241461369_127766246256620_2565837057304879690_n.jpg'
          ],
          location: 'الجهراء، الكويت',
          title: 'مركز الجهراء الثقافي'
        },

        {
          id: 7,
          images: [
            './../../assets/images/projects/proj-7/208580624_1411684875854099_1226503528107703863_n.jpg',
            './../../assets/images/projects/proj-7/208770883_2568744726753336_7299734001153208267_n.jpg',
            './../../assets/images/projects/proj-7/209094922_179562904135550_6575735520522792521_n.jpg',
            './../../assets/images/projects/proj-7/209158513_414708659663595_4061685198597704689_n.jpg',
            './../../assets/images/projects/proj-7/209498325_774755053210053_7006386704491757788_n.jpg',
            './../../assets/images/projects/proj-7/210180461_1143496882794252_3299057748978281963_n.jpg',
          ],
          location: 'الأحمدي، الكويت',
          title: 'مستشفى الأحمدي التخصصي'
        },

        {
          id: 8,
          images: [
            './../../assets/images/projects/proj-8/161340252_278818046962818_6672034298539270361_n.jpg',
            './../../assets/images/projects/proj-8/161392209_1149355428847759_1938304538102980953_n.jpg',
            './../../assets/images/projects/proj-8/161688693_1578356469029816_787291117076012309_n.jpg',
            './../../assets/images/projects/proj-8/161824591_2766471216950482_8553064265653437575_n.jpg',
            './../../assets/images/projects/proj-8/162189777_1149047058843031_812030410603614113_n.jpg',
          ],
          location: 'الفنطاس، الكويت',
          title: 'مركز الفنطاس الطبي'
        }
      ]
  }
}
