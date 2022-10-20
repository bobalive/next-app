import { ButtonHTMLAttributes, DetailedHTMLProps, ReactNode } from 'react';
import up from './Up.svg';
import close from './Close.svg';
import menu from './Menu.svg';

export const icons ={
    up ,
    close,
    menu
};

export type IconName = keyof typeof icons;

export interface ButtonIconProps extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>{

    appearance:'primary'|'white',
    icon:IconName;
}