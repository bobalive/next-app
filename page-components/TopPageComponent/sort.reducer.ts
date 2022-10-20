import { ProductModule } from './../../interfaces/prodect.inteface';
import { SortEnum } from './../../components/Sort/Sort.props';
export type SortActions ={
    type:SortEnum.Price
}|{
    type:SortEnum.Rating
}|{
    type:'setProducts',
    products:ProductModule[]
}

export interface SortReducerState{
    sort:SortEnum;
    products: ProductModule[]
}

export const sortReducer = (state:SortReducerState, action:SortActions):SortReducerState=>{
    switch (action.type){
        case SortEnum.Rating:            
            return{
                sort:SortEnum.Rating,
                products: state.products.sort((a,b) => a.initialRating > b.initialRating?-1:1)
            };
        case SortEnum.Price:
            return{
                sort:SortEnum.Price,
                products: state.products.sort((a,b) => a.price > b.price?1:-1)
            };
        case 'setProducts':
            return{
                ...state,
                products:action.products
            };
        default :
            throw new Error('неверный тип сортировки');
    }
};