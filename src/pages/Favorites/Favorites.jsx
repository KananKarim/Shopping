import style from './favorites.module.scss'
import Container from '../../components/Container';
import ProductList from '../../components/ProductList';
import { useSelector } from "react-redux";
import { AppearanceContext } from "../../context";
import { useState } from 'react';
import { AppearanceForm } from '../../components/AppearanceForm';

export function Favorites() {

    const favorites = useSelector(state => state.favorites.favorites)
    const loading = useSelector(state => state.loading.loading)
    const error = useSelector(state => state.error.error)

    const [appearance, setAppearance] = useState(localStorage.getItem('appearanceFav') || "cardView")

    if (error) {
        return <p>Refresh Page</p>;
    }

    return (
        <Container>
            {!loading
                ? favorites.length
                    ? <>
                        <AppearanceContext.Provider value={appearance}>
                            <AppearanceForm name={'appearanceFav'} onChangeHandler={setAppearance} />
                            <ProductList products={favorites} type={'buy'} />
                        </AppearanceContext.Provider>
                    </>
                    : <p className={style.empty}>Favorite is empty</p>
                : <p className={style.empty}>Loading..</p>}
        </Container>
    )
}