import React, { useEffect } from 'react';
import { useScrollY } from '../../hooks/useScrollY';
import style from "./Up.module.css";
import UpIcon from './Up.svg';
import {motion , useAnimation} from 'framer-motion'
import { ButtonIcon } from '../ButtonIcon/ButtonIcon';

export const Up = () => {
    const control = useAnimation();
    const y = useScrollY();

    useEffect(()=>{
        control.start({opacity:y/document.body.scrollHeight});
    },[y, control]);

    const scrollToTop =()=>{
        window.scrollTo({
            top:0,
            behavior:'smooth'
        });
    };
  return (
    <motion.div
     animate = {control}
     initial={{opacity:0}}
     className={style.up} onClick ={scrollToTop}>
       <ButtonIcon appearance='primary' icon='up' onClick ={scrollToTop}></ButtonIcon>
    </motion.div>
  );
};
