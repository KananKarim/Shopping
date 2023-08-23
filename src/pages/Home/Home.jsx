import { useSelector } from "react-redux";
import { useState } from 'react';
import Container from '../../components/Container';
import ProductList from '../../components/ProductList';
import { AppearanceContext } from "../../context";
import { AppearanceForm } from "../../components/AppearanceForm";

export function Home() {
    const products = useSelector(state => state.products.products)
    const loading = useSelector(state => state.loading.loading)
    const error = useSelector(state => state.error.error)

    const [appearance, setAppearance] = useState(localStorage.getItem('appearanceHome') || "cardView")

    if (error) {
        return <p>Refresh the page</p>;
    }

    return (
        <Container>
            {!loading
                ? <>
                    <AppearanceContext.Provider value={appearance}>
                        <AppearanceForm name={'appearanceHome'} onChangeHandler={setAppearance} />
                        <ProductList products={products} type={'buy'} />
                    </AppearanceContext.Provider>
                </>
                : <p>Loading..</p>}
        </Container>
    )
}