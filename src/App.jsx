import './App.css'
import Navigation from "./components/Navigation.jsx";
import Body from "./components/Body.jsx";
import {useState} from "react";
import {TwitterContext} from "./utils/context.js";

function App() {
    const [user, setUser] = useState({
        name: 'Monster',
        avatar: 'https://gravatar.com/avatar/000?d=monsterid'
    });

    const [stats, setStats] = useState({
        followers: 42,
        following: 10
    });


    const changeAvatar = url => {
        setUser(prevState => ({...prevState, avatar: url || prevState.avatar}));
    }

    const changeName = name => {
        setUser(prevState => ({...prevState, name: name || prevState.name}));
    }

    const changeFollowers = followers => {
        setStats(prevState => ({...prevState, followers: followers}));
    }

    const changeFollowing = following => {
        setStats(prevState => ({...prevState, following: following}));
    }

    return (
        <div className={'app'}>
            <TwitterContext.Provider value={{
                user, stats, changeAvatar, changeName, changeFollowers, changeFollowing
            }}>
                <Navigation/>
                <Body/>
            </TwitterContext.Provider>
        </div>
    )
}

export default App
