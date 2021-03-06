// Core
import React, { Component } from 'react';
import { Formik, Form, Field } from 'formik';
import cx from 'classnames';
import { connect } from 'react-redux';

// Instruments
import Styles from './styles.m.css';
import { signup } from '../../bus/forms/shapes';

import { signupAsync } from '../../bus/auth/actions';

const mapStateToProps = (state) => ({
    isFetching: state.ui.get('isFetching')
});

@connect(mapStateToProps, { signupAsync })
export default class SignupForm extends Component {

    _submitSignupForm = (user) => {
        this.props.signupAsync(user);
    };

    render () {
        const { isFetching } = this.props;

        return (
            <Formik
                initialValues = { signup.shape }
                render = { (props) => {
                    const { isValid, touched, errors } = props;

                    const centeredWrapperStyle = cx(Styles.wrapper, Styles.centered, {
                        [Styles.disabledInput]: isFetching,
                    });
                    const firstNameStyle = cx({
                        [Styles.invalidInput]: !isValid && touched.firstName && errors.firstName,
                    });
                    const lastNameStyle = cx({
                        [Styles.invalidInput]: !isValid && touched.lastName && errors.lastName,
                    });
                    const nickNameStyle = cx({
                        [Styles.invalidInput]: !isValid && touched.nickName && errors.nickName,
                    });
                    const emailStyle = cx({
                        [Styles.invalidInput]: !isValid && touched.email && errors.email,
                    });
                    const passwordStyle = cx({
                        [Styles.invalidInput]: !isValid && touched.password && errors.password,
                    });
                    const inviteStyle = cx({
                        [Styles.invalidInput]: !isValid && touched.invite && errors.invite,
                    });
                    const buttonStyle = cx(Styles.signupSubmit, {
                        [Styles.disabledButton]: isFetching,
                    });
                    const buttonMessage = isFetching ? 'Loading...' : 'Sign up ✓';

                    return (
                        <Form className = { Styles.form }>
                            <div className = { centeredWrapperStyle }>
                                <div>
                                    <Field
                                        className = { firstNameStyle }
                                        disabled = { isFetching }
                                        name = 'firstName'
                                        placeholder = 'First name'
                                        type = 'text'
                                    />
                                    <Field
                                        className = { lastNameStyle }
                                        disabled = { isFetching }
                                        name = 'lastName'
                                        placeholder = 'Last name'
                                        type = 'text'
                                    />
                                    <Field
                                        className = { nickNameStyle }
                                        disabled = { isFetching }
                                        name = 'nickName'
                                        placeholder = 'nickname'
                                        type = 'text'
                                    />
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
                                    <button className = { buttonStyle } disabled = { isFetching } type = 'submit'>
                                        { buttonMessage }
                                    </button>
                                </div>
                            </div>
                        </Form>
                    );
                } }
                validationSchema = { signup.schema }
                onSubmit = { this._submitSignupForm }
            />
        );
    }
}
