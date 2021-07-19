import {useEffect, useState} from "react";
import Spinner from "./Spinner";
import './App.css';

export default function App() {

    const [users, setUsers] = useState([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users?_delay=5000&t='+Math.random())
            .then(response => response.json())
            .then(result => setUsers(result))
    }, []);

    return (
        <div className="App">
            {
                users.length === 0
                ?   <Spinner/>
                :   <div className='users'>
                        {users.map((user, key) => <div key={key}>{user.name}</div>)}
                    </div>
            }
        </div>
    );
}