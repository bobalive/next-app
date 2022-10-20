import { ParagraphProps } from "./P.props";
import style from './P.module.css';
import cn from 'classnames'


export const P =({size ='medium',children, className,...props}:ParagraphProps):JSX.Element=>{
    return(
        <p className={cn(style.p,className,{
            [style.medium]: size ==='medium',
            [style.big] : size ==='big',
            [style.small]: size === 'small'
        })} {...props}>{children}</p>
    )
}