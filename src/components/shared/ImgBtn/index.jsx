import React from 'react';
import PropTypes from 'prop-types';
import { StyledIcon, StyledWrapper } from './ImgBtn.styles';

function ImgBtn({ imgUrl, isDisable, clickEvent, customClass }) {
    return <StyledWrapper onClick={clickEvent} disabled={isDisable} className={customClass}>
        <StyledIcon imgUrl={imgUrl} />
    </StyledWrapper>
}

ImgBtn.propTypes = {
    imgUrl: PropTypes.string.isRequired,
    isDisable: PropTypes.bool,
    clickEvent: PropTypes.func.isRequired,
    customClass: PropTypes.string,
}

export default ImgBtn;