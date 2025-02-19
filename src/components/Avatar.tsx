import {useDispatch, useSelector} from "react-redux";
import {AppDispatch, RootState} from "../store/store.ts";
import {changeAvatar, changeName} from "../actions/twitActions.ts";

interface Props {
    size: string;
}

const Avatar = ({size}: Props) => {
    const user = useSelector((state: RootState) => state.user);
    const dispatch = useDispatch<AppDispatch>();

    return (
        <img onClick={() => {
            const url = prompt('Enter new avatar URL');
            if (url) {
                dispatch(changeAvatar(url));
            }
        }}
             onContextMenu={e => {
                 e.preventDefault();
                 const name = prompt('Enter new name');
                 if (name) {
                     dispatch(changeName(name))
                 }
             }}
             className={`user-avatar ${size ?? ''}`}
             src={user.avatar}
             alt={user.name}/>
    );
};

export default Avatar;