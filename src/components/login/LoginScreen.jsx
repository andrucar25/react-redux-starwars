import React from 'react'

import './login.css';
import logo from '../../assets/logo/swlogo.png';
import star1 from '../../assets/stars/star1.png';
import star2 from '../../assets/stars/star2.png';
import star3 from '../../assets/stars/star3.png';
import star4 from '../../assets/stars/star4.png';
import star5 from '../../assets/stars/star5.png';
import star6 from '../../assets/stars/star6.png';
import star7 from '../../assets/stars/star7.png';
import star8 from '../../assets/stars/star8.png';
import { Form } from './Form';


 const LoginScreen = () => {

  return (
   <section className='section__login gap-20'>

     <div className='flex flex-col justify-center items-center w-11/12 sm:w-auto'>
        <img src={logo} alt='' className='h-28'/>
        <h2 className='section__login__title'>Demo APP</h2>
     </div>
      <Form/>

     <div className='star star1 starimg' style={{
       background:`url(${star1})`
       }}></div>
     <div className='star star2' style={{
       background:`url(${star2})`
       }}></div>
     <div className='star star3' style={{
       background:`url(${star3})`
       }}></div>
     <div className='star star4' style={{
       background:`url(${star4})`
       }}></div>
     <div className='star star5' style={{
       background:`url(${star5})`
       }}></div>
     <div className='star star6' style={{
       background:`url(${star6})`
       }}></div>
     <div className='star star7' style={{
       background:`url(${star7})`
       }}></div>
     <div className='star star8' style={{
       background:`url(${star8})`
       }}></div>
   </section>
  )
}

export default LoginScreen