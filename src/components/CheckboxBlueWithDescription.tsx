import React from 'react';
import styled from 'styled-components';
import ImgChecked from '../images/checkbox-checked-blue.svg';
import ImgEmptyChecked from '../images/empty-checkbox.svg';

interface Props {
    textChildren?: string;
    handleClick: () => void;
    isChecked: boolean;
}

const StyledDiv = styled.div`
    img {
        vertical-align: text-top;
        margin-right: 9px;
    }
`;

const CheckboxBlueWithDescription = ({ textChildren, handleClick, isChecked }: Props) => {
    return (
        <StyledDiv>
            <img
                src={isChecked ? ImgChecked : ImgEmptyChecked}
                alt={'select notification'}
                onClick={() => {
                    handleClick();
                }}
            />
            {textChildren ?? ""}
        </StyledDiv>
    );
};

export default CheckboxBlueWithDescription;
