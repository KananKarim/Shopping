import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import style from './notFound.module.scss'

export function NotFound() {
    const navigate = useNavigate();

    return (
        <>
            <div className={style.notFound}>
                <div className={style.notFound__container}>
                    <div className={style.notFound__wrapper}>
                        <p className={style.notFound__subtitle}>404</p>
                        <h1 className={style.notFound__title}>Page not found</h1>
                        <p className={style.notFound__message}>
                            Return
                            <Link to="/" className={style.notFound__link}>Home</Link>
                        </p>
                        <p className={style.notFound__message}>
                            Return
                            <Link onClick={() => navigate(-1)} className={style.notFound__link}>Back</Link>
                        </p>
                    </div>
                </div>
            </div>
        </>
    )
}