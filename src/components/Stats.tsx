import Avatar from "./Avatar.tsx";
import {useDispatch, useSelector} from "react-redux";
import {AppDispatch, RootState} from "../store/store.ts";
import {changeFollowers, changeFollowing} from "../actions/twitActions.ts";


const Stats = () => {
    const user = useSelector((state: RootState) => state.user);
    const stats = useSelector((state: RootState) => state.stats);
    const dispatch = useDispatch<AppDispatch>();
    return (
        <div className={'user-stats'}>
            <div>
                <Avatar size={'user-avatar'}/>
                {user.name}
            </div>
            <div className={'stats'}>
                <div onClick={() => {
                    dispatch(changeFollowers(stats.followers + 1))
                }}
                     onContextMenu={e => {
                         e.preventDefault();
                         if (stats.followers > 0) {
                             dispatch(changeFollowers(stats.followers - 1))
                         }
                     }}>Followers: {stats.followers}</div>

                <div onClick={() => {
                    dispatch(changeFollowing(stats.following + 1))
                }}
                     onContextMenu={e => {
                         e.preventDefault()
                         if (stats.following > 0) {
                             dispatch(changeFollowing(stats.following - 1))
                         }
                     }}>Following: {stats.following}</div>
            </div>
        </div>
    );
};

export default Stats;