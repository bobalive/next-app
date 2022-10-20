import {TopPageProps}  from './TopPageComponent.props';
import React, { useEffect, useReducer } from 'react';
import { Card, Htag, P, Product, Sort, Tag } from '../../components/index';
import style from './TopPageComponent.module.css'
import { HhData } from '../../components/hhData/HhData';
import { TopLevelCategory } from '../../interfaces/toppage.inteface';
import { Advantages } from '../../components/Advantages/Advantages';
import { SortEnum } from '../../components/Sort/Sort.props';
import { sortReducer } from './sort.reducer';
import { useScrollY } from '../../hooks/useScrollY';



export const TopPageComponent =({firstCategory,page,products}: TopPageProps):JSX.Element=>{

    const [{products:sortedProducts,sort}, dispatchSort] = useReducer(sortReducer,{products, sort:SortEnum.Price});
    useEffect(()=>{
        dispatchSort({type:'setProducts', products:products});
     dispatchSort({type:SortEnum.Price});   
    },[products]);
    
    const setSort =(sort:SortEnum)=>{
        dispatchSort({type:sort});
    };
    
    
    return(
        <div className={style.wrapper}>
        <div className= {style.title}>
            <Htag tag = 'h1'>{page.title}</Htag>
            {products && <Tag color='grey' size='medium'> {products.length}</Tag>}
            <Sort sort = {sort} setSort = {setSort}/>
        </div>
            <div>
                {sortedProducts && sortedProducts.map(p => <Product layout='position' product={p} key ={p._id}/>)}
            </div>
            <div className= {style.hhTitle}>
            <Htag tag = 'h2' >Вакансии - {page.category}</Htag>
            <Tag color='red' size='medium'>hh.ru</Tag>
            
        </div>
        {firstCategory == TopLevelCategory.Courses && page.hh &&<HhData {...page.hh}/>}

       {page.advantages&& page.advantages.length > 0 &&
       <><Htag tag='h2'>Приемущества</Htag>
       <Advantages advantages = {page.advantages}/></>
       }
        {page.seoText && <div className={style.seo} dangerouslySetInnerHTML={{__html:page.seoText}}/>}
        <Htag tag='h2'>Получаемые навыки</Htag>
        {page.tags.map(t => <Tag key={t} color ="primary">{t}</Tag>)}
        </div>
    );
}