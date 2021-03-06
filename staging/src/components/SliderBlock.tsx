import React from "react";
import styled from 'styled-components';
import roomAfter from '../static/RoomAfter.svg';
import roomBefore from '../static/RoomBefore.svg';
import linesGroup from '../static/LinesGroup.svg';

export const SliderBlock = () => {
    return (
        <ContainerSlider className={'container'}>
            <Slider>
                <ImageDiv src={roomBefore} />
                <ImageDiv src={roomAfter} />
            </Slider>
        </ContainerSlider>
    );
};

const ContainerSlider = styled.div`
  padding: 100px 0;
  height: 41vw;
  display: flex;
  justify-content: center;
  align-items: center;
  box-sizing: content-box;
`;

const ImageDiv = styled.div<{ src: string }>`
  width: 49.7%;
  background: url(${({ src }) => src}) no-repeat;
  background-size: cover;
`;

const Slider = styled.div`
  height: inherit; 
  display: flex;
  position: relative;
  justify-content: space-between;
  flex-basis: 100%;
  
  & > ${ImageDiv}:first-child {
    &:before {
      content: '';
      position: absolute;
      background: url(${linesGroup}) no-repeat;
      bottom: -13%;
      left: -15%;
      background-size: contain;
      width: 296px;
      height: 116px;
    }
  }
  @media(max-width: 1250px) {
    & > ${ImageDiv}:first-child {
      &:before {
        content: '';
        display: none;
      } 
    }
  }
`;