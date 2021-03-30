import React from "react";
import styled from "styled-components";

export const OfferingBlock = () => {
    return (
        <ContainerOffering>
            <MainContent className={'container'}>
                <HeaderBlock>
                    <TextHeader>
                        <p>Choose this offering</p>
                        <p>
                            <span>that works</span>
                            <span>best for you</span>
                        </p>
                    </TextHeader>
                </HeaderBlock>
                <BodyMain>
                    <Card>
                        <HeaderCard>
                            <span>per image</span>
                            <span>$59</span>
                        </HeaderCard>
                        <Divider/>
                        <ListItemsCard>
                            <ItemList>100% satisfaction guarantee</ItemList>
                            <ItemList>Responsive support</ItemList>
                            <ItemList>Top quality virtual staging</ItemList>
                            <ItemList>Under 72 hour turnaround time</ItemList>
                            <ItemList>2 Revisions</ItemList>
                        </ListItemsCard>
                        <ButtonCard>Contact us</ButtonCard>
                    </Card>
                </BodyMain>
            </MainContent>
        </ContainerOffering>
    );
};

const ContainerOffering = styled.div`
  padding: 100px 0;
`;

const MainContent = styled.div`
  display: flex;
  flex-direction: column;
`;

const HeaderBlock = styled.div`
  display: flex;
  justify-content: flex-start;
`;

const TextHeader = styled.div`
  font-weight: 600;
  font-size: 56px;
  line-height: 120%;
  color: #000;

  & > p > span:last-child {
    color: #81C98D;
  }
`;

const BodyMain = styled.div`
  display: flex;
  justify-content: center;
`;

const Card = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid rgba(0,0,0,0.4);
  padding: 20px 0 40px;
  flex-basis: 535px;
`;

const HeaderCard = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 43px;
  color: #000;
  & > span:first-child {
    font-weight: 300;
    font-size: 22px;
    line-height: 150%;
  }
  
  & > span:last-child {
    font-weight: 500;
    font-size: 70px;
    line-height: 110%;
  }
  
`;

const Divider = styled.div`
 border-top: 1px solid rgba(0,0,0,0.4);
  margin-top: 20px;
  margin-bottom: 40px;
`;

const ListItemsCard = styled.div`
 display: flex;
 flex-direction: column;
  padding: 0 63px; 
`;

const ItemList = styled.span`
  font-weight: 300;
  font-size: 22px;
  line-height: 150%;
  margin-bottom: 20px;
  ${ListItemsCard} > &:last-child {
    margin-bottom: 50px;
  }
`;

const ButtonCard = styled.button`
 cursor: pointer;
  font-weight: 600;
  font-size: 18px;
  line-height: 110%; 
  color: #fff;
  background-color: #81C98D;
  border: none;
  padding: 17px 51px;
  align-self: center;
`;