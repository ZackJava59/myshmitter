import './App.css'
import Navigation from "./components/Navigation.tsx";
import Body from "./components/Body.tsx";
import {useState} from "react";
import {TwitterContext} from "./utils/context.ts";

function App() {
    const [user, setUser] = useState({
        name: 'Monster',
        avatar: 'https://gravatar.com/avatar/000?d=monsterid'
    });

    const [stats, setStats] = useState({
        followers: 42,
        following: 10
    });

    const changeAvatar = (url: string) => {
        setUser(prevState => ({...prevState, avatar: url || prevState.avatar}));
    }

    const changeName = (name: string) => {
        setUser(prevState => ({...prevState, name: name || prevState.name}));
    }

    const changeFollowers = (followers: number) => {
        setStats(prevState => ({...prevState, followers: followers}));
    }

    const changeFollowing = (following: number) => {
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
