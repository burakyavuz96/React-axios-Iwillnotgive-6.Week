import axios from "axios";
import React, { useEffect, useState, setUsers, setCount} from "react";

const timer = setTimeout(() => {
  setCount('Yükleniyor');
}, 1000);

function App() { 
  console.log ("yukleniyor");
  const [users, setUsers, setCount] = useState([]);

  useEffect(() => {
  
    const fetchUsers = async () => {
      try {
        const response = await axios.get(
          "https://jsonplaceholder.typicode.com/users"
        );
        setUsers(response.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchUsers();
  }, []); 


  return (
    
    <div className="App">

      <ul>
        {users.map((user) => (
          <li>
            {user.username}:{user.name}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
