import React from "react";
import styled from 'styled-components';
import backgroundImage from '../static/BackGroundMain.svg';
import {ReactComponent as LogoStaging } from "../static/LogoStaging.svg";
import {ReactComponent as MainText } from "../static/MainText.svg";

export const MenuHeaderBlock = () => {
    return (
            <ContainerMain>
               <img src={backgroundImage} />
               <Header>
                   <LogoStaging />
                   <Navigation>
                       <ButtonNav>Home</ButtonNav>
                       <ButtonNav>About</ButtonNav>
                       <ButtonNav>Work</ButtonNav>
                       <ButtonNav>Service</ButtonNav>
                       <ButtonContacts>Contact us</ButtonContacts>
                   </Navigation>
               </Header>
                <MainText />
            </ContainerMain>
    );
};


const ContainerMain = styled.div`
  height: 100vh;
  width: 100%;
  position: relative;
  display: flex;
  align-items: center;
  & > img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: left center;
    position: absolute;
    z-index: -1;
  }
  
  & > svg {
    margin-left: 10vw;
  }
`;

const Navigation = styled.div`
 display: flex;
  column-gap: 60px;
`;

const Header = styled.header`
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  display: flex;
  justify-content: space-around;
  padding-top: 31px;
  align-items: center;
`;

const ButtonNav = styled.button`
  background-color: transparent;
  border: none;
  color: rgba(255, 255, 255, 0.5);
  cursor: pointer;
  font-weight: normal;
  font-size: 17px;
  line-height: 110%;
  
  &:hover {
    color: #fff;
    text-decoration-line: underline;
    text-decoration-color: #fff;
  }
`;

const ButtonContacts = styled.button`
  font-weight: 600;
  font-size: 18px;
  line-height: 110%;
  background-color: #fff;
  color: #000000;
  border: none;
  cursor: pointer;
  padding: 18px 35px;
`;