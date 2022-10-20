import { ReviewFormProps } from "./ReviewForm.props";
import style from './ReviewForm.module.css';
import cn from 'classnames'
import CloseICon from './Close.svg';
import {format} from 'date-fns'
import {ru} from 'date-fns/locale'
import { Rating } from "../Rating/Rating";
import { Input } from "../Input/Input";
import { TextArea } from "../TextArea/TextArea";
import { Button } from "../Button/Button";
import { useState } from "react";
import { useForm, Controller, SubmitHandler } from "react-hook-form";
import { IRewiewForm, IRewiewFormSentResponse } from "./RewievForm.inteface";
import axios from "axios";
import { API } from "../../helpers/api";


export const ReviewForm =({productId , className, ...props}:ReviewFormProps):JSX.Element=>{

    const {register, control , handleSubmit, formState:{errors}, reset} = useForm<IRewiewForm>();
    const [isSuccess , setIsSuccess] = useState<boolean>(false);
    const [error, setError] = useState<string>();

    const onSubmit:SubmitHandler<IRewiewForm> = async (formData:IRewiewForm)=>{
      try{
      const {data} = await axios.post<IRewiewFormSentResponse>(API.review.createDemo,{...formData,productId});
      if(data.message){
        setIsSuccess(true);
        reset();
      }else {
        setError('что то пошло не так');

      }
      }catch{
        setError('error');
      }
      
    };
    return(
      <form onSubmit={handleSubmit(onSubmit)}>
     
      <div className={cn(className , style.reviewForm)} {...props}>
        <div className={style.inputBox}>
        <Input 
        {...register('name',{required: {value: true, message:'Заполните имя'}})}
         placeholder= 'Имя'
         error={errors.name}
         />
        <Input 
        {...register('title',{required:{value:true, message:'Заполните заголова'}})}
         placeholder='Заголовок Отзыва'
         error={errors.title}
         />
        </div>
        <div></div>
        
        <div className={style.rating}>
          <span>Оценка:</span>
          <Controller
            control = {control}
            name = {'rating'}
            rules = {{required:{value:true, message:'Укажите рейтинг'}}}
            render ={({field})=>(
              <Rating rating={field.value}
               setRating ={field.onChange}
                ref ={field.ref}
                isEditable={true}
                error= {errors.rating}
                
                />
            )

            }

          />
          
        </div>
        <TextArea 
        {...register('description',{required:{value:true, message:'Заполните описание'}})}
         className={style.textArea}
         placeholder ='Текст отзыва'
         error={errors.description}
         />
        <div className={style.submit}>
          <Button appearance="primary" >Отправить</Button>
          <span>* Перед публикацией отзыв пройдет предварительную модерацию и проверку</span>
        </div>
      </div>
      { isSuccess && <div className={cn(style.success, style.panel)}>
        <div className={style.successTitle}> Ваш отзыв отправлен</div>
        <div className={style.description}>
            Спасибо ваш отзыв будет опубликован после проверки
        </div>
        <CloseICon className ={style.close}/>
      </div>}
      { error && <div className={cn(style.error, style.panel)}>
        {error}
        <CloseICon className ={style.close}/>
      </div>}
      
      </form>
    );
};