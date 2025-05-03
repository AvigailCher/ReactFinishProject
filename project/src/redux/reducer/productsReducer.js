import { BOYS, EXCESORIS, GIRLS, NEWCOLLECTION, SALE, SHOES } from '../actionType';
import boysImage from 'C:/Users/user/Documents/לימודים-אביגיל/ריאקט/FinishProject/ReactFinishProject/project/src/images/boys.png';
// import girlsImage from '../images/girls/item1.jpg';
// import newCollectionImage from '../images/new/item1.jpg';
// import shoesImage from '../images/shoes/item1.jpg';
// import saleImage from '../images/sale/item1.jpg';

const initialState = {
  arr: [],
  boys: [
    { id: 101, name: "חולצת בנים", price: 79.90, image: boysImage, txt: "חולצה קלאסית ליום יום", send: "15₪" },
    {  id: 102,name: "מכנסיים קצרים", price: 69.90, image: boysImage, txt: "מכנסיים נוחים לימי הקיץ", send: "15₪" }
  ],
  girls: [
    { name: "שמלה פרחונית", price: 99.90, image: boysImage, txt: "שמלה לאירועים וקיץ", send: "15₪" },
    { name: "חולצת תחרה", price: 89.90, image: boysImage, txt: "חולצה עם עיטורי תחרה", send: "15₪" }
  ],
  newCollection: [
    { name: "ז׳קט אופנתי", price: 149.90, image: boysImage, txt: "מתאים לעונות המעבר", send: "15₪" },
    { name: "טי שירט טרנדית", price: 59.90, image: boysImage, txt: "חלק מקולקציית 2025", send: "15₪" }
  ],
  shoes: [
    { name: "נעלי ספורט", price: 129.90, image: boysImage, txt: "לילדים אנרגטיים", send: "15₪" },
    { name: "סנדלים לקיץ", price: 89.90, image: boysImage, txt: "סנדלים פתוחים עם סגירה נוחה", send: "15₪" }
  ],
  sale: [
    { name: "חולצה בייסיק", price: 39.90, image: boysImage, txt: "מבצע לזמן מוגבל!", send: "15₪" },
    { name: "מכנס מבד קל", price: 49.90, image: boysImage, txt: "דגם במבצע חם", send: "15₪" }
  ],
  accessories: [
    { name: "כובע שמש", price: 29.90, image: boysImage, txt: "כובע אופנתי לקיץ", send: "15₪" },
    { name: "תיק גב קטן", price: 59.90, image: boysImage, txt: "תיק יום יום עם סגנון", send: "15₪" }
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




