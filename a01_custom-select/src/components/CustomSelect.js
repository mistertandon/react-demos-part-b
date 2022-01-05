import React, { useEffect, useRef, useState } from 'react';
import "./CustomSelect.css";

const CustomSelect = ({ selectOptions, defaultOption, fieldErrorStatus, setFieldErrorStatus }) => {

    const searchVal = useRef();
    const [optionsContainerDisplayStatus, setOptionsContainerDisplayStatus] = useState(true);
    const [optionContainerWidth, setOptionContainerWidth] = useState('auto');
    // const [optionsContainerDisplayStatus, setOptionsContainerDisplayStatus] = useState(false);

    const optionContainerRef = useRef(null);

    useEffect(() => {

        setTimeout(() => {
            setOptionContainerWidth(`${optionContainerRef.current.offsetWidth}px`);
        }, 0);
    }, [selectOptions]);

    const handleSearchVal = () => {
        console.log('searchVal', searchVal.current.value);
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
        // fieldErrorStatus && setFieldErrorStatus(false);
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
                    onFocus={handleDisplayOptionsEvent}
                    onBlur={handleHideOptionsEvent}
                >
                    <div className='caca-child-b--csc'>
                        {defaultOption.title}
                    </div>

                    <span className='caca-child-a--csc'>

                    </span>

                </div>

                <div className={`ca-child-b--csc ${optionsContainerDisplayStatus === true ? 'display-options' : 'hide-options'}`}
                    ref={optionContainerRef}
                >
                    <div className='cacb-child-a--csc'>
                        <input type='text'
                            ref={searchVal}
                            onChange={handleSearchVal}
                            className='cacb-child-a--csc'
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