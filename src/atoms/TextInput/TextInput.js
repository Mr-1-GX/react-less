
export const TextInput = ({ value, onChange, placeholder = '' }) => {
    const id = Math.random().toString()
    return (
        <div className="input-group mb-3">
            <span className="input-group-text" id={id}>🔎</span>
            <input
                type="text"
                className="form-control"
                placeholder={placeholder}
                name="filterTerm"
                id={id}
                value={value}
                onChange={onChange}
            />
        </div>
    )
}