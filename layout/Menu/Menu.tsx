import style from './Menu.module.css';
import cn from 'classnames';
import { AppContext } from '../../context/app.context';
import { useContext, useEffect, useState } from 'react';
import { firstLevelMenuItem, PageItem } from '../../interfaces/menu.inteface';

import Link from '../../node_modules/next/link';
import { useRouter } from '../../node_modules/next/router';
import { firstLevelMenu } from '../../helpers/helper';
import {motion} from 'framer-motion';


export const Menu = (): JSX.Element =>{
    const {menu, firstCategory,setMenu} = useContext(AppContext);
    useEffect(()=>{
      setMenu&&setMenu(menu);
    });
    

    const router = useRouter();

    const variants ={
      visible:{
        marginBottom:20,
        transition:{
          when:'beforeChildren',
          staggerChildren:0.1,
        }
      },
      hidden:{
        marginBottom:0
      }
    };
    const variantsChildren = {
      visible:{
        opacity:1,
        height:'auto'
      },
      hidden:{
        opacity:0,
        height:0
      }
    };


    const openSecondLevel =(secondCategory:string)=>{
      setMenu && setMenu(menu.map(m=>{
        if(m._id.secondCategory === secondCategory){
          m.isOpened = !m.isOpened;
        }
        return(m);
      }));
    };

    const buildFirstLevel =()=>{
      return (
        <>
            {firstLevelMenu.map((m) =>(
              <div key = {m.route}>
                <Link href ={`/${m.route}`}>
                  <a >
                    <div className={cn(style.firstLevel ,{
                      [style.frisLevelActive]:m.id == firstCategory
                    })}>
                      {m.icon}
                      <span>{m.name}</span>
                    </div>
                  </a>
                </Link>
                  {m.id == firstCategory && buildSecondLevel(m)}
              </div>
            )  )}
        </>
      );
    };

    const buildSecondLevel =(menuItem:firstLevelMenuItem)=>{

        return (
          <div className={style.secondBlock}>
              {menu.map(m=>{
                  if(m.pages.map(p=> p.alias).includes(router.asPath.split('/')[2])){
                    m.isOpened= true;
                  }


                return (
                <div key = {m._id.secondCategory}>
                  <div className={style.secondLevel} onClick = {()=> openSecondLevel(m._id.secondCategory)}>
                    {m._id.secondCategory}
                  </div>
                  <motion.div 
                  layout 
                  variants={variants} 
                  initial={m.isOpened? 'visible': 'hidden'}
                  animate={m.isOpened? 'visible': 'hidden'}
                  className={cn(style.secondLevelBlock)}
                  >
                     {buildThirdLevel(m.pages, menuItem.route)}
                  </motion.div>
                </div>
              )})}
          </div>
        );
    };
    const buildThirdLevel =(page: PageItem[], route: string)=>{
      return(
        page.map(p=>(
          <motion.div key ={p._id} variants= {variantsChildren}>
          <Link href={`/${route}/${p.alias}`} >
          <a className = {cn(style.thirdLevel,{
            [style.thirdLevelActive]: `/${route}/${p.alias}` === router.asPath
          })}>
            {p.category}
          </a>
          </Link>
          </motion.div>
        ))
      );
    };


    return (
        <div className={style.menu}>
          <ul>
            {buildFirstLevel()}
          </ul>
        </div>
    );
};