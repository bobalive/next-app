import { DetailedHTMLProps, HTMLAttributes, } from 'react';
import { ReviewModule } from '../../interfaces/prodect.inteface';

export interface ReviewFormProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>,HTMLDivElement >{
    productId:string
}