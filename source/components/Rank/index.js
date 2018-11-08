// Core
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Doughnut } from 'react-chartjs-2';

// Instruments
import { getRankData } from '../../instruments';

// Styles
import Styles from './styles.m.css';

const mapStateToProps = (state) => ({
    profile: state.profile,
});

@connect(mapStateToProps)
export default class Rank extends Component {

    state = {
        rankSystem: [
            0, 100, 200, 300,
            500, 700, 900, 1100, 1300, 1500, 1700, 1900,
            2300, 2700, 3100, 3500,
            4100, 4700, 5300,
            6100
        ]
    }

    renderRankInfo = (rankToRender, position) => {
        const { rankSystem } = this.state;
        const { profile } = this.props;
        const rank = profile.get('rank');

        if (rank) {
            const pointsIndex = position === 'next' ? rank : rank - 2;

            return (
                <>
                    <div>
                        <span>Previous rank: </span>
                        <span> { rankToRender.rankName } </span>
                        <img src = { rankToRender.rankImg } alt = '' />
                    </div>
                    <div>
                        <span>Points: </span>
                        <span> { rankSystem[pointsIndex] } </span>
                    </div>
                </>
            );
        }

        return (null);
    }

    render () {
        const { rankSystem } = this.state;
        const { profile } = this.props;
        const rank = profile.get('rank');

        if (rank) {
            const currentRank = getRankData(rank);
            const prevRank = rank - 1 > 0 ? getRankData(rank - 1) : null;
            const nextRank = rank + 1 <= 20 ? getRankData(rank + 1) : null;

            const prevRankJSX = this.renderRankInfo(prevRank, 'prev');
            const nextRankJSX = this.renderRankInfo(nextRank, 'next');

            return (
                <section>
                    <h2>Rank info</h2>
                    {  prevRankJSX }
                    <div>
                        <span>Your current rank: </span>
                        <span> { currentRank.rankName } </span>
                        <img src = { currentRank.rankImg } alt = '' />
                    </div>
                    <div>
                        <span>Current point: </span>
                        <span> { profile.get('rankPoint') } </span>
                    </div>
                    {  nextRankJSX }
                    <Doughnut
                        height={100}
                        options={{
                            legend: {
                                labels: {
                                    fontColor: 'black',
                                    fontSize: 18
                                }
                            }
                        }}
                        data={{
                        labels: [
                            'Win',
                            'Lose'
                        ],
                        datasets: [{
                            data: [
                                60,
                                40,
                            ],
                            backgroundColor: [
                                'rgba(0,0,255,0.6)',
                                'rgba(255,0,0,0.6)'
                            ],
                            hoverBackgroundColor: [
                                'rgba(0,0,255,1)',
                                'rgba(255,0,0,1)'
                            ]
                        }]
                    }}  />
                </section>
            );
        }

        // Rank render only for admin
        return (
            <section className = { Styles.admin } >
                <h2>Rank info</h2>
                <div className = { Styles.wrapper }>
                    {
                        rankSystem.map((rank, index) => {
                            const { rankImg, rankName } = getRankData(index + 1);

                            return (
                                <div className = { Styles.rank__system } key = {`rank__system__block__${rank}`}>
                                    <div>
                                        <img src = {rankImg} alt='Rank image' />
                                    </div>
                                    <span className = { Styles.name } >{ rankName }: </span>
                                    <span>{ rank }</span>
                                </div>
                            )
                        })
                    }
                </div>
            </section>
        );
    }
}
