// Core
import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom'

// Instruments
import { book } from './book';

// Components
import { Lobby, Profile, NewPassword, Rank } from '../pages';

// Socket
import { socket } from '../init/socket';

export default class Private extends Component {

    componentDidMount () {
        this.props.listenPosts();
    }

    componentWillUnmount () {
        socket.removeAllListeners();
    }

    render () {
        return (
            <Switch>
                <Route
                    exact
                    component = { Lobby }
                    path = { book.lobby }
                />
                <Route
                    exact
                    component = { Profile }
                    path = { book.profile }
                />
                <Route
                    exact
                    component = { NewPassword }
                    path = { book.newPassword }
                />
                <Route
                    exact
                    component = { Rank }
                    path = { book.rank }
                />
                <Redirect to = { book.lobby }/>
            </Switch>
        );
    }

}
