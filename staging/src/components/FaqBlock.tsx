import React, {useState} from "react";
import styled, { keyframes } from "styled-components";

export const FaqBlock = () => {
    const [isClickedIcons, setIsClickedIcons] = useState<{[key: string]: boolean}>({
        one: false,
        two: false,
        three: false,
        four: false,
        five: false,
    });

    return (
        <ContainerFaq>
            <MainContent className={'container'}>
                <TextFaq>FAQ</TextFaq>
                <OptionsContainer>
                    <ItemOption isClicked={isClickedIcons['one']}>
                        <p>
                            <span>How Many Photos Should I Stage?</span>
                            {isClickedIcons['one'] && <span>We can have your order completed within 24-72 hours.</span>}
                        </p>
                        <Icon onClick={() => setIsClickedIcons({...isClickedIcons, one: !isClickedIcons['one']})} isClicked={isClickedIcons['one']} />
                    </ItemOption>
                    <ItemOption isClicked={isClickedIcons['two']}>
                        <p>
                            <span>Is It Possible To Remove Existing Furniture?</span>
                            {isClickedIcons['two'] && <span>We can have your order completed within 24-72 hours.</span>}
                        </p>
                        <Icon onClick={() => setIsClickedIcons({...isClickedIcons, two: !isClickedIcons['two']})} isClicked={isClickedIcons['two']} />
                    </ItemOption>
                    <ItemOption isClicked={isClickedIcons['three']}>
                        <p>
                            <span>Are Revisions Allowed?</span>
                            {isClickedIcons['three'] && <span>We can have your order completed within 24-72 hours.</span>}
                        </p>
                        <Icon onClick={() => setIsClickedIcons({...isClickedIcons, three: !isClickedIcons['three']})} isClicked={isClickedIcons['three']} />
                    </ItemOption>
                    <ItemOption isClicked={isClickedIcons['four']}>
                        <p>
                            <span>How Long Does The Process Take?</span>
                            {isClickedIcons['four'] && <span>We can have your order completed within 24-72 hours.</span>}
                        </p>
                        <Icon onClick={() => setIsClickedIcons({...isClickedIcons, four: !isClickedIcons['four']})} isClicked={isClickedIcons['four']} />
                    </ItemOption>
                    <ItemOption isClicked={isClickedIcons['five']}>
                        <p>
                            <span>Пасхалка для Санька</span>
                            {isClickedIcons['five'] && <span>ТЫ ПИДОР!</span>}
                        </p>
                        <Icon onClick={() => setIsClickedIcons({...isClickedIcons, five: !isClickedIcons['five']})} isClicked={isClickedIcons['five']} />
                    </ItemOption>
                </OptionsContainer>
            </MainContent>
        </ContainerFaq>
    );
};

const ContainerFaq = styled.div`
  padding: 120px 0;
  background-color: #FAFAFA;
`;

const MainContent = styled.div`
  display: flex;
  flex-direction: column;
`;

const TextFaq = styled.p`
  font-weight: 600;
  font-size: 56px;
  line-height: 120%;
  color: #000;
  margin-bottom: 65px;
`;

const OptionsContainer = styled.div``;


const textDescription = keyframes`
  from {
    transform: scaleY(0);
  }
  
  20% {
    transform: scaleY(0.3);
  }
  
  40% {
    transform: scaleY(0.6);
  }
  
  60% {
    transform: scaleY(0.8);
  }
  
  80% {
    transform: scaleY(1);
  }
  
  to {
    transform: scaleY(1);
  }
`;

const ItemOption = styled.div<{ isClicked: boolean }>`
  display: flex;
  justify-content: space-between;
  font-weight: 500;
  font-size: 22px;
  line-height: 26px;
  margin-bottom: 50px;
  color: #000;
  transition: 0.5s ease-in;

  background-color: ${({ isClicked }) => isClicked ? '#e5e2e2' : 'inherit' };
  height: ${({ isClicked }) => isClicked ? '65px' : '26px' };
  & > p {
    display: flex;
    flex-direction: column;
  }
  & > p > span:nth-of-type(2) {
    font-weight: 300;
    font-size: 22px;
    line-height: 150%;
    color: #a6a4a4;
    animation: ${textDescription} 0.4s ease;
    animation-delay: 0.4s;
    animation-fill-mode: backwards;
    animation-iteration-count: 1;
  }
`;



const Icon = styled.div<{ isClicked: boolean }>`
  width: 21px;
  height: 21px;
  position: relative;
  cursor: pointer;
  transition: 0.2s ease;
  transform: ${({ isClicked }) => isClicked && 'rotate(-405deg)'};
  
  &:before {
    content: '';
    border-right: 2px solid #a6a4a4;
    height: 21px;
    position: absolute;
    left: 49%;
  }

  &:after {
    content: '';
    border-bottom: 2px solid #a6a4a4;
    width: 21px;
    position: absolute;
    top: 49%;
  }
  
`;