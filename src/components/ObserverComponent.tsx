import React, { useState } from 'react';

const ScrollableItem: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div style={{ height: '100px', backgroundColor: 'lightblue', margin: '20px 0' }}>
      {children}
    </div>
  );
};

const ObserverComponent: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <div>
      <div style={{ padding: '20px', backgroundColor: isVisible ? 'lightgreen' : 'lightcoral' }}>
        {isVisible ? 'Child is visible!' : 'Scroll down to see the message'}
      </div>
      <div style={{ height: '300px', overflowY: 'scroll', border: '1px solid gray' }}>
        <div style={{height: '600px'}}>upper component</div>
        <ScrollableItem>Scroll into view</ScrollableItem>
      </div>
    </div>
  );
};

export default ObserverComponent;
