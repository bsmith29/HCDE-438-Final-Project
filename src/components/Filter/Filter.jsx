import React, { useState } from 'react';
import './Filter.css';

function ProductList({ products }) {
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('all');

    const filteredProducts = products.filter((product) => {
        const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase());
        const matchesCategory = selectedCategory === 'all' || product.category === selectedCategory;
        return matchesSearch && matchesCategory;
    });

    return (
        <div>
            <input
                type="text"
                placeholder="Filter...."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
            />
            <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
            >
                <option value="all">All Categories</option>
                <option value="electronics">Electronics</option>
                <option value="clothing">Clothing</option>
            </select>

            {filteredProducts.map((product) => (
                <div key={product.id}>
                    <h4>{product.name}</h4>
                    <p>{product.category}</p>
                </div>
            ))}
        </div>
    );
}

export default ProductList;