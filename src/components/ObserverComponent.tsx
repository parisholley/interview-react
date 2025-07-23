import React, { useRef, useEffect, useState } from 'react';

// Challenge: Unfinished component where the intent is to fire an event when a nested child component is scrolled into view
// Parts missing are the forwardRef on the child component and intersection observer setup

// Bug: Missing forwardRef - this component can't receive a ref
const ChildComponent: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div style={{ height: '100px', backgroundColor: 'lightblue', margin: '20px 0' }}>
      {children}
    </div>
  );
};

const ObserverComponent: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Bug: Missing intersection observer implementation
  useEffect(() => {
    // TODO: Implement intersection observer to detect when ChildComponent is visible
    // Should call onVisible callback when ChildComponent scrolls into view
    console.log('Observer effect - need to implement intersection observer');
  }, []);

  return (
    <div style={{ height: '300px', overflowY: 'scroll', border: '1px solid gray' }}>
      <div style={{ height: '600px' }}>
        <div style={{ padding: '20px', backgroundColor: isVisible ? 'lightgreen' : 'lightcoral' }}>
          {isVisible ? 'Child is visible!' : 'Scroll down to see the message'}
        </div>
        <ChildComponent>Scroll into view</ChildComponent>
      </div>
    </div>
  );
};

export default ObserverComponent;
