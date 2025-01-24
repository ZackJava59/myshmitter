import Sidebar from "./Sidebar.jsx";
import Content from "./Content.jsx";

const Body = ({user, stats, changeAvatar}) => {
    return (
        <div className={'body'}>
            <Sidebar user={user} stats={stats} changeAvatar={changeAvatar} />
            <Content/>
        </div>
    );
};

export default Body;