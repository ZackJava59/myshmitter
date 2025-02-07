export interface User {
    name: string;
    avatar: string;
}

export interface Stats {
    followers: number;
    following: number;
}

export interface ContextTypes {
    user: User;
    stats: Stats;
    changeAvatar: (url: string) => void;
    changeName: (name: string) => void;
    changeFollowers: (followers: number) => void;
    changeFollowing: (following: number) => void;
}
