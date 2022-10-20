import { LayoutProps } from "./Layout.props";
import style from './Layout.module.css';
import cn from 'classnames';
import { Header } from "./Header/Header";
import { Sidebar } from "./Sidebar/Sidebar";
import { Footer } from "./Footer/Footer";
import { FunctionComponent, useState } from "react";
import { AppContextProvider, IAppContext } from "../context/app.context";
import { Up } from "../components";


const Layout =({children}:LayoutProps):JSX.Element=>{
    return(
        <div className={style.wrapper}>
        <Header className={style.header}/>
            <Sidebar className={style.sidebar}/>
            <div className={style.body}>
                {children}
            </div>
        <Footer className={style.footer}/>
        <Up></Up>
        </div>
    );
};


export const withLayout = <T extends Record<string, unknown> & IAppContext>(Component:FunctionComponent<T>)=>{
    return function withLAayoutComponent(props:T):JSX.Element{
        return(
            <AppContextProvider menu ={props.menu} firstCategory={props.firstCategory}products ={props.products?props.products:[]}>
             <Layout>
                <Component {...props}/>
            </Layout>
            </AppContextProvider>

        );
    };
};