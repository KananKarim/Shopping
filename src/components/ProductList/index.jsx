import ProductItem from "../ProductItem"
import style from './productList.module.scss'
import PropTypes from 'prop-types';
import { useContext } from "react";
import { AppearanceContext } from "../../context";
export default function ProductList({ type, products, productAmount }) {

    const appearance = useContext(AppearanceContext)

    return (
        <div className={appearance === 'cardView' ? style.productList : style.productList + ' ' + style.productTable}>
            {products.map(product =>
                <ProductItem
                    key={product.SKU}
                    product={product}
                    type={type}
                    productAmount={productAmount} />
            )}
        </div>
    )
}

ProductList.propTypes = {
    products: PropTypes.array,
    type: PropTypes.string,
    productAmount: PropTypes.bool,
}