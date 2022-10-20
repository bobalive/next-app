
import {GetStaticProps} from "next"
import { withLayout } from "../layout/Layout";
import axios from "axios";
import { MenuItem } from "../interfaces/menu.inteface";
import { API } from "../helpers/api";
import { Htag } from "../components";


function Search({menu, firstCategory}:HomeProps):JSX.Element {
  return (
    <>
    <Htag tag="h1">В разработке </Htag>
    </>
  );
}

export default withLayout(Search);

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