import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link} from 'react-router-dom';
import '../App.css';

function Index() {
    const [Books, setBooks] = useState([]);

    const BASE_URL = "https://book-app-snb5.onrender.com";

    // Fetch all books
    const fetchAllBooks = async () => { 
        try {
            const response = await axios.get(`${BASE_URL}/api/books`);
            const books = response.data.data.bookData; 
            setBooks(books);
        } catch (error) {
            console.error('Failed to fetch books:', error);
        }
    };

    // Handle delete
    const handleDelete = async (id) => {
        try {
            const response = await axios.delete(`${BASE_URL}/api/book/${id}`);
            fetchAllBooks();
        } catch (error) {
            console.error('Error deleting book:', error);
        }
    };

    // useEffect
    useEffect(() => {
        fetchAllBooks();
    }, []);

    return (
        <>
            <h3 className="text-center mt-5">Book Details</h3>
            <div className="card card-margin px-2 py-2">
               <div className='add-btn'>
               <Link to={"/addbook"}  className='btn btn-sm btn-secondary'>AddBook</Link>
               </div>
                <table>
                    <thead>
                        <tr>
                            <th>Book Name</th>
                            <th>Author</th>
                            <th>Price</th>
                            <th>Stock</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {Books.length > 0 ? (
                            Books.map((book) => (
                                <tr key={book._id}>
                                    <td>{book.name}</td>
                                    <td>{book.author}</td>
                                    <td>{book.price}</td>
                                    <td>{book.stock}</td>
                                    <td>
                                        <Link to={`/editbook/${book._id}`} className='btn btn-sm btn-success px-2'>Edit</Link>
                                        <button 
                                            onClick={() => handleDelete(book._id)} 
                                            className='btn btn-sm btn-danger ms-1'>
                                            Delete
                                        </button>
                                    </td>
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td colSpan="5">No books available</td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </>
    );
}

export default Index;
