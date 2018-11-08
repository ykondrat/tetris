// Core
import React, { Component } from 'react';

// Components
import { Catcher, Spinner, Nav, Main, Notification } from '../components';

export default class Lobby extends Component {

    render () {
        return (
            <Catcher>
                <Spinner />
                <Nav />
                <Main />
                <Notification />
            </Catcher>
        );
    }

}
