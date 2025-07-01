import { useState } from "react"
import UserProfile from "./components/userProfile/UserProfile "


function App() {

  const [showUser, setShowUser] = useState<boolean>(false);

  return (
    <>
      <button
        className="bg-blue-500 text-slate-100 px-2 py-1 rounded-md m-4"
        onClick={() => setShowUser(!showUser)}>
        {showUser ? "hide user" : "show user"}
      </button>
      {
        showUser && <UserProfile />
      }
    </>
  )
}

export default App
