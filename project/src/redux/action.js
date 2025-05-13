
import { BOYS, GIRLS,SALE,NEWCOLLECTION,SHOES,EXCESORIS ,ADD_TO_CART,REMOVE_FROM_CART,UPDATE_ITEM_QUANTITY} from "./actionType";


export const boys =()=>({
    type:BOYS,
});
export const girls =()=>({
    type:GIRLS,
});
export const sale =()=>({
    type:SALE,
});
export const newcollection =()=>({
    type:NEWCOLLECTION,
});
export const shose =()=>({
    type:SHOES,
});
export const excesoris =()=>({
    type:EXCESORIS,
});

export const update_item_quantity =(item)=>({
    type:UPDATE_ITEM_QUANTITY,
    payload:item,
});
export const addToCart = (product) => ({

    type: ADD_TO_CART,
    
    payload: product,
    
    });

export const removeFromCart = (productId) => {
        return {
          type: REMOVE_FROM_CART,
          payload: productId,
        };
      };