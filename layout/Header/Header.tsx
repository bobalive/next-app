import { HeaderProps } from "./Header.props";
import style from './Header.module.css';
import cn from 'classnames';
import Logo from '../logo.svg';
import { ButtonIcon } from "../../components/ButtonIcon/ButtonIcon";
import { motion, MotionConfig } from "framer-motion";
import { Sidebar } from "../Sidebar/Sidebar";
import { useEffect, useState } from "react";
import {  useRouter } from "next/router";



export const Header =({className,...props}:HeaderProps):JSX.Element=>{
    const [isOpened, setIsOpened] = useState<boolean>(false);
    const Router = useRouter();


    
    useEffect(()=>{
        setIsOpened(false)
    },[Router])
    const variants = {
        opened:{
            opacity:1,
            x:0,
            transition:{
                stiffness:20
            }
        },
        closed:{
            opacity:0,
            x:'100%'
        }
    }
    return(
        <header className={cn(className,style.header)} {...props}>
            <Logo/>
            <ButtonIcon appearance="white" icon="menu" onClick={()=> setIsOpened(true)}/>
            <motion.div className={style.mobileMenu} variants = {variants} initial={'close'} animate ={isOpened? 'opened':'closed'}>
                <Sidebar></Sidebar>
                <ButtonIcon appearance="white"  icon="close" className={style.closeIcon} onClick ={()=>setIsOpened(false)}></ButtonIcon>
            </motion.div>
        </header>
    );
}