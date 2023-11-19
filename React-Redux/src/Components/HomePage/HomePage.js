import React, { useState } from 'react'
import Hero from '../Hero/Hero.js'
import './HomePageStyle.css'
import { useDispatch, useSelector } from 'react-redux';
import { Subscribe, unSubscribe } from '../../redux/actions.js';

const HomePage = () => {

  const {loading,channel,error} = useSelector(state=>state.channel);
  // console.log("front-channel",channel);
  const dispatch = useDispatch();

  return (
    <>
        <div className='home-main'>
          <h1>Account DashBoard</h1>
          <div className='home-admin'>
            {/* <h2>Total Views: {totalViews}</h2> */}
            <h2>Total Subscribers: {channel.subscribers}</h2>
          </div>
          <button onClick={()=>dispatch(Subscribe())}>Subscribe</button>
          <button onClick={()=>dispatch(unSubscribe())}>UnSubscribe</button>
        </div>
        
        <Hero/>
    </>
  )
}

export default HomePage;