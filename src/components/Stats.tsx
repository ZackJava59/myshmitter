import Avatar from "./Avatar.tsx";
import {useAppDispatch, useAppSelector} from "../app/hook.ts";
import {changeFollowers, changeFollowing} from "../features/stats/statsSlice.ts";


const Stats = () => {
    const user = useAppSelector(state => state.user);
    const stats = useAppSelector(state => state.stats);
    const dispatch = useAppDispatch();

    return (
        <div className={'user-stats'}>
            <div>
                <Avatar/>
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