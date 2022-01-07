import React, { useEffect, useRef, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown, faAngleUp } from '@fortawesome/free-solid-svg-icons';

import "./CustomSelect.css";

const CustomSelect = ({ selectOptions, defaultOption, fieldErrorStatus, setFieldErrorStatus }) => {

    const searchVal = useRef();

    const [optionContainerWidth, setOptionContainerWidth] = useState('auto');
    // const [optionsContainerDisplayStatus, setOptionsContainerDisplayStatus] = useState(true);
    const [optionsContainerDisplayStatus, setOptionsContainerDisplayStatus] = useState(false);

    const optionContainerRef = useRef(null);

    useEffect(() => {
        setOptionContainerWidth(`${optionContainerRef.current.offsetWidth}px`);
    }, [selectOptions]);

    const handleSearchVal = () => {
        console.log('searchVal', searchVal.current.value);
    }


    const handleToggleOptionsEvent = () => {
        console.log('handleToggleOptionsEvent');
        optionsContainerDisplayStatus === true && setOptionsContainerDisplayStatus(false);
        optionsContainerDisplayStatus === false && setOptionsContainerDisplayStatus(true);

    }

    const handleDisplayOptionsEvent = () => {
        console.log('handleDisplayOptionsEvent');
        setOptionsContainerDisplayStatus(true);
    }

    const handleHideOptionsEvent = () => {
        console.log('handleHideOptionsEvent');
        // setOptionsContainerDisplayStatus(false);
    }

    const handleOptionSelection = (optn) => {
        console.log('handleOptionSelection', optn);
        fieldErrorStatus && setFieldErrorStatus(false);
        handleHideOptionsEvent();
    }

    const handleDefaultOptionSelection = () => {
        console.log('handleDefaultOptionSelection');
        setFieldErrorStatus(true);
    }

    return (
        <div className={`custom-select--cont ${fieldErrorStatus === true ? 'select-error' : 'nope'}`}
            style={{ width: optionContainerWidth }}
        >
            <div className='child-a--csc'>
                <div className='ca-child-a--csc'
                    tabIndex='1'
                    onClick={handleToggleOptionsEvent}
                    onBlur={handleHideOptionsEvent}
                >
                    <div className='caca-child-a--csc'>
                        {defaultOption.title}
                    </div>
                    {
                        optionsContainerDisplayStatus === true
                        && (
                            <div className='caca-child-c--csc'>
                                <FontAwesomeIcon icon={faAngleUp} className='border-none--app-gl' />
                            </div>
                        )
                    }
                    {
                        optionsContainerDisplayStatus === false
                        && (

                            <div className='caca-child-b--csc'>
                                <FontAwesomeIcon icon={faAngleDown} className='border-none--app-gl' />
                            </div>
                        )
                    }
                </div>

                <div className={`ca-child-b--csc ${optionsContainerDisplayStatus === true ? 'display-options' : 'hide-options'}`}
                    ref={optionContainerRef}
                >
                    <div className='cacb-child-a--csc'>
                        <input type='text'
                            ref={searchVal}
                            onFocus={handleDisplayOptionsEvent}
                            onBlur={handleDisplayOptionsEvent}
                            onChange={handleSearchVal}
                            className='cacbca-child-a--csc'
                        />
                    </div>
                    <div className='cacb-child-b--csc'>
                        <div className='cacbcb-child-a--csc option-child--scs default_option'
                            key='default_option'
                            onClick={() => {
                                handleDefaultOptionSelection();
                            }}
                        >
                            Select Option
                        </div>
                        {
                            selectOptions.map(optn => (
                                <div className='option-child--scs'
                                    key={optn.value}
                                    onClick={() => {
                                        handleOptionSelection(optn);
                                    }}>
                                    {optn.value}
                                </div>
                            ))
                        }
                    </div>

                </div>
            </div>

        </div>)
}

export default CustomSelect;