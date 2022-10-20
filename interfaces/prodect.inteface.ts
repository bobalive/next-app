export interface ProductCharacteristic{
    value:string;
    name:string;
}

export interface ReviewModule{
    _id:number;
    name:string;
    title:string;
    description:string;
    rating:number;
    createdAt:Date;
}
export interface ProductModule{
    _id:string;
    categories:string[];
    tags:string[];
    title:string;
    link:string;
    price:number;
    credit:number;
    oldPrice:number;
    description:string;
    characteristics:ProductCharacteristic[];
    createdAt:Date;
    updatedAt:Date;
    _v:number[];
    image:string;
    initialRating:number;
    reviews:any[];
    reviewCount:number;
    reviewAvg?:number;
    advantages?:string;
    disadvantages?:string;
}