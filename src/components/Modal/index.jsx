import { useDispatch, useSelector } from 'react-redux';
import style from './modal.module.scss'
import PropTypes from 'prop-types';
import { setModalTypeAction, setSKUAction, setCart } from '../../redux/actions'

export default function Modal({ data: { type, title, description, closeBtn = false, closeBtnHandler, actions } }) {
    const dispatch = useDispatch()
    const products = useSelector(state => state.products.products)
    const modalType = useSelector(state => state.modal.modal)
    const SKU = useSelector(state => state.SKU.SKU)
    const cart = useSelector(state => state.cart.cart)

    function closeModalHandler() {
        dispatch(setModalTypeAction(null))
        dispatch(setSKUAction(null))
    }
    function onSubmiteCartHandler() {
        dispatch(setCart(modalType, SKU, products, cart))
        closeModalHandler()
    }

    return (
        <div className={style.modal + ' ' + style[type]} onClick={closeModalHandler}>
            <div className={style.modal__content} onClick={(e) => e.stopPropagation()}>
                <header className={style.modal__header}>
                    <h3 className={style.modal__title}>
                        {title}
                    </h3>
                    {closeBtn && closeBtnHandler(closeModalHandler, style.close)}
                </header>
                <div className={style.modal__body}>
                    {description && <p>{description}</p>}
                    {actions && actions(closeModalHandler, onSubmiteCartHandler, style.modal__btns)}
                </div>
            </div>
        </div>
    )
}

Modal.propTypes = {
    data: PropTypes.shape({
        type: PropTypes.string,
        title: PropTypes.string,
        closeBtn: PropTypes.bool,
        closeBtnHandler: PropTypes.func,
        description: PropTypes.string,
        actions: PropTypes.func,
    })
}