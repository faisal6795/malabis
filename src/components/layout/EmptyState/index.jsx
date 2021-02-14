import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Button from '../../shared/Button';
import { StyledEmptyImage, StyledEmptyText, StyledEmptyTitle, StyledEmptyWrapper } from './EmptyState.styles';
import { LanguageContext } from '../../../containers/Language';

function EmptyState({ title, text, image, customClass }) {
    const { dictionary } = useContext(LanguageContext);

    return <StyledEmptyWrapper className={customClass}>
        <StyledEmptyImage src={image} alt={text} />
        <StyledEmptyTitle>{title}</StyledEmptyTitle>
        <StyledEmptyText>{text}</StyledEmptyText>
        <Link to='/'>
            <Button clickEvent={() => { }} text={dictionary.discoverProducts} customClass='discover-btn btn' />
        </Link>
    </StyledEmptyWrapper>
}

EmptyState.propTypes = {
    title: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    customClass: PropTypes.string,
}

export default EmptyState;