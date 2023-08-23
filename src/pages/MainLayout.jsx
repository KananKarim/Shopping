import { useEffect } from 'react'
import Modal from "../components/Modal";
import { modalProps } from '../components/Modal/modalProps.jsx'
import Header from '../components/Header';
import { Outlet } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchData } from '../redux/actions';

export function MainLayout() {
    const dispatch = useDispatch()

    const modalType = useSelector(state => state.modal.modal)

    useEffect(() => {
        dispatch(fetchData('/products.json'))
    }, [dispatch]);

    return (
        <>
            {modalType
                && <Modal
                    data={modalProps.find(modal => modal.type === modalType)} />}
            <Header />
            <Outlet />
        </>
    )
}