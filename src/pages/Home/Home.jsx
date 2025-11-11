import React from 'react';

export function Home() {

    return (
        <div style={{ padding: '20px', border: '1px solid #ccc', margin: '10px' }}>
            <h2>PupSupport</h2>
            <p>Welcome to PupSupport!</p>
            <div style={{ padding: '20px', margin: '10px' }}>
                <ul>
                    <li><a href="./pages/Home/">Home</a></li>
                    <li><a href="./pages/Favorites.jsx">Favorites</a></li>
                    <li><a href="./pages/Home/Recommendations.jsx">Recommendations</a></li>
                </ul>
            </div>

        </div>
    );
}