import Listing from "./components/Listing"
import { useState, useEffect } from "react"
import NProgress from 'nprogress';
import 'nprogress/nprogress.css';

function App() {
  const [user, setUsers] = useState([])

  useEffect(() => {

    async function fetchUsers() {
      NProgress.start();
      const response = await fetch("http://localhost:3000/api/v1/users", { method: "GET", headers: { "Accept": "application/json" } })
      const data = await response.json()
      setUsers(data)
      NProgress.done();
    }

    fetchUsers()
  }, [])

  return (
    <div style={{ margin: "0 auto", width:"200px" }}>
      <div style={{ width: "500px" }}>
        <h1>Das ist meine Benutzerliste</h1>
        <Listing data={user} />
      </div>
    </div>
  )
}

export default App
