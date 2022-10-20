import { AdvantagesProps } from "./Advantages.props";
import style from './Advantages.module.css';
import cn from 'classnames'
import VerifyIcon from './Verification.svg'
import { Htag,P } from "../index";


export const Advantages =({advantages}:AdvantagesProps):JSX.Element=>{
    return(<>
      {advantages.map(a =>(
        <div key ={a._id} className={style.advantage}>
          <VerifyIcon/>
          <div className={style.title}>{a.title}</div>
          <hr className={style.vline}/>
          <div>{a.description}</div>
        </div>
      ))}
    </>

    );
}