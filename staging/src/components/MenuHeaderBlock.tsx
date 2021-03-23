import React, {useEffect, useRef, useState} from "react";
import styled from 'styled-components';
import backgroundImage from '../static/BackGroundMain.svg';
import {ReactComponent as LogoStaging } from "../static/LogoStaging.svg";
import {ReactComponent as MainText } from "../static/MainText.svg";

export const MenuHeaderBlock = () => {
    const [isHeaderFixed, setHeaderFixed] = useState<boolean>(false);

    useEffect(() => {
        const body = document.querySelector('body');
        // @ts-ignore
        body.onscroll = () => {
            if(window.pageYOffset !== 0) {
                setHeaderFixed(true);
            } else {
                setHeaderFixed(false);
            }
        };
    }, []);

    return (
            <ContainerMain>
               <img src={backgroundImage} />
               <Blyaaa>
                   <Header isHeaderFixed={isHeaderFixed}>
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
               </Blyaaa>
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
`;

const Navigation = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-grow: 0.7;
  column-gap: 10px;
`;

const Header = styled.header<{ isHeaderFixed: boolean }>`
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  display: flex;
  justify-content: space-between;
  padding-top: 31px;
  align-items: center;
  padding: 31px 0;
  
  background-color: ${({ isHeaderFixed }) => isHeaderFixed ? '#fff' : 'transparent'};
  & > svg {
    fill: ${({ isHeaderFixed }) => isHeaderFixed ? '#000' : '#fff'};
  }
`;

const ButtonNav = styled.a`
  display: inline-block;
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

const ButtonContacts = styled.a`
  transition: 1s ease;
  display: inline-block;
  font-weight: 600;
  font-size: 18px;
  background-color: #fff;
  color: #000000;
  border: 1px solid #fff;
  cursor: pointer;
  padding: 18px 35px;
  &:hover {
    border-color: #fff;
    color: #fff;
    background-color: #000;
  }
`;

const Blyaaa = styled.div`
  outline: 1px solid #fff;
  max-width: 1240px;
  width: 100%;
  padding: 0 10px;
  margin: 0 auto;
`;