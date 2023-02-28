
export const Layout = ({ children, className }) => {
    return (
        <div
            className={`container ${className}`}
        >
            {children}
        </div>
    )
}