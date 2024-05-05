"use client";
import React, {useEffect, useState} from "react";

function UserCard() {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const response = await fetch("https://jsonplaceholder.typicode.com/users");
                if (!response.ok) {
                    throw new Error('Failed to fetch users');
                }
                const data = await response.json();
                const getUsers = data.map((user) => ({
                    name: user.name,
                    username: user.username,
                    email: user.email,
                    phone: user.phone,
                    website: user.website
                }));
                setUsers(getUsers);
            } catch (error) {
                console.error("Error fetching users:", error);
            }
        };

        fetchUsers();
    }, []);


    return (
        <div className="userCss">
            {users.map((user) => (
                <div key={user.name}className="container" >
                    <div >
                        <img
                            src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSItlIyMon238HFkvhWIJidKnw2lEVhtmB3sEuBdOMr5A&s'
                            alt={user}
                        />
                        <div >
                            <h2>Name: {user.name}</h2>
                            <p>Username: {user.username}</p>
                            <p>Phone: {user.phone}</p>
                            <p>Email: {user.email}</p>
                            <p>Website: {user.website}</p>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default UserCard;
