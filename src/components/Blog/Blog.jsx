import React from 'react';

const Blog = () => {
  return (
    <div className='w-10/12 mx-auto mt-5'>
      <h2 className='text-2xl text-center font-bold'>Blog page</h2>
      <div className="card w-full">
        <div className="card-body">
          <div className="mb-4 bg-base-200 shadow-xl p-5 rounded-md">
            <h2 className='text-2xl font-semibold mb-4'>1. Context api use</h2>
            <p>The React Context API is a way for a React app to effectively produce global variables that can be passed around. This is the alternative to "prop drilling" or moving props from grandparent to child to parent, and so on. Context is also touted as an easier, lighter approach to state management using Redux.</p>
          </div>

          <div className="mb-4 bg-base-200 shadow-xl p-5 rounded-md">
            <h2 className='text-2xl font-semibold mb-4'>2. What is Custom hooks</h2>
            <p>Custom Hook is a JavaScript function. When I have component logic that needs to be used by multiple components, we can extract that logic to a custom Hook.</p>
          </div>

          <div className="mb-4 bg-base-200 shadow-xl p-5 rounded-md">
            <h2 className='text-2xl font-semibold mb-4'>3. UseRef</h2>
            <p>The useRef returns a mutable ref object. This object has a property called .current. The value is persisted in the refContainer.current property. These values are accessed from the current property of the returned object. The .current property could be initialised to the passed argument initialValue e.g. useRef(initialValue). The object can persist a value for a full lifetime of the component.</p>
          </div>

          <div className="mb-4 bg-base-200 shadow-xl p-5 rounded-md">
            <h2 className='text-2xl font-semibold mb-4'>4. UseMemo</h2>
            <p>The React useMemo Hook returns a memoized value. Think of memoization as caching a value so that it does not need to be recalculated. The useMemo Hook only runs when one of its dependencies update. This can improve performance. The useMemo and useCallback Hooks are similar. The main difference is that useMemo returns a memoized value and useCallback returns a memoized function.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;