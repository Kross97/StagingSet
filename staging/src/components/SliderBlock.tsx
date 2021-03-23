import React from "react";
import styled from 'styled-components';
import roomAfter from '../static/RoomAfter.svg';
import roomBefore from '../static/RoomBefore.svg';
import linesGroup from '../static/LinesGroup.svg';

export const SliderBlock = () => {
    return (
        <ContainerSlider>
            <Slider>
                <ImageDiv src={roomBefore} />
                <ImageDiv src={roomAfter} />
            </Slider>
        </ContainerSlider>
    );
};

const ContainerSlider = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ImageDiv = styled.div<{ src: string }>`
  width: 50%;
  height: 300px;
  background-size: cover;
  background: url(${({ src }) => src}) no-repeat;
`;

const Slider = styled.div`
  display: flex;
  width: 100%;
  
  &:before {
    content: '';
    position: absolute;
    background: url(${linesGroup}) no-repeat;
    bottom: 0;
    left: 0;
    background-size: cover;
    width: 300px;
    height: 116px;
  }
`;