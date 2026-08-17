import { Link } from "react-router-dom"

const Header = () => {

    return (
        <div>

            <div className="text-5xl p-3 m-2">
                <h1>
                    <b>Favourite Student List</b>
                </h1>
            </div>

            <div>

                <Link
                    to="/"
                    className="inline-block m-5 p-2 bg-emerald-200 rounded-md"
                >
                    Student List
                </Link>

                <Link
                    to="/favourites"
                    className="inline-block m-5 p-2 bg-emerald-200 rounded-md"
                >
                    Favourite List
                </Link>

            </div>

        </div>
    )
}

export default Header