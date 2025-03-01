import {useAppDispatch, useAppSelector} from "../app/hook.ts";
import {changeAvatar, changeName} from "../features/user/userSlice.ts";

interface Props {
    size?: 'small';
}

const Avatar = ({size}: Props) => {
    const user = useAppSelector(state => state.user);
    const dispatch = useAppDispatch();

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