import React from 'react';
import PropTypes from 'prop-types';
import { StyledToggleWrapper, StyledToggleInput, StyledToggleLabel, StyledToggleText } from './ToggleBtn.styles';

const id = 'toggle-' + +new Date();

function ToggleBtn({ leftText, rightText, isRetail, changeEvent, customClass }) {
    return <StyledToggleWrapper>
        <StyledToggleText>{leftText}</StyledToggleText>
        <StyledToggleInput id={id} onChange={changeEvent} className={customClass} checked={isRetail} />
        <StyledToggleLabel htmlFor={id}></StyledToggleLabel>
        <StyledToggleText>{rightText}</StyledToggleText>
    </StyledToggleWrapper>
}

ToggleBtn.propTypes = {
    leftText: PropTypes.string.isRequired,
    rightText: PropTypes.string.isRequired,
    isRetail: PropTypes.bool.isRequired,
    changeEvent: PropTypes.func.isRequired,
    customClass: PropTypes.string,
}

export default ToggleBtn;