// Core
import React, { Component } from 'react';

// Components
import { Catcher, Spinner, Nav, Rank, Notification } from '../components';

export default class Lobby extends Component {

    render () {
        return (
            <Catcher>
                <Spinner />
                <Nav />
                <Rank />
                <Notification />
            </Catcher>
        );
    }

}
