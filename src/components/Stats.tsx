import Avatar from "./Avatar.tsx";
import {useContext} from "react";
import {TwitterContext} from "../utils/context.ts";


const Stats = () => {
    const {user, stats, changeFollowers, changeFollowing} = useContext(TwitterContext);
    return (
        <div className={'user-stats'}>
            <div>
                <Avatar size={'user-avatar'}/>
                {user.name}
            </div>
            <div className={'stats'}>
                <div onClick={() => {
                    changeFollowers(stats.followers + 1)
                }}
                     onContextMenu={e => {
                         e.preventDefault();
                         if (stats.followers > 0) {
                             changeFollowers(stats.followers - 1)
                         }
                     }}>Followers: {stats.followers}</div>

                <div onClick={() => {
                    changeFollowing(stats.following + 1)
                }}
                     onContextMenu={e => {
                         e.preventDefault()
                         if (stats.following > 0) {
                             changeFollowing(stats.following - 1)
                         }
                     }}>Following: {stats.following}</div>
            </div>
        </div>
    );
};

export default Stats;