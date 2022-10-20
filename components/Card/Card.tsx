import { ParagraphProps } from "./Card.props";
import style from './Card.module.css';
import cn from 'classnames'
import { ForwardedRef, forwardRef } from "react";



export const Card =forwardRef(({color = 'white',children, className,...props}:ParagraphProps, ref:ForwardedRef<HTMLDivElement>)=>{
    return(
      <div className={cn(style.card , className ,{
        [style.blue]: color== 'blue',
        [style.white]: color == 'white',
      })}
       ref ={ref} 

       >{children}</div>
    )
})