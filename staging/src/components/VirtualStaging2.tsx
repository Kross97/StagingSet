import React from "react";
import styled from "styled-components";
import virtualStaging from '../static/VirtualStaging.jpg';

export const VirtualStaging2 = () => {
  return (
      <ContainerVirtual>
        <MainContent>
          <TextBlock>
              <p>Virtual staging is becoming a popular alternative to physical staging.</p>
              <p>77% of real estate agents believe that staging benefits the sale of the property (NAR 2019) and staged homes spend 86% less time on the market compared to vacant properties (RESA).</p>
          </TextBlock>
            <ImageBlock />
        </MainContent>
      </ContainerVirtual>
  );
};

const ContainerVirtual = styled.div`
 padding: 100px 0;
`;

const MainContent = styled.div`
  display: flex;
  justify-content: space-between;
  max-width: 100%;
  margin-left: 15%;
  align-items: center;
`;

const TextBlock = styled.div`
 display: flex;
 flex-direction: column;
  font-weight: 300;
  font-size: 22px;
  line-height: 150%;
  color: #000;
  max-width: 43%;
  & > p:first-child {
    font-weight: 600;
    font-size: 56px;
    line-height: 120%;
    margin-bottom: 40px;
  }
`;

const ImageBlock = styled.div`
 height: 41vw; 
 background: url(${virtualStaging}) no-repeat center;
  flex-grow: 1;
  margin-left: 90px;
  background-size: contain;
`;