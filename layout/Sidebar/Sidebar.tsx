import { SidebarProps } from "./Sidebar.props";
import style from './Sidebar.module.css';
import cn from 'classnames'
import { Menu } from "../Menu/Menu";
import Logo from '../logo.svg'
import { Search } from "../../components";
import Link from "next/link";

export const Sidebar =({className, ...props}:SidebarProps):JSX.Element=>{
    return(
        <div className={cn(className, style.sidebar)} {...props} >
            <Link href={'./'}><Logo className = {style.logo}/></Link> 
            <Search/>
            <Menu />
        </div>
    );
};