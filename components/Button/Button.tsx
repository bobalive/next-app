import style from './Button.module.css';
import { ButtonProps } from './Button.props';
import ArrowIcon from './arrow.svg';
import cn from 'classnames';

export const Button = ({appearance, children,arrow ='none',className, ...props}:ButtonProps):JSX.Element=>{
    return(
        <button
            className={cn(style.button,className,{
                [style.primary]: appearance ==='primary',
                [style.ghoast]: appearance ==='ghoast'
            })}
            {...props}
            >
                {children}    {arrow !== 'none'
                ?<span className={cn(style.arrow,{
                    [style.right]: arrow ==='right',
                    [style.down]: arrow ==='down',

                })}> 
                <ArrowIcon/>
             </span>
           
                :<></>}
            </button>
    );
};