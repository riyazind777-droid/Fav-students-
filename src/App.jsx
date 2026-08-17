import { BrowserRouter, Routes, Route } from "react-router-dom"

import Header from "./componends/Header"
import Studentlist from "./componends/Studentslist"
import Favlist from "./componends/favlist"

import StudentProvider from "./componends/Studentcontext"

const App = () => {

    return (

        <StudentProvider>

            <BrowserRouter>

                <Header />

                <Routes>

                    <Route
                        path="/"
                        element={<Studentlist />}
                    />

                    <Route
                        path="/favourites"
                        element={<Favlist />}
                    />

                </Routes>

            </BrowserRouter>

        </StudentProvider>

    )
}

export default App