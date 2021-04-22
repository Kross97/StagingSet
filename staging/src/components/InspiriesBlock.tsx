import React, {useState} from "react";
import styled from "styled-components";
import {ReactComponent as InspiriesText} from "../static/InspiriesText.svg";

const myWorker = new Worker('/worker.js', {
    type: 'module',
});

const myWorker2 = new Worker('/worker2.js', {
    type: 'module',
});

const myWorker3 = new Worker('/worker3.js', {
    type: 'module',
});

const myWorker4 = new Worker('/worker4.js', {
    type: 'module',
});

export const InspiriesBlock = () => {
    const [text, setText] = useState('');
    const [text2, setText2] = useState('');
    const [text3, setText3] = useState('');
    const [text4, setText4] = useState('');

    const changed = (e: any) => {
        myWorker.postMessage([e.target.value]);
    }

    const changed2 = (e: any) => {
        myWorker2.postMessage([e.target.value]);
    }
    const changed3 = (e: any) => {
        myWorker3.postMessage([e.target.value]);
    }
    const changed4 = (e: any) => {
        myWorker4.postMessage([e.target.value]);
    }

    myWorker.onmessage = function(e) {
        setText(e.data + '#1');
        console.log('Message received from worker 1', e.data);
    }

    myWorker2.onmessage = function(e) {
        setText2(e.data + '#2');
        console.log('Message received from worker 2', e.data);
    }

    myWorker3.onmessage = function(e) {
        setText3(e.data + '#3');
        console.log('Message received from worker 3', e.data);
    }

    myWorker4.onmessage = function(e) {
        setText4(e.data + '#4');
        console.log('Message received from worker 4', e.data);
    }

    return (
        <ContainerInspiries className={'container'}>
            {/*<input onChange={changed} type={"text"} name={"first"}/>
            <input onChange={changed2} type={"text"} name={"first"}/>
            <input onChange={changed3} type={"text"} name={"first"}/>
            <input onChange={changed4} type={"text"} name={"first"}/>*/}
            <TextContainer>
                <TextAbout>About us</TextAbout>
                <InspiriesTextContainer>
                    {/*<p>{text}</p>
                    <p>{text2}</p>
                    <p>{text3}</p>
                    <p>{text4}</p>*/}
                    <p>Inspires buyers</p>
                </InspiriesTextContainer>
            </TextContainer>
            <MainText>
                <p>We are a virtual staging company that inspires buyers, transforms listings and provides first class
                service.</p>
                <p>
                    We are specifically known for our highly realistic images and tasteful design. As a global team, we are
                    always available for our clients 7 days a week to design, revise and deliver our projects.
                </p>
            </MainText>
        </ContainerInspiries>
    );
};

const ContainerInspiries = styled.div`
  padding: 100px 0;
  background-color: #fff;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  @media(max-width: 900px) {
    flex-direction: column;
    align-items: center;
  }
`;

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  @media(max-width: 1000px) {
    align-items: center;
  }
`;

const TextAbout = styled.span`
  font-style: normal;
  font-weight: 300;
  font-size: 25px;
  line-height: 30px;
  margin-bottom: 20px;
`;

const InspiriesTextContainer = styled.div`
  font-weight: 600;
  font-size: 56px;
  line-height: 120%;
  color: #000;

  & > p:last-child {
   color: #81C98D;
  }
  @media(max-width: 1000px) {
    text-align: center;
    margin-bottom: 15%;
  }
`;

const MainText = styled.span`
  max-width: 39.6%;
  font-style: normal;
  font-weight: 300;
  font-size: 22px;
  line-height: 150%;
  
  & > p {
    margin-bottom: 25px;
  }
  
  & > p:last-child {
    margin-bottom: 0;
  }
`;