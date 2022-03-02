import React from 'react'
import { useDispatch, useSelector } from 'react-redux';

import {FiUser} from 'react-icons/fi';
import {RiLockPasswordLine} from 'react-icons/ri';

import {useForm} from '../../hooks/useForm';
import { startLogin } from '../../actions/auth';

export const Form = () => {

  const dispatch = useDispatch();
  const {checking, triesLogin} = useSelector(state=>state.auth);

  const [ formLoginValues, handleLoginInputChange  ] = useForm({
    username:'',
    password:''
});

  const {username, password} = formLoginValues;

  const handleLogin = (e) =>{
    e.preventDefault();
   dispatch(startLogin(username, password))
  }
 


  return (
    <form className='flex flex-col gap-5 w-11/12 sm:w-auto' onSubmit={handleLogin}>
        <div className='relative flex items-center' >
                <FiUser color='black' className='absolute ml-3'/>
                  <input 
                  type="text" 
                  placeholder="Usuario"
                  name='username'
                  value={username}
                  onChange={handleLoginInputChange}
                  className='pr-3 pl-10 py-3 font-semibold w-full  sm:w-80 text-sm'
                  />
        </div>
        <div className='relative flex items-center' >
                <RiLockPasswordLine color='black' className='absolute ml-3'/>
                  <input 
                  type="password" 
                  placeholder="Contraseña"
                  name='password'
                  value={password}
                  onChange={handleLoginInputChange}
                  className='pr-3 pl-10 py-3 font-semibold w-full sm:w-80 text-sm'
                  />
        </div>
        <button disabled={checking || (triesLogin === 4) ? true : false}  className={checking? `form_button py-2 rounded-md opacity-60` :` form_button py-2 rounded-md`} >
           {triesLogin === 4 ? 'BLOQUEADO' : 'INGRESAR'} 
        </button>
    </form>
  )
}
