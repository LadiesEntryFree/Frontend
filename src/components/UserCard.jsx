import React, { useContext, useState } from 'react';
import UserInfo from './UI/UserInfo/UserInfo';
import LogoutButton from './UI/LogoutButton/LogoutButton';
import { Context } from '../index';

const UserCard = () => {
    const {store} = useContext(Context)
    const [user, setUser] = useState(store.user)
    const updateUser = () => {}
    return (
        <div>
            <UserInfo type='text' value={user.nickname} onChange={e => setUser({...user, nickname: e.target.value})}/>
            <UserInfo type='text'/>
            <LogoutButton>Logout</LogoutButton>
        </div>
    );
};

export default UserCard;