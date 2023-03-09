import { Link } from "react-router-dom"

export const NoMatch = () => {
    return (
        <div className="row">
            <h2> Error 404, Page Not Found </h2>
            <p>
                <Link to='/'>go to home page</Link>
            </p>
        </div>
    )
}