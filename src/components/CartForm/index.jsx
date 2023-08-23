import style from './cartForm.module.scss'
import Button from '../Button'
import { Formik, Form } from 'formik';
import Input from '../Input';
import InputMasked from '../InputMasked';
import { validationSchemaCart } from '../../validation';
import { makePurchase } from '../../redux/actions';
import { useDispatch } from 'react-redux';
import { cartFormFields } from './cartFormFields';

function CartForm() {
    const dispatch = useDispatch()

    return (
        <Formik
            initialValues={{
                firstName: '',
                lastName: '',
                age: '',
                address: '',
                phone: '',
            }}
            validationSchema={validationSchemaCart}
            onSubmit={(values, { setSubmitting }) => {
                dispatch(makePurchase(values))
                setSubmitting(false);
            }} >
            <Form className={style.form}>
                <h2 className={style.form__title}>Place order</h2>
                {cartFormFields.map(field => {
                    if (field.tagType === 'masked') {
                        return <InputMasked key={field.name} {...field} />
                    }
                    return <Input key={field.name} {...field} />
                })}
                <Button text='Checkout' className={style.form__submit} type='submit' />
            </Form>
        </Formik>
    )
}

export default CartForm