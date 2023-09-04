import { useParams, Link, useLocation, useNavigate } from 'react-router-dom'
import { deleteBook, getBookById } from '../data/books';

const Book = () => {

    const params = useParams();
    const location = useLocation()
    const navigate = useNavigate();
    const book = getBookById(parseInt(params.bookId))

    const handleDelete = () => {
        deleteBook(book.id)
        navigate(`/books${location.search}`)
    }

    if (book == null)
        return (<div className='alert alert-info'>کتاب یافت نشد</div>)
    return (
        <div className="card   shadow-lg bg-secondary text-white">
            <div className="card-header bg-secondary">
                نام کتاب:{book.title}
            </div>
            <div className="card-body">
                <h5 className="card-title text-light">ژانر : {book.genre}</h5>
                <p className="card-text text-light">
                    نویسنده:  {book.author} <br />
                    سال چاپ:  {book.year}
                </p>
                <Link to={'/books' + location.search} className="btn btn-primary">بازگشت</Link>
                <button onClick={handleDelete} className='btn btn-danger mx-3'>حذف</button>
            </div>
        </div>

    )
}

export default Book