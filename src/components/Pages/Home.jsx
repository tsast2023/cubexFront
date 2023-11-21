import React, { useEffect , useContext } from 'react';
import FunFact from '../FunFact';
import Hero from '../Hero';
import Div from '../Div';
import SectionHeading from '../SectionHeading';
import Spacing from '../Spacing';
import Cta from '../Cta';
import { pageTitle } from '../../helper';
import {GlobalState} from '../../GlobalState'
import  MovingText from '../MovingText'
import LogoList from '../LogoList'
import PostSlider from '../Slider/PostSlider';

export default function Home() {
  pageTitle('Acceuil');

  // Hero Social Links
  const heroSocialLinks = [
    {
      name: 'Facebook',
      links: 'https://www.facebook.com/profile.php?id=100089169018858',
    },
    {
      name: 'Instagram',
      links: 'https://www.instagram.com/cube_xpro/?igshid=NTc4MTIwNjQ2YQ%3D%3D&fbclid=IwAR3QOz1tcBWi00unP0_VW19xoVyD9EYEzMq81TXF9QpAb7eU-dHAl2Z-gx8',
    },

  ];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
 
  const state = useContext(GlobalState)
  const [isAdmin, setIsAdmin]= state.UserApi.isAdmin
  return (
    <>
    {isAdmin ? <>       
    <Hero
        title="CUBEXPRO DASHBORD"
        bgImageUrl="/images/bg.jpg"
  
      />
      </> : <>
     
      <Hero
        title="Le talent au-delà des frontières"
        subtitle=""
        btnText="Contacter"
        btnLink="/contact"
        scrollDownId="#service"
        socialLinksHeading="Suivez-nous"
        heroSocialLinks={heroSocialLinks}
        bgImageUrl="/images/bg.jpg"
  
      />
      {/* End Hero Section */}

      {/* Start FunFact Section */}
      <div className="container">
        <FunFact variant="cs-type1"/>
      </div>
      <Spacing lg="150" md="80" />
      <Div className="cs-shape_wrap_4">
     
        <Div className="container">
          <Div className="row">
            <Div className="col-xl-4">
              <SectionHeading
                title="Découvrir nos destinsations"
                subtitle="Nos destinations"
              />
              <Spacing lg="90" md="45" />
            </Div>
            <Div className="col-xl-7 offset-xl-1">
              <Div className="cs-half_of_full_width">
                <PostSlider />
              </Div>
            </Div>
          </Div>
        </Div>
      </Div>
     
          {/* Start MovingText Section */}
          <Spacing lg="125" md="70" />
      <MovingText text="Nos partenaires mondiaux" />
      <Spacing lg="105" md="70" />
      {/* End MovingText Section */}

      {/* Start LogoList Section */}
      <Div className="container">
      <Div className="cs-funfact_shape"  style={{backgroundImage: 'url(./images/funfact_shape_bg.svg)'}} />
        <LogoList />
       
      </Div>
      <Spacing lg="150" md="80" />
      {/* End LogoList Section */}

    
    <Div className="container">
        <Cta
          title="CONTACTEZ-NOUS"
          btnText="postuler à une réunion"
          btnLink="/contact"
          bgSrc="/images/cta_bg.jpeg"
        />
      </Div>
      {/* End CTA Section */}
    </>
}
    </>
  );
}
