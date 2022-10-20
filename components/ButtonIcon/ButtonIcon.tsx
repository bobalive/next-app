import style from './ButtonIcon.module.css';
import { ButtonIconProps,icons } from './ButtonIcon.props';
import cn from 'classnames';


export const ButtonIcon = ({appearance,icon,className, ...props}:ButtonIconProps):JSX.Element=>{
    const IconComp = icons[icon];
    return(
        <button
            className={cn(style.button,className,{
                [style.primary]: appearance ==='primary',
                [style.ghoast]: appearance ==='white'
            })}
            {...props}
            >
                <IconComp/>
               
            </button>
    );
};