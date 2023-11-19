import { useEffect } from 'react';
import './App.css';
import HomePage from './Components/HomePage/HomePage.js'
import {useDispatch} from 'react-redux';
import {getVideos,getChannel} from './redux/actions.js'



function App() {
  const dispatch = useDispatch();

  useEffect(()=>{
    dispatch(getVideos());
    dispatch(getChannel());
  },[])
  
  return (
    <>
      <HomePage/>
    </>
  );
}

export default App;
