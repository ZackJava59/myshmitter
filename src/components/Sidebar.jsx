import Stats from "./Stats.jsx";

const Sidebar = ({user, stats, changeAvatar}) => {
    return (
        <div className={'sidebar'}>
            <Stats user={user} stats={stats} changeAvatar={changeAvatar} />
        </div>
    );
};

export default Sidebar;