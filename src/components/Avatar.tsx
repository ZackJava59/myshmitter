import {useContext} from "react";
import {TwitterContext} from "../utils/context.ts";

interface Props {
    size: string;
}

const Avatar = ({size}: Props) => {
    const {user, changeAvatar, changeName} = useContext(TwitterContext);

    return (
        <img onClick={() => {
            const url = prompt('Enter new avatar URL');
            if (url) {
                changeAvatar(url);
            }
        }}
             onContextMenu={e => {
                 e.preventDefault();
                 const name = prompt('Enter new name');
                 if (name) {
                     changeName(name)
                 }
             }}
             className={`user-avatar ${size ?? ''}`}
             src={user.avatar}
             alt={user.name}/>
    );
};

export default Avatar;