import React from 'react';

const Block = () => {
  return (
    <div className='container mt-3'>
      <h3> Question Of Answer</h3>
      <div className="row row-cols-1 row-cols-md-2 g-4">
  <div className="col">
    <div className="card">
     
      <div className="card-body">
        <h5 className="card-title">What is the pourous of react router ?</h5>
        <p className="card-text">Routing is a process in which a user is directed to different pages based on their action or request. ReactJS Router is mainly used for developing Single Page Web Applications. React Router is used to define multiple routes in the application. When a user types a specific URL into the browser, and if this URL path matches any 'route' inside the router file, the user will be redirected to that particular route.</p>
      </div>
    </div>
  </div>
  <div className="col">
    <div className="card">
     
      <div className="card-body">
        <h5 className="card-title">How does Context API works</h5>
        <p className="card-text">Context provides a way to pass data through the component tree without having to pass props down manually at every level.In a typical React application, data is passed top-down (parent to child) via props, but such usage can be cumbersome for certain types of props (e.g. locale preference, UI theme) that are required by many components within an application.</p>
      </div>
    </div>
  </div>
  <div className="col">
    <div className="card">
      
      <div className="card-body">
        <h5 className="card-title">What is useRef() hook ?</h5>
        <p className="card-text">A hook is a special function which enables one use state and other React features without writing ES6 className components which are generally considered difficult to understand, use and master.
useRef hook is part of the React Hooks API. It is a function which takes a maximum of one argument and returns an Object. The returned object has a property called current whose value is the argument passed to useRef. If you invoke it without an argument, the returned object's current property is set to undefined. The code below illustrates how to invoke the useRef hook in functional components.</p>
      </div>
    </div>
  </div>
</div>
    </div>
  );
};

export default Block;