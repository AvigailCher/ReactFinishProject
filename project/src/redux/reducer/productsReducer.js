import { BOYS, EXCESORIS, GIRLS, NEWCOLLECTION, SALE, SHOES } from '../actionType';

const imagesContext = require.context('../../images', true, /\.(png|jpe?g|svg)$/);
console.log("Available images:", imagesContext.keys());
console.log(imagesContext.keys()); // לראות אילו תמונות נטענו באמת
const loadImage = (imageName) => {
  try {
    const path = imageName.startsWith('./') ? imageName : `./${imageName}`;
    return imagesContext(path);
  } catch (error) {
    console.error('Image not found:', imageName);
    return null;
  }
};
const initialState = {
  arr: [],
  boys: [
    { id: 101, name: "חולצת בנים", price: 79.90, images: ['boys.png', 'boys.png', 'boys.png'].map(loadImage), send: "15₪" },
    {  id: 102,name: "מכנסיים קצרים", price: 69.90, images: ['boys.png', 'girls.png', 'boys.png'].map(loadImage), send: "15₪" }
  ],
  girls: [
    {id: 201, name: "KAYMIE DRESS", price: 99.90, images: ['girls/1/11.png', 'girls/1/11.png', 'girls/1/11.png', 'girls/1/14.png'].map(loadImage)},
    {id: 202, name: "MIA DRESS – FLORAL", price: 89.90, images: ['girls/2/21.png', 'girls/2/22.png', 'girls/2/23.png', 'girls/2/24.png'].map(loadImage)},
    {id: 203, name: "CAMLUZ DRESS – FLORAL", price: 99.90, images: ['girls/3/31.png', 'girls/3/32.png', 'girls/3/33.png'].map(loadImage)},
    {id: 204, name: "CAMILLE SHIRT – OFFWHITE", price: 99.90, images: ['girls/4/41.png', 'girls/4/42.png', 'girls/4/43.png', 'girls/4/44.png'].map(loadImage)},
    {id: 205, name: "CAMLIN DRESS – LILAC", price: 99.90, images: ['girls/5/51.png', 'girls/5/52.png'].map(loadImage)},
    {id: 206, name: "CAMLIN DRESS – CHAKI", price: 99.90, images: ['girls/6/61.png', 'girls/6/62.png'].map(loadImage)},
    {id: 207, name: "MALIA DRESS – PINK", price: 99.90, images: ['girls/7/71.png', 'girls/7/72.png'].map(loadImage)},
    {id: 208, name: "CAMLUZ SKIRT – RED", price: 99.90, images: ['girls/8/81.png', 'girls/8/82.png', 'girls/8/83.png', 'girls/8/84.png'].map(loadImage) },
    {id: 209, name: "CAMEL DRESS", price: 99.90, images: ['girls/9/91.png', 'girls/9/92.png', 'girls/9/93.png'].map(loadImage)},
    {id: 210, name: "MILLYZ DRESS – LILAC", price: 99.90, images: ['girls/10/101.png', 'girls/10/102.png', 'girls/10/103.png'].map(loadImage)},
    {id: 211, name: "CAMLUZ SKIRT – PINK", price: 99.90, images: ['girls/11/11.png', 'girls/11/112.png', 'girls/11/113.png'].map(loadImage)},
    {id: 213, name: "CAMELLIA SKIRT  - OFFWHITE", price: 99.90, images: ['girls/12/121.png', 'girls/12/122.png', 'girls/12/123.png', 'girls/12/124.png'].map(loadImage)},
    {id: 214, name: "CAMLARI DRESS – PINK", price: 99.90, images: ['girls/13/131.png', 'girls/13/132.png', 'girls/13/133.png'].map(loadImage) },
    {id: 215, name: "CAMLUZ SKIRT – OFFWHITE", price: 99.90, images: ['girls/14/141.png', 'girls/14/142.png', 'girls/14/143.png'].map(loadImage)},
    {id: 216, name: "ROSE DRESS – PINK", price: 99.90, images: ['girls/15/151.png', 'girls/15/152.png', 'girls/15/153.png'].map(loadImage)},
    {id: 212, name: "CAMELLIA DRESS - OFFWHITE", price: 99.90, images:['girls/16/161.png', 'girls/16/162.png', 'girls/16/163.png'].map(loadImage)},

  ],
  newCollection: [
    { name: "ז׳קט אופנתי", price: 149.90, images: ['boys.png', 'boys.png', 'boys.png'].map(loadImage), txt: "מתאים לעונות המעבר", send: "15₪" },
    { name: "טי שירט טרנדית", price: 59.90, images: ['boys.png', 'boys.png', 'boys.png'].map(loadImage), txt: "חלק מקולקציית 2025", send: "15₪" }
  ],
  shoes: [
    { name: "נעלי ספורט", price: 129.90, images: ['girls/2/11.png', 'girls/2/12.png', 'girls/2/13.png'].map(loadImage), txt: "לילדים אנרגטיים", send: "15₪" },
    { name: "סנדלים לקיץ", price: 89.90, images: ['boys.png', 'boys.png', 'boys.png'].map(loadImage), txt: "סנדלים פתוחים עם סגירה נוחה", send: "15₪" }
  ],
  sale: [
    { name: "חולצה בייסיק", price: 39.90, images: ['boys.png', 'boys.png', 'boys.png'].map(loadImage), txt: "מבצע לזמן מוגבל!", send: "15₪" },
    { name: "מכנס מבד קל", price: 49.90, images: ['boys.png', 'boys.png', 'boys.png'].map(loadImage), txt: "דגם במבצע חם", send: "15₪" }
  ],
  accessories: [
    { name: "כובע שמש", price: 29.90, images: ['boys.png', 'boys.png', 'boys.png'].map(loadImage), txt: "כובע אופנתי לקיץ", send: "15₪" },
    { name: "תיק גב קטן", price: 59.90,images: ['boys.png', 'boys.png', 'boys.png'].map(loadImage), txt: "תיק יום יום עם סגנון", send: "15₪" }
  ]
};

export const ProductReducer=(state=initialState,action)=>{
    switch(action.type){
        case BOYS:
            return { ...state,arr:state.boys};
        case GIRLS:
            return { ...state,arr:state.girls};   
        case SALE:
            return { ...state,arr:state.sale};
        case SHOES:
            return { ...state,arr:state.shoes};
        case NEWCOLLECTION:
            return { ...state,arr:state.newCollection};
        case EXCESORIS:
            return { ...state,arr:state.accessories};    
        
        default:
            return state;
        
        
        
        }
}



