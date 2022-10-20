import {  DividerProps } from "./Divider.props";
import style from './Divider.module.css';
import cn from 'classnames';


export const Divider =({ className,...props}:DividerProps):JSX.Element=>{
    return(
        <hr className={cn(className, style.hr)}/>
    );
};