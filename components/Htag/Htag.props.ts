import {  DetailedHTMLProps, HTMLAttributes, HtmlHTMLAttributes, ReactNode } from "react";

export interface HtagProps extends DetailedHTMLProps<HTMLAttributes<HTMLTitleElement>,HTMLTitleElement>{
    tag:'h1'|'h2'|'h3';
    children:ReactNode
}