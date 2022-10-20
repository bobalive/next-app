import style from './Tag.module.css';
import cn from 'classnames'
import { TagProps } from "./Tag.props";


export const Tag=({size ='medium',color ='ghost',children, href,className, ...props}:TagProps):JSX.Element=>{
    return(
        <div className={cn(style.tag,className,{
            [style.medium]: size ==='medium',
            [style.small]: size === 'small',
            [style.ghost]: color === 'ghost',
            [style.green]: color === 'green',
            [style.grey]: color === 'grey',
            [style.primary]: color === 'primary',
            [style.red]: color === 'red',
        })} 
        {...props}
        >{
            href 
            ? <a href={href}>{children}</a>
            : <>{children}</>
        }
            
            
            </div>
    )
}