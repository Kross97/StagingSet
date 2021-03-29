import React from "react";
import styled from "styled-components";
import project1 from '../static/MostProjects1.jpg';
import project2 from '../static/MostProjects2.jpg';

export const MostProjectsBlock = () => {
  return (
      <ContainerProjects>
        <MainContent className={'container'}>
            <Header>
                <TextLabel>
                <span>
                    Most recent
                </span>
                    <span>projects</span>
                </TextLabel>
                <ButtonGroup>
                    <button/>
                    <button/>
                </ButtonGroup>
            </Header>
            <ContainerImages>
                <ItemImage>
                    <Image src={project1}/>
                    <TextImage>Los Angeles, CA</TextImage>
                </ItemImage>
                <ItemImage>
                    <Image src={project2}/>
                    <TextImage>San Francisco, CA</TextImage>
                </ItemImage>
            </ContainerImages>
        </MainContent>
      </ContainerProjects>
  );
};

const MainContent = styled.div``;

const ContainerProjects = styled.div`
  padding: 100px 0 91px;
  background-color: #fff;
`;

const TextLabel = styled.div`
  font-weight: 600;
  font-size: 56px;
  line-height: 120%;
  color: #000;
  & > span:last-child {
    color: #81C98D;
    display: block;
  }
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 41px;
`;

const ButtonGroup = styled.div`
 & button {
   position: relative;
   background-color: #81C98D;
   color: #fff;
   border: none;
   cursor: pointer;
   width: 50px;
   height: 50px;
 }
  
  & > button:last-child {
    margin-left: 5px;
  }
  
  & > button:before {
    content: '';
    width: 17px;
    height: 17px;
    top: 35%;
    left: 40%;
    border: 2px solid #fff;
    position: absolute;
    border-top: none;
    border-left: none;
    transform: rotate(-228deg);
  }
  & > button:last-child:before {
    content: '';
    transform: rotate(-46deg);
    left: 27%;
    top: 34%;;
  }
  & button:hover:before {
    border-color: grey;
  }
`;

const ContainerImages = styled.div`
 display: flex;
 justify-content: space-between;
 height: 41vw; 
`;

const ItemImage = styled.div`
 display: flex;
 flex-direction: column;
 flex-basis: 49%; 
`;

const Image = styled.div<{ src: string }>`
 background: url(${({ src }) => src}) no-repeat;
  flex-grow: 1;
  background-size: cover;
  background-position: center;
  margin-bottom: 20px;
`;

const TextImage = styled.span`
  font-weight: 500;
  font-size: 22px;
  line-height: 26px;
`;