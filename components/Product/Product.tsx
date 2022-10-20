import {ProductProps } from "./Product.props";
import style from './Product.module.css';
import cn from 'classnames'
import { Card } from "../Card/Card";
import { Rating } from "../Rating/Rating";
import { Tag } from "../Tag/Tag";
import { Button } from "../Button/Button";
import { declanetionOfNum, priceRu } from "../../helpers/helper";
import { Divider } from "../Divider/DIvieder";
import Image from "next/image";
import { ForwardedRef, forwardRef, useRef, useState } from "react";
import { Review } from "../Review/Review";
import { ReviewForm } from "../ReviewForm/ReviewForm";
import {motion} from 'framer-motion';


export const Product = motion(forwardRef(({product,className,...props}:ProductProps, ref:ForwardedRef<HTMLDivElement>):JSX.Element=>{

    const [isReviewOpened, setIsRewiewOpened] = useState<boolean>(false);
    const reviewRef = useRef<HTMLDivElement>(null);
    const variants = {
        visible:{
            height:'auto',
        },
        hidden:{
            overflow:'hidden',
            height:0,
        }
    }
    const scrollToReview = ()=>{
        setIsRewiewOpened(true);
        reviewRef.current?.scrollIntoView({
            behavior:"smooth",
            block:'start'
        });
    };
    
    return(
        <div className={className} {...props} ref = {ref}>
            <Card className={style.product}>
            <div className={style.logo}>

                <Image 
                src={process.env.NEXT_PUBLIC_DOMAIN+ product.image}
                alt = {product.title}
                width={70}
                height = {70}
               />
            </div>
            <div className ={style.title}>{product.title}</div>
            <div className={style.price}>
                {priceRu(product.price)}
                {product.oldPrice && <Tag color="green" className={style.oldPrice}>{product.price - product.oldPrice}</Tag>}
            </div>
            <div className ={style.credit}>{priceRu(product.credit)}/<span className={style.month}>мес</span></div>
            <div className={style.rating}> <Rating rating={product.reviewAvg ?? product.initialRating}/></div>

            <div className={style.tags}>{product.categories.map(c => <Tag color="ghost" className={style.category}>{c}</Tag>)} </div>

            <div className={style.priceTitle}>цена</div>
            <div className={style.creditTitle}>кредит</div>
            <div className={style.rateTitle}> <a href="#ref" onClick={()=>scrollToReview()}>{product.reviewCount} {declanetionOfNum(product.reviewCount, ["отзыв", "отзыва","отзывов"])}</a></div>
            <Divider className={style.hr}/> 
            <div className={style.description}>{product.description}</div>
            
            <div className = {style.features}>
                {product.characteristics.map(c=>(
                    <div className={style.characteristics} key ={c.name}>
                        <span className={style.charactericsName}>{c.name}</span>
                        <span className={style.caractristicsDots}></span>
                        <span className={style.caracteristicsValue}>{c.value}</span>
                    </div>
                ))}

            </div>
            <div className={style.advBlock}>
                {product.advantages &&
                <div className={style.advantages}>
                    <div className={style.advTitle}>Приемущества</div>
                    <div>{product.advantages}</div>
                </div>}
           
                {product.disadvantages && <div className={style.disadvantages}>
                    <div className={style.advTitle}>Недостатки</div>
                    <div>{product.disadvantages}</div>
                </div>}
           
            </div>
            <Divider className={cn(style.hr , style.hr2)}/>
            <div className={style.actions}>
                <Button appearance="primary" className={style.rewiew}> Узнать подробнее</Button>
                <Button appearance="ghoast" arrow={isReviewOpened? 'down':'right'} onClick={()=>setIsRewiewOpened(!isReviewOpened)}>Читать отзывы</Button>
            </div>

        </Card>
        <motion.div
            initial ={isReviewOpened?'vsible': 'hidden'}
            animate ={isReviewOpened ? 'visible': 'hidden'}
            variants = {variants}

            >

            <Card color="blue" className={style.reviews}
            ref = {reviewRef}
            >
                {product.reviews.map(r => (
                    <div key ={r.id}>
                    <Review review={r} />
                    <Divider/>
                    </div>
                )
                
                )}
                <ReviewForm productId={product._id} />
            </Card>
        </motion.div>

        </div>

    );
}));