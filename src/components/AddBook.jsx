import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
function AddBook() {
    const naigate = useNavigate();
    const [formData, setFormData] = useState({
        name: '',
        author: '',
        price: '',
        stock: ''
    });

    const BASE_URL = "https://book-app-snb5.onrender.com";

    // Handle form field changes
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    // Handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post(`${BASE_URL}/api/book`, formData);
            setFormData({ name: '', author: '', price: '', stock: '' });
            naigate("/");
        } catch (error) {
            console.error('Error adding book:', error);
        }
    };

    return (
        <>
            <h3 className="text-center mt-5">Add Book</h3>
            <div className="card card-margin px-5 py-4">
                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label className="form-label fw-bold">Book Name</label>
                        <input
                            type="text"
                            name="name"
                            className="form-control"
                            value={formData.name}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="mb-3">
                        <label className="form-label fw-bold">Author Name</label>
                        <input
                            type="text"
                            name="author"
                            className="form-control"
                            value={formData.author}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="mb-3">
                        <label className="form-label fw-bold">Price</label>
                        <input
                            type="number"
                            name="price"
                            className="form-control"
                            value={formData.price}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="mb-3">
                        <label className="form-label fw-bold">Stock</label>
                        <input
                            type="number"
                            name="stock"
                            className="form-control"
                            value={formData.stock}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className='d-flex justify-content-center'>
                        <button type='submit' className='btn btn-sm btn-primary'>Add Book</button>
                    </div>
                </form>
            </div>
        </>
    );
}

export default AddBook;
