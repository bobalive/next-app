import { TextAreaProps } from "./TextArea.props";
import style from './TextArea.module.css';
import cn from 'classnames';
import { ForwardedRef, forwardRef } from "react";


export const TextArea =forwardRef(({className,error,...props}:TextAreaProps, ref : ForwardedRef<HTMLTextAreaElement>):JSX.Element=>{
    return(
        <div className={cn(className,style.textAreaWrapper)}>    
        <textarea

        className={cn(className, style.textArea,{
            [style.error]:error
        })}
         {...props}
         ref ={ref}/>   
         
         {error && <span className={style.errorMessage}>
         {error.message}
         </span>}
         </div>
     
    );
});