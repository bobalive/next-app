
import {GetStaticProps,GetStaticPropsContext} from "next";

import { withLayout } from "../../layout/Layout";
import axios from "axios";
import { MenuItem } from "../../interfaces/menu.inteface";
import { firstLevelMenu } from "../../helpers/helper";
import { ParsedUrlQuery } from "querystring";
import { TopLevelCategory } from "../../interfaces/toppage.inteface";
import { API } from "../../helpers/api";
import { Htag } from "../../components";
import Link from "next/link";


function Type({firstCategory,menu}:TypeProps):JSX.Element {
  
  return (
    <>
    <Htag tag="h1">Тут пока что ничео нет ) </Htag>
    <a >
      <Link href={'/courses/financial-analytics'}>Работающая страница</Link>
     </a>
    </>
    
  );
}

export default withLayout(Type);

export const getStaticPaths = ()=>{
    return {
        paths: firstLevelMenu.map(m => m.route && '/'+m.route),
        fallback:false
    };
};

export const getStaticProps: GetStaticProps<TypeProps> = async ({params}:GetStaticPropsContext<ParsedUrlQuery>)=>{
  try {
    
    if(!params){
        return{
          notFound:true
        };
      }
      const firstCategoryItem = firstLevelMenu.find(m => m.route === params.type);

      if(!firstCategoryItem){
        return{
          notFound:true
        };
    }
    const {data:menu} = await axios.post<MenuItem[]>(API.topPage.find,{
      firstCategory:firstCategoryItem.id
    });
    
  

  
  return {
    props:{
      menu,
      firstCategory:firstCategoryItem.id
    },
  };
  } catch (error) {
    return{
      notFound:true
    };
  }
};

interface TypeProps extends Record<string, unknown>{
  menu:MenuItem[],
  firstCategory:TopLevelCategory;
}