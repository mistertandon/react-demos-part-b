import React, { useState, useEffect, useContext } from 'react';
import './login.scss';

import { makeRequest } from '../../api/request';
import { APP_END_POINTS, HTTP_METHODS } from '../../helpers/constants';
import AuthContext from '../../context/AuthProvider';


const Login = () => {

    const { LOGIN_URL } = APP_END_POINTS;
    const { POST } = HTTP_METHODS;
    const { setAuth } = useContext(AuthContext);


    const [formFields, setFormFields] = useState({
        email: '',
        password: ''
    });

    const [fieldErrors, setFieldErrors] = useState({});

    const [loginAttemptStatus, setLoginAttemptStatus] = useState(undefined);

    const handleFormSubmit = async (event) => {

        event.preventDefault();
        const errorRef = await validateFormFields();

        if (errorRef.status) {
            setFieldErrors(errorRef.errors);
            return;
        }

        const loginResponse = await makeRequest(
            POST,
            LOGIN_URL,
            {
                ...formFields
            },
        );

        const token = loginResponse?.data?.Token;
        setAuth({ token });
        if (!token) {
            setLoginAttemptStatus(false);

        }
        console.log('token', token);

    }

    const validateFormFields = async () => {

        let errorObj = {};

        if (!formFields.email) {
            errorObj['email'] = 'Please enter email'
        }

        if (!formFields.password) {
            errorObj['password'] = 'Please enter password'
        }

        return {
            status: Object.keys(errorObj).length !== 0,
            errors: errorObj
        }

    }

    const handleInput = (event) => {
        setFormFields({ ...formFields, [event.target.name]: event.target.value })
    }

    return (
        <div className='login--container'>
            <form onSubmit={handleFormSubmit}>
                {
                    loginAttemptStatus === false &&
                    <div className='field--cont'>
                        Invalid username or password
                    </div>
                }

                <div className='field--cont'>
                    <label>Email</label>
                    <input type='text'
                        name='email'
                        value={formFields.email}
                        onChange={handleInput}
                    />
                    {
                        fieldErrors.email && <p>{fieldErrors.email}</p>
                    }
                </div>
                <div className='field--cont'>
                    <label>Password</label>
                    <input type='text'
                        name='password'
                        value={formFields.password}
                        onChange={handleInput}
                    />
                    {
                        fieldErrors.password && <p>{fieldErrors.password}</p>
                    }
                </div>
                <div className='field--cont'>
                    <button onClick={handleFormSubmit}>
                        Login
                    </button>
                </div>

            </form>
        </div>
    )
}

export default Login;