import React from 'react'
import Side_bar from './sidebar';
import Navbar from './navbar'
import Dashboard from './dashboard';
import Chart from './charts'
export default function App(){
    return(
        <>
        <div className="main_div">
            <div className="left_container">
            <Side_bar/>
            </div>
            <div className="right_container">
            <Navbar/>
            <Dashboard/>
            </div>
        </div>
            {/* <Chart/> */}
            
        </>
    );
}