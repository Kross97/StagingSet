import React from "react";
import styled from "styled-components";
import {ReactComponent as ClockIcon} from "../static/ClockIcon.svg";
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
                        <ClockIcon/>
                        <DescriptionFeature>
                            <DescriptionTitle>Prompt turnaround time</DescriptionTitle>
                            <DescriptionText>In under 48 hours you will have a virtually staged image.</DescriptionText>
                        </DescriptionFeature>
                    </ItemFeature>
                    <ItemFeature>
                        <StrelkaIcon />
                        <DescriptionFeature>
                            <DescriptionTitle>Free Revisions</DescriptionTitle>
                            <DescriptionText>We can grant 2 revisions free of charge. Don’t like a pillow we placed? We will change it. Want more artwork? We will add it.</DescriptionText>
                        </DescriptionFeature>
                    </ItemFeature>
                    <ItemFeature>
                        <CallIcon />
                        <DescriptionFeature>
                            <DescriptionTitle>Personalized Support</DescriptionTitle>
                            <DescriptionText>At StagingSet, you will not be sitting on hold and get disconnected. You will have a dedicated client associate to work with you.</DescriptionText>
                        </DescriptionFeature>
                    </ItemFeature>
                    <ItemFeature>
                        <SmileIcon />
                        <DescriptionFeature>
                            <DescriptionTitle>Happiness Guaranteed</DescriptionTitle>
                            <DescriptionText>After revising it, and you are not 100% satisfied, we will not bill you. Satisfaction is so important to us.</DescriptionText>
                        </DescriptionFeature>
                    </ItemFeature>
                </FeaturesContainer>
            </ContainerContent>
        </ContainerFeatures>
    );
};

const ContainerFeatures = styled.div`
  padding: 110px 0;
  background-color: #95D6A4;
  clip-path: polygon(45% 8%, 70% 9%, 100% 0, 100% 100%, 68% 100%, 32% 100%, 0 100%, 0 0);
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
  flex-wrap: wrap;
  justify-content: space-between;
  margin-top: 73px;
`;

const ItemFeature = styled.div`
  display: flex;
  flex-basis: 42%;
  margin-bottom: 47px;
`;

const DescriptionFeature = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 53%;
  margin-left: 60px;
`;

const DescriptionTitle = styled.p`
  font-weight: 500;
  font-size: 25px;
  line-height: 30px;
  margin-bottom: 20px;
`;

const DescriptionText = styled.p`
  font-weight: 300;
  font-size: 18px;
  line-height: 150%;
`;