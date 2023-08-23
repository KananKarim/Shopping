import { Route, Routes } from 'react-router-dom'
import { MainLayout, Home, Cart, Favorites, Product, NotFound } from "../pages"

export default function Router() {
    return (
        <Routes>
            <Route path='/' element={<MainLayout />}>
                <Route index element={<Home />} />
                <Route path='/cart' element={<Cart />} />
                <Route path='/favorites' element={<Favorites />} />
                <Route path='/product'>
                    <Route path=':productId' element={<Product />} />
                </Route>
            </Route >
            <Route path='*' element={<NotFound />} />
        </Routes >
    )
}