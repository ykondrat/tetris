// Core
import React, { Component } from 'react';
import { Formik, Form, Field } from 'formik';
import cx from 'classnames';
import { connect } from 'react-redux';


import Checkbox from '../Svg/Checkbox';

// Instruments
import { login } from '../../bus/forms/shapes';

// Styles
import Styles from './styles.m.css';

// Actions
import { loginAsync } from '../../bus/auth/actions';

// State and Actions to props
const mapStateToProps = (state) => ({
    isFetching: state.ui.get('isFetching')
});

@connect(mapStateToProps, { loginAsync })
export default class LoginForm extends Component {

    _submitLoginForm = (credentials) => {
        this.props.loginAsync(credentials);
    };

    render () {
        const { isFetching } = this.props;

        return (
            <Formik
                initialValues = { login.shape }
                render = { (props) => {
                    const { isValid, touched, errors } = props;

                    const centeredWrapperStyle = cx(Styles.wrapper, Styles.centered, {
                        [Styles.disabledInput]: isFetching,
                    });
                    const emailStyle = cx({
                        [Styles.invalidInput]: !isValid && touched.email && errors.email,
                    });
                    const passwordStyle = cx({
                        [Styles.invalidInput]: !isValid && touched.password && errors.password,
                    });
                    const buttonStyle = cx(Styles.loginSubmit, {
                        [Styles.disabledButton]: isFetching,
                    });
                    const buttonMessage = isFetching ? 'Loading...' : 'Sign in';

                    return (
                        <Form className = { Styles.form }>
                            <div className = { centeredWrapperStyle }>
                                <div>
                                    <Field
                                        className = { emailStyle }
                                        disabled = { isFetching }
                                        name = 'email'
                                        placeholder = 'E-mail'
                                        type = 'email'
                                    />
                                    <Field
                                        className = { passwordStyle }
                                        disabled = { isFetching }
                                        name = 'password'
                                        placeholder = 'Password'
                                        type = 'password'
                                    />
                                    <label className = { Styles.rememberMe }>
                                        <Checkbox
                                            checked = { props.values.remember }
                                            color1 = '#4267b2'
                                            color2 = '#fff'
                                        />
                                        <Field checked = { props.values.remember } name = 'remember' type = 'checkbox' />
                                        Remember me
                                    </label>
                                    <button className = { buttonStyle } disabled = { isFetching } type = 'submit'>
                                        { buttonMessage }
                                    </button>
                                </div>
                            </div>
                        </Form>
                    );
                } }
                validationSchema = { login.schema }
                onSubmit = { this._submitLoginForm }
            />
        );
    }
}
