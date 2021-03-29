import React from "react";
import styled from "styled-components";

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
                    <button>{'<'}</button>
                    <button>{'>'}</button>
                </ButtonGroup>
            </Header>
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

const Header = styled.div``;

const ButtonGroup = styled.div`
 & button {
   background-color: #81C98D;
   color: #fff;
   border: none;
   cursor: pointer;
   padding: 14px;
 }
  & button:hover {
    color: grey;
  }
`;