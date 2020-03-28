import React from 'react';
import styled from 'styled-components';

const fieldComponent = ({input, label, type, meta: {touched, error, warning}}) => (
    <InputWrap>
        <Label>{label}</Label>
            <Input {...input} placeholder={label} type={type}/>
            {touched && ((error && <ErrorField>{error}</ErrorField>) || (warning &&
                <WarningField>{warning}</WarningField>))}
    </InputWrap>
);
const InputWrap = styled.div`
    width: 100%;
    margin-bottom: 20px;
`;
const Label = styled.label`
    font-size: 16px;
    color: #dedede;
    margin-bottom: 4px;
`;
const Input = styled.input`
    width: 100%;
    height: 48px;
    line-height: 48px;
    color: black;
    font-size: 26px;
    padding-left: 12px;
    margin-top: 2px;
`;
const ErrorField = styled.div`
    color: red;
    font-size: 12px;
    text-align: left;
`;
const WarningField = styled.div`
    color: orange;
    font-size: 12px;
    text-align: left;
`;
export default fieldComponent;