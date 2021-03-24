import React from "react";
import styled from "styled-components";
import {ReactComponent as InspiriesText} from "../static/InspiriesText.svg";

export const InspiriesBlock = () => {
    return (
        <ContainerInspiries>
            <TextContainer>
                <TextAbout>About us</TextAbout>
                <InspiriesTextContainer>
                    <p>StagingSet</p>
                    <p>Inspires buyers</p>
                </InspiriesTextContainer>
            </TextContainer>
            <MainText>
                <p>We are a virtual staging company that inspires buyers, transforms listings and provides first class
                service.</p>
                <p>
                    We are specifically known for our highly realistic images and tasteful design. As a global team, we are
                    always available for our clients 7 days a week to design, revise and deliver our projects.
                </p>
            </MainText>
        </ContainerInspiries>
    );
};

const ContainerInspiries = styled.div`
  padding: 101px 0;
  background-color: #fff;
  display: flex;
  justify-content: space-around;
  align-items: flex-start;
`;

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const TextAbout = styled.span`
  font-style: normal;
  font-weight: 300;
  font-size: 25px;
  line-height: 30px;
  margin-bottom: 20px;
`;

const InspiriesTextContainer = styled.div`
  font-weight: 600;
  font-size: 56px;
  line-height: 120%;
  color: #000;

  & > p:last-child {
   color: #81C98D;
  }
`;

const MainText = styled.span`
  max-width: 39.6%;
  font-style: normal;
  font-weight: 300;
  font-size: 22px;
  line-height: 150%;
  
  & > p {
    margin-bottom: 25px;
  }
  
  & > p:last-child {
    margin-bottom: 0;
  }
`;