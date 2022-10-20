import SevisesIcon from './icons/servises.svg';
import CoursesIcon from './icons/courses.svg';
import ProductIcon from './icons/product.svg';
import BookIcon from './icons/books.svg';
import { TopLevelCategory } from '../interfaces/toppage.inteface';
import {firstLevelMenuItem} from '../interfaces/menu.inteface'



export const firstLevelMenu: firstLevelMenuItem[] = [
    {route:'courses', name:'Курсы', icon:<CoursesIcon/> ,id : TopLevelCategory.Courses},
    {route:'servises', name:'Сервисы', icon:<SevisesIcon/> ,id : TopLevelCategory.Services},
    {route:'products', name:'Продукты', icon:<BookIcon/> ,id : TopLevelCategory.Books},
    {route:'books', name:'Книги', icon:<ProductIcon/> ,id : TopLevelCategory.Products},
  ];


export const priceRu = (price:number): string => price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ').concat(' ₽');

export const declanetionOfNum = (number:number, titles:[string, string, string])=>{
  const cases =[2,0,1,1,1,2];
  return titles[(number%100>4 && number%100 <20)?2:cases[(number%10 <5 )? number % 10:5]];
};
