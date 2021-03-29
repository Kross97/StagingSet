import React from "react";
import styled from "styled-components";
import contactImage from '../static/ContactImage.jpg';

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
              <ImageContainer></ImageContainer>
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
 padding: 76px 0 92px; 
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

const ImageContainer = styled.div`
 width: 50%;
 height: 41vw;
 background: url(${contactImage}) no-repeat;
  background-size: contain;
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

