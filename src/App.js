import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Main from "./Pages/Main";

const App = () => {
    return (
        <>

            <Router>
                <div className="blur"></div>

                <Routes>
                    <Route exact path="/" element={<Main />} />
                </Routes >
            </Router>
        </>
    )
}

export default App