const Avatar = ({size, user, changeAvatar}) => {
    return (
        <img
            onClick={() => {
                const url = prompt('Enter new avatar url');
                changeAvatar(url);
            }}
            className={`user-avatar ${size ?? ''}`}
            src={user.avatar}
            alt={user.name}
        />
    );
};

export default Avatar;