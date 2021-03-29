import React from "react";
import styled from "styled-components";
import contactImage from '../static/ContactImage.jpg';
import roundsImage from '../static/RoundsImage.svg';

export const ContactBlock = () => {
  return (
      <ContainerContact>
          <MainContainer className={'container'}>
              <TextContainer>
                  <TextContact>
                      <p>
                          <span>Contact Us</span>
                          <span>to</span>
                      </p>
                      <span>Inspire your Buyers</span>
                      <ButtonContact>Contact now</ButtonContact>
                  </TextContact>
              </TextContainer>
              <ContainerImages>
                  <ImageContainer />
                  <RoundsImage />
              </ContainerImages>
          </MainContainer>
      </ContainerContact>
  );
};

const ButtonContact = styled.button`
  font-weight: 600;
  font-size: 18px;
  line-height: 110%;
  color: #fff;
  background-color: black;
  border: 1px solid #fff;
  padding: 17px 43px;
  margin-top: 60px;
  cursor: pointer;
  transition: 1s ease;
  &:hover {
    background-color: #fff;
    border-color: #000;
    color: #000;
  }
`;

const ContainerContact = styled.div`
 background-color: #000000;
 padding: 92px 0; 
`;

const MainContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media(max-width: 800px) {
    flex-direction: column;
  }
`;

const TextContainer = styled.div``;

const ContainerImages = styled.div`
  width: 50%;
  height: 41vw;
  position: relative;
`;

const RoundsImage = styled.div`
  background: url(${roundsImage}) no-repeat;
  width: 50%;
  height: 71%;
  position: absolute;
  left: -27%;
  top: 15%;
  z-index: 1;
  background-size: cover;
`;

const ImageContainer = styled.div`
 width: 100%;
 height: 100%;
  z-index: 2;
 background: url(${contactImage}) no-repeat;
  background-size: cover;
  position: relative;
  
  @media(max-width: 800px) {
    background-size: cover;
    width: 300px;
    height: 300px;
  }
`;

const TextContact = styled.div`
  font-weight: 600;
  font-size: 56px;
  line-height: 120%;
  color: #fff;
  
  & > p > span:first-child {
    color: #81C98D;
    margin-right: 10px;
  }
  & > span:last-child {
    color: #fff;
  }
  @media(max-width: 800px) {
    flex-direction: column;
    display: flex;
    align-items: center;
    margin-bottom: 15%;
  }
`;

