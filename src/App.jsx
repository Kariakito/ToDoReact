import "./styles.css"

export default function App() {
    return <>
    <form classNmane= "new-item-from">
        <div className="form-row">
            <label>New Item</label>
            <input type="text" id="item" />
        </div>
        <button className="btn">Add</button>
    </form>
    <h1 className="header">ToDo List</h1>
    <ul className="list">
        <li>
            <label>
                <input type="checkbox"/>
                Cosa 1
            </label>
            <button className="btn btn-danger">Delete</button>

        </li>
    </ul>
    </>
}