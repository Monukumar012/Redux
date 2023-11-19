import React from 'react'
import './HeroStyle.css'
import { useDispatch, useSelector } from 'react-redux';
import { Subscribe } from '../../redux/actions';

const Hero = () => {
  const dispatch = useDispatch();
  const {videos,loading,error} = useSelector(state=>state.videos);
  console.log(videos);
  return (
    <div className='hero-main'>
      {loading ? <h2>Loading....</h2> : error ? <h2>Error : {error}</h2> :
        <ul className='hero-video'>
          {videos.map((video,ind)=>{
            return (<li className='video' key={ind}>
              <h3>Name : {video.name}</h3>
              <p>Views : {video.views}</p>
            </li>)
          })}
        </ul>
      }
      <button onClick={()=>dispatch(Subscribe())}>Subscribe This Channel</button>
    </div>
  )
}

export default Hero