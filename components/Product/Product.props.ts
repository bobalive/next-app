import { DetailedHTMLProps, HTMLAttributes, ReactNode } from 'react';
import { ProductModule } from '../../interfaces/prodect.inteface';

export interface ProductProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>,HTMLDivElement >{
    product:ProductModule
}