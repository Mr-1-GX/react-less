
import PropTypes from "prop-types"

import { Button } from "../Button"

export const Loader = ({ massage = 'Loadeing....' }) => {
    return (
        <Button className="btn btn-primary" type="button" disabled>
            <span className="spinner-grow spinner-grow-sm" role="status" aria-hidden="true"></span>
            {massage}
        </Button>
    )
}

Loader.propTypes = {
    massage: PropTypes.string
}