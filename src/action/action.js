export const ADD_FEATURE= 'ADD_FEATURE';
export const REMOVE_FEATURE='REMOVE_FEATURE';

export const addFeature =each=>  {
   return {

   type: ADD_FEATURE,
    payload: each,
    price: each.price
   };
};

export const removeFeature = each=>{
    return{
        type: REMOVE_FEATURE,
        payload: each


    };
};