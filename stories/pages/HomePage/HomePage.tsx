import React from 'react';
import Router from 'next/router';

export const HomePage = () => {
    return (
        <div>
            <h1>Home Page</h1>
            <button disabled={Router.pathname === '/signup'} />
        </div>
    );
};

