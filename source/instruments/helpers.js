// Rank images
import rank1 from '../static/rank/1.png';
import rank2 from '../static/rank/2.png';
import rank3 from '../static/rank/3.png';
import rank4 from '../static/rank/4.png';
import rank5 from '../static/rank/5.png';
import rank6 from '../static/rank/6.png';
import rank7 from '../static/rank/7.png';
import rank8 from '../static/rank/8.png';
import rank9 from '../static/rank/9.png';
import rank10 from '../static/rank/10.png';
import rank11 from '../static/rank/11.png';
import rank12 from '../static/rank/12.png';
import rank13 from '../static/rank/13.png';
import rank14 from '../static/rank/14.png';
import rank15 from '../static/rank/15.png';
import rank16 from '../static/rank/16.png';
import rank17 from '../static/rank/17.png';
import rank18 from '../static/rank/18.png';
import rank19 from '../static/rank/19.png';
import rank20 from '../static/rank/20.png';
import rankadmin from '../static/rank/admin.png';

export function getDisplayName (WrappedComponent) {
    return WrappedComponent.displayName || WrappedComponent.name || 'Component';
}

export function getRankData (rank) {
    switch (rank) {
        case 0:
            return ({ rankImg: rankadmin, rankName: 'Admin' });
        case 1:
            return ({ rankImg: rank1, rankName: 'Basic Tetris Pilot' });
        case 2:
            return ({ rankImg: rank2, rankName: 'Tetris Pilot' });
        case 3:
            return ({ rankImg: rank3, rankName: 'Chief Tetris Pilot' });
        case 4:
            return ({ rankImg: rank4, rankName: 'Basic Sergeant' });
        case 5:
            return ({ rankImg: rank5, rankName: 'Sergeant' });
        case 6:
            return ({ rankImg: rank6, rankName: 'Chief Sergeant' });
        case 7:
            return ({ rankImg: rank7, rankName: 'Basic Lieutenant' });
        case 8:
            return ({ rankImg: rank8, rankName: 'Lieutenant' });
        case 9:
            return ({ rankImg: rank9, rankName: 'Chief Lieutenant' });
        case 10:
            return ({ rankImg: rank10, rankName: 'Basic Captain' });
        case 11:
            return ({ rankImg: rank11, rankName: 'Captain' });
        case 12:
            return ({ rankImg: rank12, rankName: 'Chief Captain' });
        case 13:
            return ({ rankImg: rank13, rankName: 'Basic Major' });
        case 14:
            return ({ rankImg: rank14, rankName: 'Major' });
        case 15:
            return ({ rankImg: rank15, rankName: 'Chief Major' });
        case 16:
            return ({ rankImg: rank16, rankName: 'Basic Colonel' });
        case 17:
            return ({ rankImg: rank17, rankName: 'Colonel' });
        case 18:
            return ({ rankImg: rank18, rankName: 'Chief Colonel' });
        case 19:
            return ({ rankImg: rank19, rankName: 'Basic General' });
        case 20:
            return ({ rankImg: rank20, rankName: 'General' });
        default:
            return ({ rankImg: rank1, rankName: 'Basic Tetris Pilot' });
    }
}
