import React from "react";
import styled from 'styled-components';
import roomAfter from '../static/RoomAfter.svg';
import roomBefore from '../static/RoomBefore.svg';
import linesGroup from '../static/LinesGroup.svg';

export const SliderBlock = () => {
    return (
        <ContainerSlider>
            <Slider/>
        </ContainerSlider>
    );
};

const ContainerSlider = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Slider = styled.div`
  position: relative;
  flex-basis: 75%;
  height: 48%;
  background: url(${roomBefore}) no-repeat 0%, url(${roomAfter}) no-repeat 100%;
  background-size: 49.8%, 49.8%;
  
  &:before {
    content: '';
    position: absolute;
    background: url(${linesGroup}) no-repeat;
    bottom: 0;
    left: 0;
    background-size: cover;
    width: 18%;
    height: 14%;
  }
`;