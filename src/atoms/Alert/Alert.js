
export const Alert = ({ massage }) => {
    return (
        <div className="alert alert-danger d-flex align-items-center" role="alert">
            ⛔️{massage}
        </div>
    )
}