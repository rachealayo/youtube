import React from "react";
import styled from  "styled-components";

const Card = ({img,image2, text, view, h5}) => {
  return(
    <Container>
      <Div>
       <img src={img} alt=""/>
      </Div>
      <Text> 
        <img src={image2} alt=""/>
        <Abt>
          <b>{text}</b>
          <H5>{h5}</H5>
         <View>{view}</View>
       </Abt>
     </Text>
   </Container>
    
  )
}

export default Card;

const Abt = styled.div`
height: 70px;
width: 80%;
// background-color: purple;
font-size: 12px;
margin-top: 5px;

`;

const H5 = styled.div`
font-size: 12px;
color: grey;
`;

const Container = styled.div`
height: 220px;
width: 275px;
margin: 5px;
// background-color: green;

@media screen and (max-width: 768px){
  height: 250px;
  width: 100%;
  margin: 5px;
}
`;

const Div = styled.div`
height: 150px;
width: 100%;
// background-color: peru;

img{
  height: 150px;
  width: 100%;

  @media screen and (max-width: 768px){
    height: 190px;
    width: 100%;
  }
}

@media screen and (max-width: 768px){
  height: 190px;
  width: 100%;

}
`;
const Text = styled.div`
height: 80px;
width: 100%;
// background-color: yellow;
display: flex;
align-items: center;

img {
  height: 40px;
  width: 40px;
  border-radius: 50%;
  margin-right: 5px;
}
`;

const View = styled.div`
color: grey;
`;
