import { SearchProps } from "./Search.props";
import style from './Search.module.css';
import cn from 'classnames'
import { Input } from "../Input/Input";
import { Button } from "../Button/Button";
import { KeyboardEvent, useState } from "react";
import SearchIcon from './Search.svg'
import { useRouter } from "next/router";


export const Search =({children, className,...props}:SearchProps):JSX.Element=>{
    const [search, setSearch] = useState('');
    const router = useRouter()
    
    const goToSearch =()=>{
        router.push({
            pathname:'/search',
            query:{
                q:search
            }
        });
        
    };
    const handleKeyDown = (e:KeyboardEvent )=>{
        if(e.key === 'Enter'){
            goToSearch();
        }
    }

    return(

        <div className={cn(className, style.search)} {...props}>
            <Input 
            placeholder="Поиск"
            value={search}
            className = {style.input}
            onChange ={(e)=> setSearch(e.target.value)}
            onKeyDown ={handleKeyDown}
            
            />
            <Button 
            appearance="primary"
            className={style.button}
            onClick={goToSearch}
            >
                <SearchIcon/>
            </Button>
        </div>

    );
}