import React from 'react';
import { Helmet } from 'react-helmet';

function Application() {
  return (
    <div className="application">
      <Helmet>
        <meta charSet="utf-8" />
        <title>My Title</title>
        <link rel="canonical" href="https://protein-patika-graduation-burak-caniklioglu.netlify.app/" />
      </Helmet>
    </div>
  );
}

export default Application;
