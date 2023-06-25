import React from "react";
import styled from "styled-components";
import {AiOutlineMenu, AiOutlineSearch} from "react-icons/ai";
import {BiMicrophone, BiDotsVerticalRounded,} from "react-icons/bi";
import {CgMenuGridR, CgProfile} from "react-icons/cg";

const Header = () => {

    return(
        <Container>
            <Header1>
             <Wrap>
                   <Left>
                        <AiOutlineMenu/>
                        <img src ="/youtube-logo.png" alt="logo"/>
                    </Left>
                    <Middle>
                        <Hold>
                         <input placeholder="Search"/>
                         <Box><AiOutlineSearch/></Box>
                        </Hold>
                        <Mic>
                          <BiMicrophone/>
                       </Mic>
                   </Middle>
                    <Right>
                     <CgMenuGridR/>
                     <BiDotsVerticalRounded/>
                        <Button>
                        <CgProfile/>
                          SIGN UP 
                       </Button>
                    </Right>
                </Wrap>
           </Header1>
            <Header2>
              <Wrap2>
                   <Span>All</Span>
                   <Nav>Burna Boy</Nav>
                   <Nav>Music</Nav>
                   <Nav>Mixes</Nav>
                   <Nav>Olamide</Nav>
                   <Nav>Nollywood</Nav>
                   <Nav>Lil Kesh</Nav>
                   <Nav>Rapping</Nav>
                   <Nav>Comedies</Nav>
                   <Nav>African Music</Nav>
                   <Nav>Sketch comedy</Nav>
                   <Nav>Albums</Nav>
                   <Nav>Contemporary Worship Music</Nav>
                   <Nav>Playlists</Nav>
                   <Nav>Stages</Nav>
             </Wrap2>
           </Header2>
        </Container>
        
    )
}

export default Header;

const Container = styled.div`
height: 15vh;
width: 100%;
// background-color: peru;
`;

const Header1 = styled.div`
height: 50%;
width: 100%;
// background-color: blue;
display: flex;
justify-content: center;
`;

const Wrap = styled.div`
height: 50px;
width: 95%;
// background-color: red;
display: flex;
justify-content: space-between;
align-items: center;
`;
const Left = styled.div`
    height: 40px;
    width: 9%;
    // background-color: green;
    display: flex;
    justify-content: space-between;
    align-items: center;

    img{
        width: 80px;
        height: 40px;
    }

    @media screen and (max-width: 768px){
       height: 50px;
       width: 100px;
     }
`;

const Middle = styled.div`
    height: 40px;
    width: 35%;
    // background-color: yellow;
    display: flex;
    justify-content: space-between;

    input{
        height: 30px;
        width: 90%;
        background-color: transparent;
        outline: none;
        padding-left: 10px;
    }
    @media screen and (max-width: 768px){
        display: none;
     }
    
`;

const Box = styled.div`
    height: 34px;
    width: 35px; 
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid grey;
`;

const Hold = styled.div`
    height: 35px;
    width: 90%;
    // background-color: purple;
    display: flex;
    align-item: center;
`;

const Mic = styled.div`
    height: 39px;
    width: 39px; 
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    background-color: whitesmoke;
    cursor: pointer;
`;
const Right = styled.div`
height: 40px;
width: 15%;
// background-color: pink;
display: flex;
justify-content: space-between;
align-items: center;

@media screen and (max-width: 768px){
   height: 45px;
   width: 150px;
 }
`;

const Button = styled.div`
height: 40px;
width: 50%;
background-color: transparent;
color: blue;
border: 1px solid blue;
display: flex;
justify-content: space-around;
align-items: center;
cursor: pointer;

:hover {
    background: blue;
    color: white;
}

@media screen and (max-width: 768px){
   height: 40px;
   width: 70%;
 }
`;

const Header2= styled.div`
height: 50%;
width: 100%;
// background-color: blue;
display: flex;
justify-content: center;

    @mediascreen and (max-width:768px){
        display: none;
        flex-direction: column;
        width: 30%;
        position: absolute;
        background-color: navy;
        height: auto;
        justify-content: space-between;
        left: ${({click}) => (click? 0 : "-100%")};
        transform: scale(1.02);
    }
`;

const Wrap2 = styled.div`
height: 50px;
width: 95%;
// background-color: red;
display: flex;
justify-content: space-between;
align-items: center;

@media screen and (max-width: 768px){
    display: none;
    /* color:white; */
 }
`;

const Span = styled.div`
font-size: 12px;
padding: 0.3rem 0.5rem;
background-color: black;
color: white;
display: flex;
justify-content: space-between;
align-items: center;
border-radius: 1rem;
cursor: pointer;

:hover{
    background-color: white;
    color: black;
}
`;

const Nav = styled.div`
font-size: 12px;
padding: 5px;
background-color: whitesmoke;
display: flex;
justify-content: space-between;
align-items: center;
border-radius: 1rem;
cursor: pointer;

:hover{
    background-color: black;
    color: white  ;
}
`;