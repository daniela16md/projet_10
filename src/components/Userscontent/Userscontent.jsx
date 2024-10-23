import React from 'react';
import datas from '../../datas/users.json';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import usersData from '../../app/store';
import { getProfileAPI } from '../../redux/api';


function Userscontent() {
    const dispatch = useDispatch();
    const users = useSelector((state) => state.users);

    useEffect(() => {
        const getUsers = async () => {
            try {
                const response = await getProfileAPI();
                const userData = response.body;
                dispatch(usersData(userData));
            } catch (error) {
                console.error("users failed :", error)
            }
        };
        getUsers();
    }, [dispatch]);

  return (
    <div className='userscontentdiv'>
            {users && users.length > 0 ? ( 
                users.map((user) => (
                    <section key={user.id} className='users'> 
                        <div className='userscontent'>
                            <h3 className='userstitle'>{user.title}</h3>
                            <p className='usersmoney'>{user.money}</p>
                            <p className='usersbalance'>{user.balance}</p>
                        </div>
                        <div>
                            <button className='buttonusers'>View transactions</button>
                        </div>
                    </section>
                ))
            ) : (
                <p>No users found.</p> 
            )}
        </div>
    );
}

export default Userscontent