import React, {useState} from "react";
import styled, {keyframes} from "styled-components";

export const FaqBlock = () => {
    const [isClickedIcons, setIsClickedIcons] = useState<{ [key: string]: boolean }>({
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
                    <ItemOption>
                        <summary>
                            <p>
                                <span>How Many Photos Should I Stage?</span>
                            </p>
                            <Icon />
                        </summary>
                        <TextOptionDescription>
                            <span>We can have your order completed within 24-72 hours.</span>
                        </TextOptionDescription>
                    </ItemOption>
                    <ItemOption>
                        <summary>
                            <p>
                                <span>Is It Possible To Remove Existing Furniture?</span>
                            </p>
                            <Icon />
                        </summary>
                        <TextOptionDescription>
                            <span>We can have your order completed within 24-72 hours.</span>
                        </TextOptionDescription>
                    </ItemOption>
                    <ItemOption>
                        <summary>
                            <p>
                                <span>Are Revisions Allowed?</span>
                            </p>
                            <Icon />
                        </summary>
                        <TextOptionDescription>
                            <span>We can have your order completed within 24-72 hours.</span>
                        </TextOptionDescription>
                    </ItemOption>
                    <ItemOption>
                        <summary>
                            <p>
                                <span>How Long Does The Process Take?</span>
                            </p>
                            <Icon />
                        </summary>
                        <TextOptionDescription>
                            <span>We can have your order completed within 24-72 hours.</span>
                        </TextOptionDescription>
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


const ItemOption = styled.details`
  display: flex;
  justify-content: space-between;
  font-weight: 500;
  font-size: 22px;
  line-height: 26px;
  margin-bottom: 50px;
  color: #000;
  transition: 0.5s ease-in;
  flex-wrap: wrap;
  
  &[open] {
    background-color: #e9e7e7;
  }
  
  & summary {
    cursor: pointer;
    list-style: none;
    display: flex;
    justify-content: space-between;
    outline: none;
  }
  
  &[open] summary {
    background-color: #e9e7e7;
    & > div {
      transform: rotate(-405deg);
    }
  }
  
  & > p {
    display: flex;
    flex-direction: column;
  }
`;

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

const TextOptionDescription = styled.div`
  font-weight: 300;
  font-size: 22px;
  line-height: 150%;
  color: #a6a4a4;
  display: flex;
  width: 100%;

  & > span {
    animation: ${textDescription} 0.8s ease;
    animation-delay: 0.4s;
    animation-iteration-count: 1;
    animation-fill-mode: backwards;
  }
`;


const Icon = styled.div`
  width: 21px;
  height: 21px;
  position: relative;
  cursor: pointer;
  transition: 0.2s ease;

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