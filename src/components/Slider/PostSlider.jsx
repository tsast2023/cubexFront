import React from 'react'
import Slider from "react-slick";
import Div from '../Div';
import Post from '../Post';

export default function PostSlider() {
  const postData = [
    {
      url:'', 
      src:'/images/italy.jpg', 
      alt:'Post', 
      date:'', 
      title:'Italy'
    },
    {
      url:'', 
      src:'/images/allemagne.jpg', 
      alt:'Post', 
      date:'',
      title:'Allemagne'
    },
    {
      url:'', 
      src:'/images/saudi.jpg', 
      alt:'Post', 
      date:'',
      title:'Saudi Arabia'
    },
    {
      url:'', 
      src:'/images/canada.jpg', 
      alt:'Post', 
      date:'',
      title:'Canada'
    },
    {
      url:'', 
      src:'/images/australie.jpg', 
      alt:'Post', 
      date:'',
      title:'Australie'
    },
    {
      url:'', 
      src:'/images/france.jpg', 
      alt:'Post', 
      date:'',
      title:'France'
    },
    {
      url:'', 
      src:'/images/pologne.jpg', 
      alt:'Post', 
      date:'',
      title:'Pologne'
    },
    {
      url:'', 
      src:'/images/portugal.jpg', 
      alt:'Post', 
      date:'',
      title:'Portugal'
    },
    {
      url:'', 
      src:'/images/danemark.jpg', 
      alt:'Post', 
      date:'',
      title:'Danemark'
    },
    {
      url:'', 
      src:'/images/roumanie.jpg', 
      alt:'Post', 
      date:'',
      title:'Roumanie'
    },
    {
      url:'', 
      src:'/images/emirates.jpg', 
      alt:'Post', 
      date:'',
      title:'émirats arabes unis'
    },



  ]
  
  /** Slider Settings **/
  const settings = {
    dots: false,
    arrows:false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 4000,
    speed: 1000,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1600,
        settings: {
          slidesToShow: 3
        }
      },
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1
        }
      }
    ]
  };

  return (
    <Slider {...settings} className='cs-gap-24'>
      {postData.map((item,index)=>(
          <Div key={index}>
            <Post 
              url={item.url}
              src={item.src} 
              alt={item.alt} 
              date={item.date}
              title={item.title}
            />
          </Div>
        ))}
    </Slider>
  )
}
