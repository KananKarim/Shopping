import { useEffect, useState, useContext } from 'react'
import style from './productItem.module.scss'
import PropTypes from 'prop-types';
import Button from '../Button'
import { FavoriteIcon } from "../icons/FavoriteIcon";
import { Link } from 'react-router-dom';

import { useDispatch, useSelector } from 'react-redux';
import { setFavorite, setModalTypeAction, setSKUAction } from '../../redux/actions'

import { AppearanceContext } from "../../context";

export default function ProductItem({ product: { SKU, name, imgUrl, color, price }, type, productAmount }) {
    const dispatch = useDispatch()
    const favorites = useSelector(state => state.favorites.favorites)
    const cart = useSelector(state => state.cart.cart)

    const appearance = useContext(AppearanceContext)

    const [isFavorite, setIsFavorite] = useState(favorites.find(item => item.SKU === SKU) ? true : false)

    function openModalHandler(e, modal, SKU) {
        e.preventDefault();
        dispatch(setModalTypeAction(modal))
        dispatch(setSKUAction(SKU))
    }

    const markAsFavorite = () => isFavorite ? setIsFavorite(false) : setIsFavorite(true)

    const [amount, setAmount] = useState(cart.filter(item => item.SKU === SKU).length)
    useEffect(() => {
        setAmount(cart.filter(item => item.SKU === SKU).length)
    }, [cart, SKU])

    return (
        <Link to={`/product/${SKU}`} className={appearance === 'cardView' ? style.product : style.product + ' ' + style.productRow}>
            <header className={style.product__header}>
                <h3 className={style.product__name}>{name}</h3>
                <div className={style.product__SKU}>{SKU}</div>
            </header>
            <div className={style.product__body}>
                <div className={style.product__img}>
                    <img src={imgUrl} alt={name} />
                </div>
                <div className={style.product__descr}>
                    <div className={style.product__color}>Color: {color}</div>
                    <div className={style.product__price}>
                        {price}<span className={style.product__priceSign}>$</span>
                        {productAmount && amount > 1
                            ? <span className={style.product__amount}>({amount})</span>
                            : null}
                    </div>
                    <div className={style.product__btns}>
                        <Button
                            className={style.product__favBtn}
                            onClick={(e) => {
                                e.preventDefault();
                                dispatch(setFavorite(favorites, { SKU, name, imgUrl, color, price }))
                                markAsFavorite()
                            }}>
                            <FavoriteIcon height={32} width={32} fill={isFavorite ? '#fc0' : '#a1bf36'} />
                        </Button>
                        {type === 'buy'
                            ? <Button
                                className={style.product__cartBtn}
                                text={'Buy'}
                                onClick={(e) => openModalHandler(e, 'buy', SKU)} />
                            : <Button
                                className={`${style.product__cartBtn} ${style.product__delBtn}`}
                                onClick={(e) => openModalHandler(e, 'delete', SKU)} />}
                    </div>
                </div>
            </div>
        </Link >
    )
}

ProductItem.propTypes = {
    product: PropTypes.shape({
        name: PropTypes.string,
        SKU: PropTypes.number,
        imgUrl: PropTypes.string,
        color: PropTypes.string,
        price: PropTypes.number,
    }),
    type: PropTypes.string,
    productAmount: PropTypes.bool,
}