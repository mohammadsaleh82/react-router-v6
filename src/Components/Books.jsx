import getBooks from "../data/books"
import { Link, Outlet, useLocation, useSearchParams } from 'react-router-dom'


const Books = () => {
    const [searchParams, setSearchParams] = useSearchParams()
    const location = useLocation()
    const books = getBooks();
    return (
        <div className="row">
            <div className="col-md-6 col-sm-12 p-3">
                <div className="form-group bg-dark p-2 ">
                    <label htmlFor="inputPassword5" className="form-label">جستجو</label>
                    <input type="text" id="inputPassword5" placeholder="جستجو"
                        value={searchParams.get('filter') || ''} // changed 'fillter' to 'filter'
                        onChange={event => {
                            let filter = event.target.value
                            if (filter)
                                setSearchParams({ filter: filter })
                            else
                                setSearchParams({})
                        }}
                        className="form-control bg-secondary text-light" />
                </div>


                <ul className="list-group list-group-flush rounded p-2">
                    {books.filter((book) => {
                        let filter = searchParams.get("filter"); // changed 'fillter' to 'filter'
                        if (!filter) return true;
                        let name = book.title?.toLowerCase();
                        if (!name) return true;
                        return name.startsWith(filter.toLowerCase());
                    }).map(item => (
                        <li key={item.id} className="list-group-item list-group-item-dark">
                            <Link className="btn d-block btn-secondary" to={`/books/${item.id + location.search}`}>{item.title}</Link>
                        </li>
                    ))}
                </ul>

            </div>
            <div className="col-md-6 col-sm-12 p-4">
                <Outlet />
            </div>
        </div>
    )
}

export default Books
