import React from "react";
import styled from "styled-components";
import {ReactComponent as InspiriesText} from "../static/InspiriesText.svg";

export const InspiriesBlock = () => {
    return (
        <ContainerInspiries>
            <TextContainer>
                <TextAbout>About us</TextAbout>
                <InspiriesText/>
            </TextContainer>
            <MainText>
                We are a virtual staging company that inspires buyers, transforms listings and provides first class
                service.
                <br />
                <br />
                We are specifically known for our highly realistic images and tasteful design. As a global team, we are
                always available for our clients 7 days a week to design, revise and deliver our projects.
            </MainText>
        </ContainerInspiries>
    );
};

const ContainerInspiries = styled.div`
  padding: 101px 0;
  background-color: #fff;
  display: flex;
  justify-content: space-around;
  align-items: center;
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

const MainText = styled.span`
  max-width: 39.6%;
  font-style: normal;
  font-weight: 300;
  font-size: 22px;
  line-height: 150%;
`;