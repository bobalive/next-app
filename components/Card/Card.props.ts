import { DetailedHTMLProps, HTMLAttributes, ReactNode } from 'react';

export interface ParagraphProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>,HTMLDivElement >{
    color?:'white'| 'blue'
    children: ReactNode,
    isOpened?:boolean
    
}