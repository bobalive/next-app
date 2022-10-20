import {GetStaticProps, GetStaticPropsContext,GetStaticPaths} from "../../node_modules/next";
import {  withLayout } from "../../layout/Layout";
import axios from "axios";
import { MenuItem } from "../../interfaces/menu.inteface";
import { TopLevelCategory, TopPageModule } from "../../interfaces/toppage.inteface";
import { ParsedUrlQuery } from 'querystring';
import { ProductModule } from "../../interfaces/prodect.inteface";
import { firstLevelMenu } from "../../helpers/helper";

import {TopPageComponent} from '../../page-components/index';
import { API } from "../../helpers/api";
import { useContext } from "react";
import { AppContext } from "../../context/app.context";


function TopPage({firstCategory,page,products}:TopPageProps):JSX.Element {
  
  return (
    <TopPageComponent 
    firstCategory= {firstCategory}
    page = {page}
    products = {products}
    />
  );
}

export default withLayout(TopPage);

export const  getStaticPaths: GetStaticPaths = async ()=>{

  let paths : string[]= [];

  for(const m of firstLevelMenu){
    const {data:menu} = await axios.post<MenuItem[]>(process.env.NEXT_PUBLIC_DOMAIN + '/api/top-page/find',{
      firstCategory: m.id 
    });

    paths= paths.concat(menu.flatMap(s => s.pages.map(p => `/${m.route}/${p.alias}`)));
    

  }
  
  return{
    paths,
    fallback:false
  };
};

export const getStaticProps: GetStaticProps<TopPageProps> = async ({params}:GetStaticPropsContext<ParsedUrlQuery>)=>{
  if(!params){
    return{
      notFound:true
    };
  }
  const firstCategoryItem = firstLevelMenu.find(m => m.route == params.type);

    if(!firstCategoryItem){
      return{
        notFound:true
      };
  }

  try {
  const {data:menu} = await axios.post<MenuItem[]>(API.topPage.find,{
    firstCategory: firstCategoryItem?.id
  });

  if(menu.length == 0){
    return{
      notFound:true
    };
  }
  const {data:page} = await axios.get<TopPageModule>(API.topPage.byAlias+ params.alias);
  const {data:products} = await axios.post<ProductModule[]>(API.porduct.find,{
    category:page.category,
    limit:10
  });




  return {
    props:{
      menu,
      firstCategory:firstCategoryItem?.id,
      page,
      products
    },
  };} catch{
    return{
      notFound:true
    };
  }

};
 interface TopPageProps extends Record<string , unknown>{
    menu:MenuItem[]
    firstCategory:TopLevelCategory
    page:TopPageModule,
    products:ProductModule[]
 }
