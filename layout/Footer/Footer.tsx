import { FooterProps } from "./Foooter.props";
import style from './Footer.module.css';
import cn from 'classnames'
import {format} from 'date-fns'


export const Footer =({className, ...props}:FooterProps):JSX.Element=>{
    return(
        <footer className={cn(className, style.footer)}{...props}>
          <a href="#" className={style.left}>OwlTop © 2020 -{format(new Date , 'yyyy')}  Все права защищены</a>
            <a href="#" className={style.leftLink}>Пользовательское соглашение</a>
            <a href="#" className={style.leftLink}>Политика конфиденциальности</a>

        </footer>
    )
}