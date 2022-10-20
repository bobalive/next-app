import { DetailedHTMLProps, HTMLAttributes, } from 'react';
import { ReviewModule } from '../../interfaces/prodect.inteface';

export interface ReviewProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>,HTMLDivElement >{
    review:ReviewModule
}