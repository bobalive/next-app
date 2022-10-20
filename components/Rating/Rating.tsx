
import style from './Rating.module.css';
import cn from 'classnames'
import { RatingProps } from "./Rating.props";
import { useEffect, useState,KeyboardEvent, forwardRef, ForwardedRef } from 'react';
import StarIcon from './star.svg';


export const Rating =forwardRef(({isEditable = false,rating,setRating,children, error,...props}:RatingProps , ref:ForwardedRef<HTMLDivElement>):JSX.Element=>{
    const [ratingArray , setRatingArrray] = useState<JSX.Element[]>(new Array(5).fill(<></>));
    useEffect(()=>{
        constructRating(rating);
    },[rating]);

    const constructRating = (currentRating:number)=>{
        const updatedArray = ratingArray.map((r:JSX.Element, i:number)=>{
            return(
            <>
                <span
                onMouseEnter={()=> changeDisplay(i+1)}
                onMouseLeave ={()=> constructRating(rating)}

                onClick={()=> onClick(i+1)}>
                    <StarIcon
                        className ={cn(style.star,{
                            [style.fill]: i < currentRating,
                            [style.editable]: isEditable                    
                        })}
                        tabIndex={isEditable?0:-1}
                        onKeyDown={(e:KeyboardEvent<SVGAElement>)=>{isEditable&&handleSpace(i+1, e);}}

                    />                    
                </span>
            </>


            );
        });
        setRatingArrray(updatedArray);
    };

        const changeDisplay =(i:number)=>{
            if(!isEditable){
                return;
            }
            constructRating(i);
        };
        const onClick =(i:number)=>{
            if(!isEditable||!setRating){
                return;
            }
            setRating(i);
        };
        const handleSpace =(i:number, e:KeyboardEvent<SVGAElement>)=>{
            if(e.code != 'Space'|| !setRating){
                return;
            }
            setRating(i);
        };
    return(<div {...props} ref = {ref} >
        {ratingArray.map((r,i)=> <span key = {i}>{r}</span>)}
        <div  className={style.error}> {error?.message}</div>
    </div>);
});