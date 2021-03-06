import React, {useEffect, useRef, useState} from "react";
import styled from 'styled-components';
import backgroundImage from '../static/BackGroundMain.jpg';
import {ReactComponent as LogoStaging } from "../static/LogoStaging.svg";

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
               <HeaderContainer className={'container'}>
                   <Header isHeaderFixed={isHeaderFixed}>
                       <Zaeb isHeaderFixed={isHeaderFixed}>
                           <LogoStaging />
                           <Navigation>
                               <ButtonNav isHeaderFixed={isHeaderFixed}>Home</ButtonNav>
                               <ButtonNav isHeaderFixed={isHeaderFixed}>About</ButtonNav>
                               <ButtonNav isHeaderFixed={isHeaderFixed}>Work</ButtonNav>
                               <ButtonNav isHeaderFixed={isHeaderFixed}>Service</ButtonNav>
                               <ButtonContacts isHeaderFixed={isHeaderFixed}>Contact us</ButtonContacts>
                           </Navigation>
                       </Zaeb>
                   </Header>
                   <MainText>
                       <UpText>Transform your listing with</UpText>
                       <LogoUpText>Virtual</LogoUpText>
                       <LogoDownText>staging</LogoDownText>
                   </MainText>
               </HeaderContainer>
            </ContainerMain>
    );
};

const Zaeb = styled.div<{ isHeaderFixed: boolean }>`
  display: flex;
  flex-grow: 1;
  justify-content: space-between;
  max-width: 1240px;
  margin: 0 auto;
  align-items: center;
  & > svg {
    margin-left: ${({ isHeaderFixed }) => isHeaderFixed && '10px'};
  }

  & > nav {
    margin-right: ${({ isHeaderFixed }) => isHeaderFixed && '10px'};
  }
`;

const UpText = styled.p`
  font-weight: 300;
  font-size: 22px;
  line-height: 150%;
  color: #fff;
`;

const LogoUpText = styled.p`
  font-weight: bold;
  font-size: 100px;
  line-height: 110%;
  letter-spacing: 0.02em;
  color: #81C98D;
`;

const LogoDownText = styled(LogoUpText)`
  color: #fff;
`;

const MainText = styled.div`
  margin: auto 0;
  & > p {
    margin: 0;
  }
`;


const ContainerMain = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  & > img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center center;
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
  position: ${({ isHeaderFixed }) => isHeaderFixed ? 'fixed' : 'absolute'};
  top: 0;
  z-index: 11;
  left: ${({ isHeaderFixed }) => isHeaderFixed ? '0' : '10px'};
  right: ${({ isHeaderFixed }) => isHeaderFixed ? '0' : '10px'};
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: ${({ isHeaderFixed }) => isHeaderFixed ? '31px 0' : '31px 0'};
  
  background-color: ${({ isHeaderFixed }) => isHeaderFixed ? '#fff' : 'transparent'};
  & >  div > svg {
    fill: ${({ isHeaderFixed }) => isHeaderFixed ? '#000' : '#fff'};
  }
`;

const HeaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  @media(max-width: 1000px) {
    align-items: center;
  }
`;

const ButtonNav = styled.a<{ isHeaderFixed: boolean}>`
  display: inline-block;
  background-color: transparent;
  border: none;
  color: ${({ isHeaderFixed }) => isHeaderFixed ? 'rgba(0, 0, 0, 0.5)' : 'rgba(255, 255, 255, 0.5)'};
  cursor: pointer;
  font-weight: normal;
  font-size: 17px;
  line-height: 110%;
  
  &:hover {
    color: ${({ isHeaderFixed }) => isHeaderFixed ? '#81C98D' : '#fff'};
    text-decoration-line: underline;
    text-decoration-color: ${({ isHeaderFixed }) => isHeaderFixed ? '#81C98D' : '#fff'};
  }
`;

const ButtonContacts = styled.a<{ isHeaderFixed: boolean }>`
  transition: 1s ease;
  display: inline-block;
  font-weight: 600;
  font-size: 18px;
  background-color: #fff;
  color: #000000;
  border: 1px solid ${({ isHeaderFixed }) => isHeaderFixed ? '#000' : '#fff'};
  cursor: pointer;
  padding: 18px 35px;
  &:hover {
    border-color: #fff;
    color: #fff;
    background-color: #000;
  }
`;