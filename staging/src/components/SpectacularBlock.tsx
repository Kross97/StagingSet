import React from "react";
import styled from 'styled-components';
import spectImage from '../static/SpectacularBack.jpg';
import logoThree from '../static/SpecLogo3.svg';
import airbnb from '../static/AirbnbLogo.svg';
import fedex from '../static/FedExLogo.svg';
import microsoftLogo from '../static/MicrosoftLogo.svg';

export const SrectacularBlock = () => {
    return (
        <SpectacularContainer>
            <MainContent className={'container'}>
                <MainText>
                    <p>
                        <span style={{ marginRight: '15px'}} className={'white'}>What</span>
                        <span className={'green'}>our spectacular</span>
                    </p>
                    <p>
                        <span style={{ marginRight: '15px'}} className={'green'}>clients</span>
                        <span className={'white'}>have to say</span>
                    </p>
                    <p>About us</p>
                </MainText>
                <TextDescriptionContainer>
                    <TextDescription>
                        “My first venture into Virtual Staging was made so easy by Staging Set. I didn’t know what to expect, and I was so happy with StagingSet’s great communication and willingness to tweak the furniture options to my satisfaction! The pricing is very good too. Overall a good experience that I plan to use for my marketing going forward.”
                    </TextDescription>
                    <Author>
                        Joyce Almodova, Honolulu, HI
                    </Author>
                    <Divider />
                    <ContainersLogos>
                        <LogoItem src={airbnb} />
                        <LogoItem src={logoThree} />
                        <LogoItem src={fedex} />
                        <LogoItem src={microsoftLogo} />
                    </ContainersLogos>
                </TextDescriptionContainer>
            </MainContent>
        </SpectacularContainer>
    );
};

const SpectacularContainer = styled.div`
  padding: 100px 0;
  background: rgba(0, 0, 0, 0.9) url(${spectImage}) no-repeat;
  background-size: cover;
  background-position: center;
`;

const MainContent = styled.div`
  display: flex;
  justify-content: space-between;
`;

const MainText = styled.div`
  display: flex;
  flex-direction: column;
  font-weight: 600;
  font-size: 56px;
  line-height: 120%;
  color: #fff;

  & .white {
    color: #fff;
  }

  & .green {
    color: #81C98D;
  }
`;

const TextDescriptionContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex-basis: 50%;
  color: #fff;
  
`;

const TextDescription = styled.p`
  font-weight: 300;
  font-size: 18px;
  line-height: 150%;
  margin-bottom: 40px;
`;

const Author = styled.p`
  font-weight: 500;
  font-size: 25px;
  line-height: 30px;
`;

const Divider = styled.div`
  border-top: 1px solid #FFFFFF;
  margin-top: 80px;
  margin-bottom: 40px;
`;

const ContainersLogos = styled.div`
 display: flex;
 flex-wrap: wrap; 
`;

const LogoItem = styled.div<{ src: string }>`
 flex-basis: 50%;
  margin-bottom: 40px;
  height: 64px;
 background: url(${({ src }) => src}) no-repeat;
  background-size: contain;
`;