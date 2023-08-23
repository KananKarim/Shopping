import * as Yup from 'yup';

export const validationSchemaCart = Yup.object({
    firstName: Yup.string()
        .min(2, 'Must contain at least 2 letters')
        .max(25, 'Can be no more than 25 characters')
        .trim()
        .required('Required field!'),
    lastName: Yup.string()
        .min(2, 'Must contain at least 2 letters')
        .max(25, 'Can be no more than 25 characters')
        .trim()
        .required('Required field!'),
    age: Yup.number()
        .min(18, 'You must be at least 18 years old')
        .max(150, 'People have not yet learned to live that long :)')
        .positive()
        .integer()
        .required('Required field!'),
    address: Yup.string()
        .min(3, 'Must contain at least 2 letters')
        .max(40, 'Can be no more than 40 characters')
        .trim()
        .required('Required field!'),
    phone: Yup.string()
        .matches(/^[^#]*$/)
        .required('Required field!'),
})
