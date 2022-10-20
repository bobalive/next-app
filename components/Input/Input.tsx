import { InputProps } from "./Input.props";
import style from './Input.module.css';
import cn from 'classnames';
import { loadGetInitialProps } from "next/dist/shared/lib/utils";
import { forwardRef ,ForwardedRef} from "react";


export const Input =forwardRef(({className,error,   ...props}:InputProps, ref:ForwardedRef<HTMLInputElement>):JSX.Element=>{
    return(
        <div className={style.inputWrapper}>
            <input className={cn(className, style.input,{
                [style.error]:error
            })} ref = {ref} {...props} />
            {error && <span className={style.errorMessage}>{error.message}</span>}
        </div>
    );
});