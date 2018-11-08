// Core
import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import cx from 'classnames';

// Instruments
import Styles from './styles.m.css';
import { book } from '../../navigation/book';
import { getRankData } from '../../instruments';

// Actions
import { logoutAsync } from '../../bus/auth/actions';

// Default
import defaultAvatar from '../../static/default/avatar.svg';

const mapStateToProps = (state) => {
    return ({
        isAuthenticated: state.auth.get('isAuthenticated'),
        profile: state.profile,
        isOnline: state.ui.get('isOnline')
    });
}

@connect(mapStateToProps, { logoutAsync })
export default class Nav extends Component {

    _getAvatar = (profile) => {
        const avatar = profile.get('avatar');

        if (avatar) {
            return (avatar);
        } else {
            return (defaultAvatar);
        }
    }

    _getNav = () => {
        const { isAuthenticated, profile } = this.props;
        const avatar = this._getAvatar(profile);
        const { rankImg, rankName } = getRankData(profile.get('rank'));

        return isAuthenticated ?
            <>
                <NavLink activeClassName = { Styles.active } to = { book.profile }>
                    <img className = {Styles.profileimg} src = { avatar } alt = 'User avatar' />
                    { profile.get('nickName') }
                </NavLink>
                <NavLink activeClassName = { Styles.active } to = { book.lobby }>
                    Lobby
                </NavLink>
                <button onClick = { this._logout }>Logout</button>
                <NavLink className = { Styles.rank } activeClassName = { Styles.active } to = { book.rank }>
                    <img src = { rankImg } alt = 'User rank iamge' />
                    <span>{ rankName }</span>
                </NavLink>
            </>
            :
            <>
                <div>
                    <NavLink activeClassName = { Styles.active } to = { book.login }>
                        Signin
                    </NavLink>
                    <NavLink activeClassName = { Styles.active } to = { book.signUp }>
                        Signup
                    </NavLink>
                </div>
            </>
        ;
    };

    _logout = () => {
        this.props.logoutAsync();
    };

    render () {
        const { isOnline } = this.props;

        const navigation = this._getNav();
        const statusStyle = cx(Styles.status, {
            [Styles.online]:  isOnline,
            [Styles.offline]: !isOnline,
        });

        return (
            <section className = { Styles.navigation }>

                {navigation}
            </section>
        );
    }
}
