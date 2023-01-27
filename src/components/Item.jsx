export default function Item({ item }) {

    const [user] = useState(auth)
    const deleteEntry = () => {

    }
    const updateEntry = () => {
        const [entry, setEntry] = ("")

    }

    return (
        <div className="item">
            <h6>{item.list_item} </h6>
            <button onClick={deleteEntry()}> X </button>
            <button onClick={updateEntry()}>Edit </button>
        </div>
    )

}