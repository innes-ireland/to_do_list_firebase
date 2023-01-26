import userEvent from "@testing-library/user-event";




export default function ToDoList() {

    const [list, setList] = useState([])

    useEffect(() => {
        const q = query(collection(db, "todo_list_items"), // setting the collection type and name
            orderBy("createdAt"), //ordering items chronologically
            limit(100) // limit on items to be fetched from the database
        );
        const unsubscribe = onSnapShot(q, (QuerySnapShot) => { // unsubscribe constant represents onSnapShot method fed props of q and querysnapshot method
            let list = [] // list set to an empty array 
            QuerySnapShot.forEach((doc) => {
                list.push({ ...doc.data(), id: doc.id })
            });
            setList(list) // list state set to new array 
        })
        return () => unsubscribe

    }, []);
    return (
        <div className="toDoList_Wrapper">
            <div className="toDoList_Header">
                <h2> Things to do</h2>
            </div>
            <div className="toDoList_items">
                {list?.map((item) => {
                    <Item key={item.id} item={item} /> // if list is true, map through array returning each entry as an object "item"
                })}
            </div>
        </div>
    )
}