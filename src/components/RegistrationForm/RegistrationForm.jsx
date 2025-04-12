import { useDispatch } from "react-redux";
import { Form,Formik,Field } from "formik";
import { register } from "../../redux/auth/operations";
import css from './RegistrationForm.module.css';

export default function RegistrationForm() {
    const dispatch = useDispatch();

    const handleSubmit = (values, actions)=>{
        dispatch(register(values));
        actions.resetForm()
    }
  return (
   <div className={css.formCont}>
     <Formik
       initialValues={{
          name: '',
          email: '',
          password: '',
        }}
      onSubmit={handleSubmit}
     >
    <Form className={css.form} autoComplete="off">
      <label className={css.label}>
        <p>Username</p>
        <Field className={css.inputField}type="text" name="name" />
      </label>
      <label className={css.label}>
        <p>Email</p>
        <Field className={css.inputField}type="email" name="email" />
      </label>
      <label className={css.label}>
        <p>Password</p>
        <Field className={css.inputField}type="password" name="password" />
        </label>
        <button type="submit">Register</button>
      </Form>
    </Formik>
   </div>
  )
}
