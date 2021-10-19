import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,   
  } from "react-router-dom";
import AuthProvider from '../../context/AuthProvider';
import AboutUs from '../aboutUs/AboutUs';
import AllDoctors from '../allDoctors/AllDoctors';
import AllServices from '../allservices/AllServices';
import AllBlog from '../AllBlogs/AllBlog';
import Footer from '../footer/Footer';
import Header from '../header/Header';
import Home from '../home/Home';
import Login from '../login/Login';
import ServiceDetails from '../serviceDetails/ServiceDetails';
import PrivateRoute from '../privateRoute/PrivateRoute';
import Acount from '../acount/Acount';

const AllRoute = () => {
    return (
        <AuthProvider>
            <Router>
            <Header/>
                <Switch>
                    <Route exact path="/">
                        <Home/>
                    </Route>
                    <Route exact path="/home">
                        <Home/>
                    </Route>
                    <Route exact path="/services">
                        <AllServices/>
                    </Route>
                    <PrivateRoute exact path="/services/:serviceId">
                        <ServiceDetails/>
                    </PrivateRoute>
                    <Route exact path="/doctors">
                        <AllDoctors/>
                    </Route>
                    <Route exact path="/blogs">
                      <AllBlog/>
                    </Route>
                    <Route exact path="/about">
                        <AboutUs/>
                    </Route>
                    <Route exact path="/login">
                        <Login/>
                    </Route>
                    <PrivateRoute exact path="/login">
                        <Acount/>
                    </PrivateRoute>
                </Switch>
                <Footer/>
            </Router>
      </AuthProvider>
    );
};

export default AllRoute;