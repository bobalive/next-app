import { createContext, ReactNode, useEffect, useState } from "react";
import { MenuItem } from "../interfaces/menu.inteface";
import { ProductModule } from "../interfaces/prodect.inteface";
import { TopLevelCategory } from "../interfaces/toppage.inteface";

export  interface IAppContext {
    menu: MenuItem[],
    firstCategory:number,
    setMenu?:(newMenu: MenuItem[]) => void,
    products?:any
    setProducts?:(newProducts:any) => void
}

export const AppContext = createContext<IAppContext>({
    menu:[],
    firstCategory:TopLevelCategory.Courses,
    products:[],
});

export const AppContextProvider =({menu,firstCategory,children, products}: IAppContext&{children:ReactNode})=>{
    const [menuState, setMenuState] = useState<MenuItem[]>(menu);
    const [newProducts, setProductsState] = useState(products);
    const setMenu = (newMenu:MenuItem[]) => setMenuState(newMenu);
    const setProducts = (newProducts:ProductModule[]) => setProductsState(newProducts);

    
    
    return <AppContext.Provider value = {{menu,firstCategory , setMenu,products,setProducts}}>
        {children}
    </AppContext.Provider>;
}