import style from './Preloader.module.scss';
import preloaderSrc from '../../../assets/img/loader.svg';

const Preloader = (props) => {
    return (
       <div className={style.preloader}>
           <img src={preloaderSrc} alt=""/>
       </div>
    );
}

export default Preloader;