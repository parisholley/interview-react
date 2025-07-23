import React, { useRef, useEffect, useState } from 'react';

// Challenge: Unfinished component where the intent is to fire an event when a nested child component is scrolled into view
// Parts missing are the forwardRef on the child component and intersection observer setup

// Fixed: Added forwardRef so component can receive a ref
const ChildComponent = React.forwardRef<HTMLDivElement, { children: React.ReactNode }>(({ children }, ref) => {
  return (
    <div ref={ref} style={{ height: '100px', backgroundColor: 'lightblue', margin: '20px 0' }}>
      {children}
    </div>
  );
});

ChildComponent.displayName = 'ChildComponent';

const ObserverComponent: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const childRef = useRef<HTMLDivElement | null>(null);

  // Fixed: Implemented intersection observer
  useEffect(() => {
    if (!childRef.current) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      { root: null, threshold: 0.1 }
    );

    observer.observe(childRef.current);

    return () => {
      if (childRef.current) {
        observer.unobserve(childRef.current);
      }
    };
  }, [childRef]);

  return (
    <div>
      <div style={{ padding: '20px', backgroundColor: isVisible ? 'lightgreen' : 'lightcoral' }}>
        {isVisible ? 'Child is visible!' : 'Scroll down to see the message'}
      </div>
      <div style={{ height: '300px', overflowY: 'scroll', border: '1px solid gray' }}>
        <div style={{height: '600px'}}>upper component</div>
        <ChildComponent ref={childRef}>Scroll into view</ChildComponent>
      </div>
    </div>
  );
};

export default ObserverComponent;
