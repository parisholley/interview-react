import React, { useRef, useEffect, useState } from 'react';

const ScrollableItem: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div style={{ height: '100px', backgroundColor: 'lightblue', margin: '20px 0' }}>
      {children}
    </div>
  );
};

const ObserverComponent: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const itemRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    console.log('Observer effect running');
  }, []);
  return (
    <div style={{ height: '300px', overflowY: 'scroll', border: '1px solid gray' }}>
      <div style={{ height: '600px' }}>
        <div style={{ padding: '20px', backgroundColor: isVisible ? 'lightgreen' : 'lightcoral' }}>
          {isVisible ? 'Child is visible!' : 'Scroll down to see the message'}
        </div>
        <ScrollableItem ref={itemRef}>Scroll into view</ScrollableItem>
      </div>
    </div>
  );
};

export default ObserverComponent;
