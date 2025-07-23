import React from 'react';
import styled from 'styled-components';

// Challenge: Complex CSS interaction issue
// The card content is not displaying correctly due to flexbox, position, and overflow interactions

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  padding: 20px;
  box-sizing: border-box;
`;

const Header = styled.div`
  background: #f0f0f0;
  padding: 20px;
  flex-shrink: 0;
  position: relative;
  z-index: 10;
`;

const CardGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  flex: 1;
  overflow-y: auto;
  position: relative;
`;

const Card = styled.div`
  width: 300px;
  height: 200px;
  background: white;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  position: relative;
  overflow: hidden;
`;

const CardHeader = styled.div`
  background: #3498db;
  color: white;
  padding: 15px;
  font-weight: bold;
  flex-shrink: 0;
  position: absolute; /* Bug: This breaks the layout flow */
  top: 0;
  left: 0;
  right: 0;
  z-index: 5;
`;

const CardContent = styled.div`
  padding: 15px;
  flex: 1;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  /* Bug: Content is hidden behind absolute positioned header */
`;

const CardFooter = styled.div`
  background: #ecf0f1;
  padding: 10px 15px;
  border-top: 1px solid #bdc3c7;
  flex-shrink: 0;
  position: sticky; /* Bug: Sticky doesn't work as expected within the current layout */
  bottom: 0;
`;

const CardLayout: React.FC = () => {
  const cards = Array.from({ length: 12 }, (_, i) => ({
    id: i + 1,
    title: `Card ${i + 1}`,
    content: `This is some content for card ${i + 1}. It should be visible and properly positioned within the card layout. The text might be longer to test overflow behavior.`,
    status: i % 3 === 0 ? 'Active' : i % 3 === 1 ? 'Pending' : 'Inactive'
  }));

  return (
    <Container>
      <Header>
        <h1>Card Dashboard</h1>
        <p>Manage your cards below</p>
      </Header>
      <CardGrid>
        {cards.map(card => (
          <Card key={card.id}>
            <CardHeader>
              {card.title}
            </CardHeader>
            <CardContent>
              <div>
                <p>{card.content}</p>
              </div>
            </CardContent>
            <CardFooter>
              Status: {card.status}
            </CardFooter>
          </Card>
        ))}
      </CardGrid>
    </Container>
  );
};

export default CardLayout;
