import style from './header.module.scss'
import { FavoriteIcon, CartIcon } from "../icons";
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

function Header() {

    const favorites = useSelector(state => state.favorites.favorites).length
    const cart = useSelector(state => state.cart.cart).length

    return (
        <>
            <header className={style.header}>
                <div className={style.header__container}>
                    <div className={style.header__wrapper}>
                        <Link to='/'>
                            <h1 style={{fontSize:"40px",fontWeight:"bold"}}>KARIMLISHOPIFY</h1>
                        </Link>
                        <div className={style.header__btns}>
                            <Link to='/favorites' className={style.header__favorites}>
                                <FavoriteIcon />
                                {favorites > 0 && <div>{favorites}</div>}
                            </Link>
                            <Link to='/cart' className={style.header__cart}>
                                <CartIcon />
                                {cart > 0 && <div>{cart}</div>}
                            </Link>
                        </div>
                    </div>
                </div>
            </header>
        </>
    )
}

export default Header