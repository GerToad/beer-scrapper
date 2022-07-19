import React from 'react';
import './index.css';

const Error = () => {

    return(
      // In case page don't exists
        <section className="error">
          <h2>Page not found</h2>
          <p>The page you're triying to access doesn't exists</p>
        </section>
    )
}

export default Error;
