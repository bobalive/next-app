import { SortEnum, SortProps } from "./Sort.props";
import SortIcon from './Sort.svg';
import cn from "classnames";
import style from './Sort.module.css'

export const Sort  = ({sort, setSort, className, ...props}:SortProps):JSX.Element=>{
    return(
        <div className={cn(style.sort, className)}>
            <span 
            onClick={()=> setSort(SortEnum.Price)}
            className ={cn({
                [style.active]: sort === SortEnum.Price
            })}
            >
                <SortIcon className ={style.sortIcon}/>По цене
            </span>
            <span 
            onClick={()=> setSort(SortEnum.Rating)}
            className ={cn({
                [style.active]: sort === SortEnum.Rating
            })}
            >
                <SortIcon className ={style.sortIcon}/>По рейтингу
            </span>
        </div>
    )
}