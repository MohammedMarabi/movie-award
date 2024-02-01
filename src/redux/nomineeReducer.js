import { SELECT_NOMINEE } from './nomineesAction';
const initialState = {
    selectedNominees: {},
  };

const nomineesReducer = (state = initialState , action) =>{
    switch (action.type){
        case SELECT_NOMINEE:
      return {
        ...state,
        selectedNominees: {
          ...state.selectedNominees,
          [action.payload.categoryId]: action.payload.nomineeId,
        },
      };
      default: return state;
    }
}

export default nomineesReducer;