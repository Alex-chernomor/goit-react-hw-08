import { useDispatch } from "react-redux";
import { Formik, Form, Field } from "formik";
import { logIn } from "../../redux/auth/operations";
import css from './LoginForm.module.css';

export default function LoginForm() {
const dispatch = useDispatch();

const handleSubmit = (values,actions)=>{
  dispatch(logIn(values));
  actions.resetForm()
}

  return (
   <Formik
   initialValues={{
    email:'',
    password:'',
   }}
   onSubmit={handleSubmit}
   >
    <Form className={css.form} autoComplete = 'off'>
      <label className={css.label}>
          <p>Email</p>
          <Field className={css.inputField} type='email' name='email'/>
      </label>
      <label className={css.label}>
          <p>Password</p>
          <Field className={css.inputField} type="password" name="password" />
      </label>
        <button type="submit">Log In</button>
    </Form>
   </Formik>
  )
}
