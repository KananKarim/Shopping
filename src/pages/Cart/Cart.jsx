import style from './cart.module.scss'
import Container from '../../components/Container';
import ProductList from '../../components/ProductList';
import { useSelector } from "react-redux";
import CartForm from '../../components/CartForm';

export function Cart() {

    const cart = useSelector(state => state.cart.cart)
    const loading = useSelector(state => state.loading.loading)
    const error = useSelector(state => state.error.error)

    if (error) {
        return <p>Refresh the page</p>;
    }

    const uniqueSKUs = [...new Set(cart.map(item => item.SKU))]
    const uniqueCartProducts = uniqueSKUs.map(item => cart.find(product => product.SKU === item))

    return (
        <Container>
            {!loading
                ? uniqueCartProducts.length
                    ? <div className={style.wrapper}>
                        <ProductList products={uniqueCartProducts} type={'delete'} productAmount={true} />
                        <CartForm />
                    </div>
                    : <p className={style.empty}>basket is empty</p>
                : <p className={style.empty}>Loading..</p>}
        </Container>
    )
}