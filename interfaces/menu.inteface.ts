import { TopLevelCategory } from './toppage.inteface';


export interface Id{
    secondCategory:string
}

export interface PageItem{
    alias:string,
    title:string,
    _id:string,
    category:string
}


export interface MenuItem{
    _id:{
        secondCategory:string
    },
    pages:PageItem[],
    isOpened?:boolean
}

export interface firstLevelMenuItem {
    route:string;
    name:string;
    icon:JSX.Element
    id:TopLevelCategory
}