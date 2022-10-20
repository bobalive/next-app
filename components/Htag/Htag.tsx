import { HtagProps } from "./Htag.props";
import style from './Htag.module.css';

export const Htag =({tag, children, className}:HtagProps):JSX.Element=>{
    return(<>
    {tag === 'h1'&& <h1 className={style.h1 + ' '+className}>{children}</h1>}
    {tag === 'h2'&& <h2 className={style.h2 + ' '+className}>{children}</h2>}
    {tag === 'h3'&& <h3 className={style.h3 + ' '+className}>{children}</h3>}
    </>
    
    );
};