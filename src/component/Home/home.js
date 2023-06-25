import React from "react";
import styled from "styled-components";
import Card from "../Card/card"

const Home = (props) => {
  return(
    <Hero>  
       <Wrapper>
          <Card image2='/Asake.jpg' alt="" h5='Asake' img='/Asake.jpg' text='Asake - Sungba (Remix)
          (Official Video)(feat Burna Boy)' view='1.3M views . 5 days ago'/>
          <Card h5='Real OGB Recent' alt="" img='/Ogb recent.jpg' image2='/Ogb recent.jpg' text='OGB Recent and Ola of Lagos cult*st
          dont achieve ola car' view='281K views . 3 days ago'/>
          <Card img='Ronaldihno-Zidane.jpg' alt="" image2='Ronaldihno-Zidane.jpg' text='Ronaldinho & Zidane Showing Their
          Class in 2005' h5='Alsido Football' view='20M views . 10 months ago'/>
          <Card img='Mr. Trouble.jpg' alt="" image2='Mr. Trouble.jpg' text='Mr. Trouble - A Nigerian Movie' h5='Nolly Great Movies'view='2.6M views . 4 years ago'/>
       </Wrapper>
       <Wrapper>
          <Card img='Young Jonn.jpg' alt="" image2='Young Jonn.jpg' text='Young John - Just Friends' h5='Chocolate City Music' view='506 views . 1 day ago'/>
          <Card img='Rema.jpg' alt="" image2='Rema.jpg' text='REMA - CALM DOWN (OFFICIAL LYRICS)' h5='OMARS AVE' view='1.2M views . 1 month ago'/>
          <Card img='NEPA Officer.jpg' alt="" image2='NEPA Officer.jpg' text='NEPA PFFICER (GHENGHENJOKES)' h5='GHENGHENJOKES' view='320K views . 2 weeks ago'/>
          <Card img='Finesse.jpg' alt="" image2='Finesse.jpg' text='Finesse - Pheelz & Buju [Official Music Video] edit' h5='NewMusic9ja' view='596K views . 4 weeks ago'/>
       </Wrapper>
    </Hero>
  
        
   )
}

export default Home;

const Hero = styled.div`
height: auto;
width: 100%;
// background-color: gold;
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
`;

const Wrapper = styled.div`
height: auto;
width: 95%;
// background-color: peru;
display: flex;
justify-content: space-between;
flex-wrap: wrap;
`;
