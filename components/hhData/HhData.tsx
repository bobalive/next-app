import { HhDataProps } from "./HhData.props";
import style from './HhData.module.css';
import cn from 'classnames'
import { Card } from "../index";
import RateIcon from './star.svg'
import { priceRu } from "../../helpers/helper";


export const HhData =({count, juniorSalary, middleSalary, seniorSalary}:HhDataProps):JSX.Element=>{
    return(
      <div className={style.hh}>
      <Card className={style.count}>
          <div className={style.title}>Всего вакансий</div>
          <div className={style.countValue}>{count}</div>
      </Card>
      <Card className={style.salary}>
      <div>
          <div className={style.title}>Начальный</div>
          <div className={style.salaryValue}>{priceRu(juniorSalary)}</div>
          <RateIcon className = {style.filled}/>
          <RateIcon/>
          <RateIcon/>
      </div>
      
      <div>
          <div className={style.title}>Средний</div>
          <div className={style.salaryValue}>{priceRu(middleSalary)}</div>
          <RateIcon className = {style.filled}/>
          <RateIcon className = {style.filled}/>
          <RateIcon/>
      </div>
      
      <div>
          <div className={style.title}>Профессионал</div>
          <div className={style.salaryValue}>{priceRu(seniorSalary)}</div>
          <RateIcon className = {style.filled}/>
          <RateIcon className = {style.filled}/>
          <RateIcon className = {style.filled}/>
      </div>
      </Card>
  </div>
    );
}