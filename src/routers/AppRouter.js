import React, { useEffect, lazy, Suspense } from "react";
import {
    BrowserRouter as Router,
    Navigate,
    Route,
    Routes,
  } from "react-router-dom";
  import { useDispatch, useSelector } from "react-redux";

import { PrivateRoute } from "./PrivateRoute";
import { PublicRoute } from "./PublicRoute";
import { renewUser } from "../actions/auth";
import { LoaderView } from "../components/loader/LoaderView";

const MoviesScreen = React.lazy(()=> import('../components/movies/MoviesScreen'))
const LoginScreen = React.lazy(()=> import('../components/login/LoginScreen'))
const DetailMovie = React.lazy(()=> import('../components/detailmovies/DetailMovie'))

  export const AppRouter = () => {

    const dispatch = useDispatch();

    const {username, checking} = useSelector(state => state.auth);

    useEffect(()=>{
      const usernamelocal = localStorage.getItem('username')
      if(usernamelocal){
        dispatch(renewUser(usernamelocal))
      }
    },[dispatch])

  
    
    return (
        <div>
          <Router>
            <Routes>
              <Route path="/login"  element={
                   <PublicRoute username={username} >
                     <Suspense fallback={<LoaderView/>}>
                        <LoginScreen/> 
                     </Suspense>
                     
                    </PublicRoute>
                 } 
              />
               <Route path="/" element={

                <PrivateRoute  username={username}>
                    <Suspense fallback={<LoaderView/>}>
                        <MoviesScreen />
                    </Suspense>
                </PrivateRoute> 
                } 
            />
            <Route path="/detailMovie" element={
              <Suspense fallback={<LoaderView/>}>
                <DetailMovie/>
              </Suspense>
            }/>
            
              <Route path="*" element={<Navigate replace to="/" />} />
            </Routes>
          </Router>
        </div>
      );

  }