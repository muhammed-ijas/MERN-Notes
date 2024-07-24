// Frontend (React.js)
// 1. Adding Event Listeners to DOM Nodes
// In React, you usually add event listeners directly to elements using JSX.

function MyComponent() {
  const handleClick = () => {
    console.log('Button clicked!');
  };

  return <button onClick={handleClick}>Click Me</button>;
}


//2. Reconciliation
// Reconciliation is the process by which React updates the DOM. React maintains a virtual DOM to compare the previous and current state of the DOM and updates only the changed parts, making the updates efficient.


// 3. React Fiber
// React Fiber is the re-implementation of the React core algorithm. It enables incremental rendering, allowing React to pause and resume work as needed to maintain a smooth user experience.



// 4. Reading Query Params
// To read query parameters in React, you can use the useLocation hook from react-router-dom.


import { useLocation } from 'react-router-dom';

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

function MyComponent() {
  let query = useQuery();
  return <div>{query.get('paramName')}</div>;
}




// 5. Reading Path Params
// Path parameters can be accessed using the useParams hook from react-router-dom.

import { useParams } from 'react-router-dom';

function MyComponent() {
  let { id } = useParams();
  return <div>{id}</div>;
}




// 6. Synthetic Events
// Synthetic events are React's cross-browser wrapper around the browser's native event system. They work identically across all browsers.


function MyComponent() {
  const handleChange = (event) => {
    console.log(event.target.value);
  };

  return <input type="text" onChange={handleChange} />;
}



//7. Manipulating Uncontrolled Components
// Uncontrolled components manage their own state internally. You can manipulate them using refs.

import React, { useRef } from 'react';

function MyComponent() {
  const inputRef = useRef(null);

  const handleClick = () => {
    console.log(inputRef.current.value);
  };

  return (
    <div>
      <input type="text" ref={inputRef} />
      <button onClick={handleClick}>Log Value</button>
    </div>
  );
}




//8. Passing Props
// Props are used to pass data from one component to another.

function ChildComponent({ message }) {
  return <div>{message}</div>;
}

function ParentComponent() {
  return <ChildComponent message="Hello, World!" />;
}



// 9. useEffect: Unmount Event
// To handle cleanup when a component unmounts, return a function from the useEffect hook.


import React, { useEffect } from 'react';

function MyComponent() {
  useEffect(() => {
    // Component did mount logic here

    return () => {
      // Component will unmount logic here
      console.log('Component will unmount');
    };
  }, []);

  return <div>My Component</div>;
}












