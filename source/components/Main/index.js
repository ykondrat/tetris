// Core
import React, { Component, Fragment } from 'react';
import FlipMove from 'react-flip-move';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

// Instruments
import Styles from './styles.m.css';

export default class Main extends Component {

    render () {
        return (
            <Fragment>
                <header>
                    <h1>Lobby</h1>
                </header>
                <div>
                    <section>
                        <h4>Only players</h4>
                        <div>
                            <div>
                                <p>Player nickname</p>
                                <img src="" alt="Online player rank"/>
                            </div>
                        </div>
                    </section>
                    <aside>
                        <h4>Tetris chat</h4>
                        <div>
                            <div>
                                <div>
                                    <p>nickname</p>
                                    <img src="" alt="Chat user rank image"/>
                                </div>
                                <p>Massage text</p>
                            </div>
                        </div>
                        <div>
                            <input type="text"/>
                            <button>Send</button>
                        </div>
                    </aside>
                </div>


                <button>Start Game</button>

                <section>
                    <label htmlFor="">
                        <input type="radio" />
                        Solo
                    </label>
                    <label htmlFor="">
                        <input type="radio" />
                        1vs1
                    </label>
                    <label htmlFor="">
                        <input type="radio" />
                        Multiplayer (max 4 person)
                    </label>
                </section>

            </Fragment>
        );
    }

}
