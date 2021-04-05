import React from "react";
import styled from "styled-components";
import roundsImage from '../static/RoundsImage.svg';

export const FooterBlock = () => {
    return (
        <ContainerBlock>
            <MainContent className={'container'}>
                <MainForm>
                    <FormTitle>Contact us to transform your listing with virtual staging</FormTitle>
                    <Form>
                        <Input placeholder={'Name'}/>
                        <Input placeholder={'Email'}/>
                        <Input placeholder={'Subject'}/>
                        <Input placeholder={'Message'}/>
                        <CheckBox>
                            <InputCheck type={'checkbox'}/>
                            <CustomCheck/>
                            I agree to processing of personal data
                        </CheckBox>
                        <Button>Submit</Button>
                    </Form>
                </MainForm>
                <MainContact>
                    <ContactTitle>Contacts</ContactTitle>
                    <TelContact>754-300-9393</TelContact>
                    <EmailContact>hello@stagingset.com</EmailContact>
                </MainContact>
                <RoundsImage/>
            </MainContent>
            <CopyText>Copyright © 2020 Staging Set | Terms & Conditions</CopyText>
        </ContainerBlock>
    );
};

const ContainerBlock = styled.div`
  padding: 100px 0 200px;
  background-color: #000;
  position: relative;
`;

const CopyText = styled.p`
  position: absolute;
  bottom: 3%;
  left: calc(50% - 171px);
  font-weight: 300;
  font-size: 16px;
  line-height: 150%;
  opacity: 0.4;
  color: #fff;
`;

const RoundsImage = styled.div`
  position: absolute;
  width: 303px;
  height: 303px;
  bottom: 0;
  right: 5%;
  background: url(${roundsImage}) no-repeat;
  background-size: contain;
`;

const MainContent = styled.div`
  display: flex;
  justify-content: flex-start;
  position: relative;
`;

const MainForm = styled.div`
  display: flex;
  flex-direction: column;
`;

const MainContact = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-self: flex-start;
  margin-left: 100px;

  & > p:first-child {
    margin-bottom: 75px;
  }

  & > p:last-child {
    margin-top: 40px;
    opacity: 0.4;
  }
`;

const FormTitle = styled.p`
  font-weight: 500;
  font-size: 25px;
  line-height: 30px;
  color: #fff;
  max-width: 65%;
  margin-bottom: 40px;
`;

const Form = styled.div`
  display: flex;
  flex-direction: column;

  & > input:last-of-type {
    padding-bottom: 63px;
  }
`;

const Input = styled.input`
  border: none;
  color: #fff;
  border-bottom: 0.5px solid #FFFFFF;
  background-color: transparent;
  padding: 11px 11px 11px 0;
  margin-bottom: 40px;
  opacity: 0.4;

  &::placeholder {
    font-weight: 300;
    font-size: 16px;
    line-height: 150%;
    color: #FAFAFA;

  }

`;

const InputCheck = styled.input`
  display: none;
`;

const CustomCheck = styled.div`
  border: 0.5px solid rgba(255, 255, 255, 0.4);
  position: relative;
  width: 27px;
  height: 27px;
  margin-right: 20px;

  ${InputCheck}:checked + &:before {
    content: '';
    position: absolute;
    width: 65%;
    height: 65%;
    top: 18%;
    left: 16.5%;
    background-color: #81C98D;
  }
`;

const CheckBox = styled.label`
  color: #fff;
  display: flex;
  cursor: pointer;
`;

const Button = styled.button`
  border: 1px solid #fff;
  background-color: #fff;
  font-weight: 300;
  font-size: 20px;
  line-height: 24px;
  color: #000;
  transition: 1s ease;
  align-self: flex-start;
  margin-top: 40px;
  padding: 16px 73px;
  cursor: pointer;

  &:hover {
    color: #fff;
    background-color: #000;
    border-color: #fff;
  }
`;

const ContactTitle = styled.p`
  font-weight: 500;
  font-size: 25px;
  line-height: 30px;
  color: #fff;
`;

const TelContact = styled.p`
  font-weight: 500;
  font-size: 22px;
  line-height: 26px;
  color: #fff;
`;

const EmailContact = styled.p`
  font-weight: 300;
  font-size: 18px;
  line-height: 150%;
  color: #fff;
`;