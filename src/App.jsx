import { useState } from 'react'

import Login from './pages/Login.jsx'
import Dashboard from './pages/Dashboard.jsx'
import AddCatch from './pages/AddCatch.jsx'

function App() {
	const [currPage, setCurrPage] = useState("login");

	const goLogin = () => setCurrPage("login");
	const goDash = () => setCurrPage("dash");
	const goAdd = () => setCurrPage("add");

	return (
		<div className="min-h-screen pt-40">
			{currPage === "login" && <Login goDash={goDash} />}
			{currPage === "dash" && <Dashboard goAdd={goAdd} goLogin={goLogin}/>}
			{currPage === "add" && <AddCatch goDash={goDash} />}
		</div>
	);
}

export default App;
