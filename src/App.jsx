import Layout from './components/Layout/Layout';
import { lazy, Suspense, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';

import './App.css';
import { useDispatch } from 'react-redux';
import { refreshUser } from './redux/auth/operations';
import RestrictedRoute from './components/RestrictedRoute';
import PrivateRoute from './components/PrivateRoute';

const HomePage = lazy(()=>import('./pages/HomePage/HomePage'));
const ContactsPage = lazy(()=>import('./pages/ContactsPage/ContactsPage'));
const LoginPage = lazy(()=>import('./pages/LoginPage/LoginPage'));
const RegistrationPage = lazy(()=>import('./pages/RegistrationPage/RegistrationPage'));
const NotFoundPage = lazy(()=>import('./pages/NotFoundPage/NotFoundPage'));

function App() {
  const dispatch = useDispatch();

  useEffect(()=>{
    dispatch(refreshUser())
  },[dispatch]);


  return (
     <Layout>
      <Suspense fallback={<p>Loading...</p>}>
          <Routes>
            <Route path='/' element={<HomePage/>}/>
            <Route path='/contacts' element={
                <PrivateRoute component={<ContactsPage />} redirectTo="/login" />
            }/>
            <Route path='/login' element={
               <RestrictedRoute component={<LoginPage />} redirectTo="/contacts" />
            }/>
            <Route path='/register' element={
              <RestrictedRoute component={<RegistrationPage />} redirectTo='/'/>
              }/>
            <Route path='*' element={<NotFoundPage/>}/>
          </Routes>
        </Suspense>
      </Layout>
  )
}

export default App