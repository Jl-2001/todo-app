import { useState } from 'react'
import './App.css'

const url = "https://4jxxe06uoi.execute-api.us-east-2.amazonaws.com/prod/username"

function App() {
  const [username, setusername] = useState("")
  const [user, setuser] = useState(null)
  const [favoritecolor, setfavoritecolor] = useState("")
  const [getUserUserName, setGetUserUerName] = useState("")

  const onChangefunc = (e) => {
    setusername(e.target.value) 
  }

  const getUser = async() => {
    const response = await fetch(url + "?" + new URLSearchParams({"username": getUserUserName}),{
      method: "GET", // *GET, POST, PUT, DELETE, etc.
      mode: "cors",
    });
    setuser(await response.json())
  }

  const onChangefavoritecolor = (e) => {
    setfavoritecolor(e.target.value) 
  }

  const onChangegetUserUserName = (e) => {
    setGetUserUerName(e.target.value) 
  }
    
  const submitfunc = async () => {
    const response = await fetch(url, {
      method: "PUT", // *GET, POST, PUT, DELETE, etc.
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: JSON.stringify({
        "username": username,
        "favoriteColor":favoritecolor
      }), // body data type must match "Content-Type" header
    });
    alert("yay");
  }

  return (
    <>
      <header className='page-header'>
        <h1 className='page-title'>Todo App</h1>
      </header>
      <main className='page-main'>
        <h1>create user</h1>
        <label htmlFor='username'>Username</label>
        <input type='text' name='username' value={username} onChange={onChangefunc}/>
        <label htmlFor='favoritecolor'>favorite color</label>
        <input type='text' name='favoritecolor' value={favoritecolor} onChange={onChangefavoritecolor}/>
        <button onClick={submitfunc}>Submit</button>
        <h1> get user</h1>
        <label htmlFor='username'>Username</label>
        <input type='text' name='username' value={getUserUserName} onChange={onChangegetUserUserName}/>
        <button onClick={getUser}>get user</button>
        {user ? <>
            <h2>user:</h2>
            <p>username: {user.username}</p>
            <p>favoriteColor: {user.favoriteColor}</p>
          </>
          : null  
        }
      </main>
    </>
  )
}

export default App
