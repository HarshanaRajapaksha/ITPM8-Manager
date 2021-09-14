import React, { Component } from 'react';
import {BrowserRouter,Route} from 'react-router-dom';
import UpdateDiscount from './components/UpdateDiscount';
import Discount from './components/Discount';
import Footer from './components/Footer';
import DiscountDetails from './components/DiscountDetails';
import SideBar from './components/SideBar';
import DashBoard from './components/DashBoard';

export default class App extends Component {
  render() {
    return (
      <BrowserRouter>
      <div className="containerApp">
        <SideBar/>
        <Route path="/" exact component={DashBoard}></Route>
        <Route path="/discount" exact component={Discount}></Route>
        <Route path="/editDiscount/:id" component={UpdateDiscount}></Route>
        <Route path="/discountDetails/:id" component={DiscountDetails}></Route>
        <Footer/>
      </div>
      
    
      </BrowserRouter>
      
      
    )
  }
}