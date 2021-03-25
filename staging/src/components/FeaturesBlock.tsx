import React from "react";
import styled from "styled-components";
import {ReactComponent as ClockIcon} from "../static/ClokIcon.svg";
import {ReactComponent as CallIcon} from "../static/CallIcon.svg";
import {ReactComponent as StrelkaIcon} from "../static/Strelka.svg";
import {ReactComponent as SmileIcon} from "../static/Smile.svg";

export const FeaturesBlock = () => {
  return (
    <ContainerFeatures>
        <ContainerContent className={'container'}>
           <TextLabel>
               <span>Our</span>
               <span>features</span>
           </TextLabel>
            <FeaturesContainer>
                <ItemFeature>
                    <ClockIcon />
                    <DescriptionFeature>
                        <DescriptionTitle>Prompt turnaround time</DescriptionTitle>
                        <DescriptionText>In under 48 hours you will have a virtually staged image.</DescriptionText>
                    </DescriptionFeature>
                </ItemFeature>
            </FeaturesContainer>
        </ContainerContent>
    </ContainerFeatures>
  );
};

const ContainerFeatures = styled.div`
  padding: 110px 215px 210px;
 background-color: #95D6A4;
`;

const ContainerContent = styled.div``;

const TextLabel = styled.div`
  font-weight: 600;
  font-size: 56px;
  line-height: 120%;
  letter-spacing: 0.01em;
  color: #021C11;
  
  & > span:last-child {
    color: #fff;
    margin-left: 9px;
  }
`;

const FeaturesContainer = styled.div`
 display: flex;
`;

const ItemFeature = styled.div`
 display: flex;
 justify-content: space-between; 
`;

const DescriptionFeature = styled.div`
  display: flex;
  flex-direction: column;
`;

const DescriptionTitle = styled.p`
  font-weight: 500;
  font-size: 25px;
  line-height: 30px;
`;

const DescriptionText = styled.p`
  font-weight: 300;
  font-size: 18px;
  line-height: 150%;
`;