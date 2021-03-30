import React from "react";
import styled from "styled-components";
import numbOne from '../static/01Numb.svg';
import numbTwo from '../static/02Numb.svg';
import numbThree from '../static/03Numb.svg';

export const VirtualStaging = () => {
    return (
        <ContainerVirtual>
            <MainContent className={'container'}>
                <TextContainer>
                    <TextLabel>
                        <p>The virtual</p>
                        <p>staging process</p>
                    </TextLabel>
                    <ButtonContact>Contact now</ButtonContact>
                </TextContainer>
                <ListItems>
                    <Item>
                        <Number src={numbOne}/>
                        <TextItem>
                            <TitleItem>Contact us</TitleItem>
                            <MainItemText>Contact us by email <b>hello@stagingset.com</b> and we will get back to you
                                promptly to get a better scope of your project.</MainItemText>
                        </TextItem>
                    </Item>
                    <Item>
                        <Number src={numbTwo}/>
                        <TextItem>
                            <TitleItem>Send the photos</TitleItem>
                            <MainItemText>Email or text the photos. Any way works, then our professionals will start to
                                create the magic.</MainItemText>
                        </TextItem>
                    </Item>
                    <Item>
                        <Number src={numbThree}/>
                        <TextItem>
                            <TitleItem>Staging completed</TitleItem>
                            <MainItemText>We will send you the result in 1-2 days. If you have any requests to change
                                anything, we will work on it.</MainItemText>
                        </TextItem>
                    </Item>
                </ListItems>
            </MainContent>
        </ContainerVirtual>
    );
};

const ContainerVirtual = styled.div`
  padding: 112px 0;
`;

const MainContent = styled.div`
  display: flex;
  justify-content: space-between;
`;

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const TextLabel = styled.div`
  font-weight: 600;
  font-size: 56px;
  line-height: 120%;
  color: #000;

  & > p:last-child {
    color: #81C98D;
  }
`;

const ListItems = styled.div`
  display: flex;
  flex-direction: column;
  flex-basis: 50%;
`;

const Item = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 60px;
`;

const TextItem = styled.div`
  display: flex;
  flex-direction: column;
`;

const Number = styled.div<{ src: string }>`
  background: url(${({src}) => src}) no-repeat;
  min-width: 128px;
  height: 110px;
  margin-right: 35px;
`;

const TitleItem = styled.p`
  font-weight: 500;
  font-size: 25px;
  line-height: 30px;
  margin-bottom: 20px;
`;

const MainItemText = styled.span`
  font-weight: 300;
  font-size: 18px;
  line-height: 150%;
`;

const ButtonContact = styled.button`
  font-weight: 600;
  font-size: 18px;
  line-height: 110%;
  margin-top: 60px;
  align-self: flex-start;
  cursor: pointer;
  border: 1px solid #fff;
  outline: none;
  background-color: #000;
  color: #fff;
  padding: 18px 50px;
  transition: 1s ease;
  &:hover {
    color: #000;
    background-color: #fff;
    border-color: #000;
  }
`;