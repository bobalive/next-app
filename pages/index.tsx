import {  useState } from "react";
import {GetStaticProps} from "next"
import { Button, Htag, P,Rating,Tag,Input, TextArea } from "../components/index";
import { withLayout } from "../layout/Layout";
import axios from "axios";
import { MenuItem } from "../interfaces/menu.inteface";
import { API } from "../helpers/api";
import { Menu } from "../layout/Menu/Menu";
import Link from "next/link";




function Home({menu, firstCategory}:HomeProps):JSX.Element {

  const [rating, setRating] = useState<number>(0);


  return (
    <>
     <Htag tag="h1">Тут пока что ничео нет ) </Htag>
     <a >
      <Link href={'/courses/financial-analytics'}>Работающая страница</Link>
     </a>
    </>
  );
}

export default withLayout(Home);

export const getStaticProps: GetStaticProps<HomeProps> = async ()=>{
  const firstCategory = 0;
  const {data:menu} = await axios.post<MenuItem[]>(API.topPage.find,{
    firstCategory
  });
  
  return {
    props:{
      menu,
      firstCategory
    }
  };
};

interface HomeProps extends Record<string, unknown>{
  menu:MenuItem[],
  firstCategory:number;
}