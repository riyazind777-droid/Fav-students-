import { createContext, useState } from "react"

export const StudentContext = createContext()

const StudentProvider = ({ children }) => {

    const [favourites, setFavourites] = useState([])

    const addFavourite = (student) => {

        setFavourites((previous) => {

            const alreadyExists = previous.some(
                (item) => item.id === student.id
            )

            if (alreadyExists) {
                return previous
            }

            return [...previous, student]
        })
    }

    const removeFavourite = (id) => {

        setFavourites((previous) => {
            return previous.filter(
                (item) => item.id !== id
            )
        })
    }

    return (
        <StudentContext.Provider
            value={{
                favourites,
                addFavourite,
                removeFavourite
            }}
        >
            {children}
        </StudentContext.Provider>
    )
}

export default StudentProvider