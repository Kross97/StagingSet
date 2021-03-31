import React from "react";
import styled from 'styled-components';
import digital1 from '../static/digital1.jpg';
import digital2 from '../static/digital2.jpg';

export const DigitalHome = () => {
  return (
    <ContainerMain>
      <MainContent>
       <ImagesDigital>
           <ImageItem src={digital2} />
           <ImageItem src={digital1} />
       </ImagesDigital>
          <TextContent>
               <p>The benefits of digital</p>
               <p>home staging are</p>
               <p>tremendous.</p>
               <p>In a fast paced industry, time is saved, virtual staging can take between 24-72 hours to be completed. When costs of physical staging are at an all time high, virtual staging is an excellent alternative, typically saving 90% of the costs.</p>
          </TextContent>
      </MainContent>
    </ContainerMain>
  );
};

const ContainerMain = styled.div`
 padding: 100px 0;
`;

const MainContent = styled.div`
 display: flex;
 justify-content: space-between;
  align-items: center;
 padding-right: 200px; 
`;

const ImagesDigital = styled.div`
 height: 41vw;
  flex-grow: 1;
  display: flex;
  margin-right: 10%;
  justify-content: space-between;
`;

const ImageItem = styled.div<{ src: string }>`
 background: url(${({ src }) => src }) no-repeat left center;
 background-size: cover; 
 width: 49.8%;
 height: inherit; 
`;

const TextContent = styled.div`
 display: flex;
 flex-direction: column;
  font-weight: 600;
  font-size: 56px;
  line-height: 120%;
  color: #000;
  max-width: 37%;
  
  & > p:last-child {
    font-weight: 300;
    font-size: 22px;
    line-height: 150%;
    margin-top: 40px;
  }
`;