import {types} from '../types/types';

import Swal from 'sweetalert2';
import axios from 'axios';
import { cifrarHairColor } from '../helpers/cifrarHairColor';
import { movieLogout } from './movie';

//Logear a un usuario
export const startLogin = (username, password) => {
    return async(dispatch, getState) => {
       try{
        dispatch(authCheckingLogin(true));
        const resp = await axios.get(`https://swapi.dev/api/people/?search=${username}`)
        const body = await resp.data;

        if(body.results.length === 1){

            const {name, hair_color, created, films} = body.results[0];

           if(username === name){

               const passwordSuccess = cifrarHairColor(hair_color,password);

               if(passwordSuccess){
                localStorage.setItem('username', username);
                dispatch(login({
                    username,
                    created,
                    movies:films
                }))

               }else{
                dispatch(authCheckingFinish()); 
                const triesLogin = getState().auth.triesLogin
                Swal.fire('Error', `Contraseña incorrecta (Intento erróneo ${triesLogin})`, 'error');
               }
               
           }else{
            dispatch(authCheckingFinish());
            const triesLogin = getState().auth.triesLogin
            Swal.fire('Error', `El nombre de usuario existe, pero no esta escrito correctamente (Intento erróneo ${triesLogin})`, 'error');
           }
            
        }else {
            dispatch(authCheckingFinish());
            const triesLogin = getState().auth.triesLogin
            Swal.fire('Error', `EL usuario no existe (Intento erróneo ${triesLogin})`, 'error');
        }
       } catch(error){
            console.log(error);
       }
      
    }
}

const authCheckingLogin = (checking) => ({
    type:types.authCheckingLogin,
    payload:checking
})

const authCheckingFinish = () => ({
    type:types.authCheckingFinish
})

//guardar al usuario en el estado global
const login = (user) =>({
    type: types.authLogin,
    payload: user
})

export const renewUser = (username) => {
    return async(dispatch) => {
        dispatch(authCheckingLogin(true));
        const resp = await axios.get(`https://swapi.dev/api/people/?search=${username}`)
        const body = await resp.data;


            const {name, created, films} = body.results[0];
                dispatch(login({
                    username,
                    created,
                    movies:films
                }))
      
    }
}

//Cerrar sesion del usuario
export const authLogout = () =>{
    return (dispatch)=> {
        localStorage.clear();
        
        dispatch(movieLogout());

        dispatch(logout());
        
    }
}
//limpiar la sesion del usuario en el global state de auth
const logout = () => ({type:types.authLogout})