import React, { useContext, useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import Input from '../../shared/Input';
import Button from '../../shared/Button';
import Textarea from '../../shared/Textarea';
import { StyledPopupClose, StyledPopupInputContainer, StyledPopupOverlay, StyledPopupTitle, StyledPopupWrapper } from './Popup.styles';
import { ACTION } from '../../../constants';
import { LanguageContext } from '../../../containers/Language';

function Popup({ closePopup, confirmOrder }) {

    useEffect(() => { enableDisableButton() }, []);

    const { firstName, lastName, phone, address } = useSelector(state => state.userData),
        dispatch = useDispatch(),
        popupRef = useRef(),
        { dictionary } = useContext(LanguageContext),
        [isDisable, setDisable] = useState(true),
        savedFirstname = { defaultValue: firstName },
        savedLastname = { defaultValue: lastName },
        savedPhone = { defaultValue: phone, type: 'number' },
        savedAddress = { defaultValue: address };

    function saveDetails(text, label) {
        const dispatchType = (label) => {
            switch (label) {
                case dictionary.inputFirstname: return ACTION.SAVE_FIRST_NAME;
                case dictionary.inputLastname: return ACTION.SAVE_LAST_NAME;
                case dictionary.inputPhone: return ACTION.SAVE_PHONE;
                case dictionary.inputAddress: return ACTION.SAVE_ADDRESS;
                default: return;
            }
        }
        dispatch({
            type: dispatchType(label),
            value: text
        });
        enableDisableButton();
    }

    function enableDisableButton() {
        const inputElements = Array.from(popupRef.current.querySelectorAll('input, textarea'))
        inputElements.every(item => item.value.trim() !== '') ? setDisable(false) : setDisable(true);
    }

    return <StyledPopupOverlay ref={popupRef}>
        <StyledPopupWrapper>
            <StyledPopupTitle>{dictionary.inputTitle}</StyledPopupTitle>
            <StyledPopupClose onClick={closePopup} />
            <StyledPopupInputContainer>
                <Input labelText={dictionary.inputFirstname} saveText={saveDetails} attrs={savedFirstname} customClass='input-box input-name' />
                <Input labelText={dictionary.inputLastname} saveText={saveDetails} attrs={savedLastname} customClass='input-box input-name' />
                <Input labelText={dictionary.inputPhone} saveText={saveDetails} attrs={savedPhone} customClass='input-box' />
                <Textarea labelText={dictionary.inputAddress} saveText={saveDetails} attrs={savedAddress} />
            </StyledPopupInputContainer>
            <Button clickEvent={confirmOrder} text={dictionary.confirmOrder} customClass='btn' isDisable={isDisable} />
        </StyledPopupWrapper>
    </StyledPopupOverlay>;
}

Popup.propTypes = {
    closePopup: PropTypes.func.isRequired,
    confirmOrder: PropTypes.func.isRequired,
}

export default Popup;