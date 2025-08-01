import React, { useState } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  padding: 20px;
  background: #f8f9fa;
`;

const Header = styled.div`
  background: white;
  padding: 20px;
  border-radius: 8px;
  margin-bottom: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
`;

const CardGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  flex: 1;
`;

const Card = styled.div`
  background: white;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  position: relative;
  display: flex;
  flex-direction: column;
  min-height: 200px;
  flex: 1 1 300px;
  
  &:first-child {
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    color: white;
    transform: scale(1.05);
    z-index: 1000;
  }
`;

const CardContent = styled.div`
  padding: 20px;
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const TagContainer = styled.div`
  display: flex;
  gap: 10px;
  margin-top: 15px;
  
  /* Tags should be equal width but there's a flex issue */
  & > span {
    flex: 1;
    text-align: center;
  }
  
  & > span:first-child {
    flex: 3;
  }
  
  & > span:last-child {
    flex: 0.5;
  }
`;
const Tag = styled.span`
  background: #ecf0f1;
  padding: 6px 12px;
  border-radius: 4px;
  font-size: 12px;
  white-space: nowrap;
  /* No explicit color set - relies on cascade */
`;

const Modal = styled.div<{ show: boolean }>`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: white;
  padding: 30px;
  border-radius: 8px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
  z-index: ${props => props.show ? '500' : '-1'};
  opacity: ${props => props.show ? '1' : '0'};
  min-width: 300px;
`;

const Backdrop = styled.div<{ show: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  z-index: ${props => props.show ? '400' : '-1'};
  opacity: ${props => props.show ? '1' : '0'};
`;

const CardLayout: React.FC = () => {
  const [showModal, setShowModal] = useState(false);

  const cards = Array.from({ length: 3 }, (_, i) => ({
    id: i + 1,
    title: `Project ${i + 1}`,
    content: `This is project ${i + 1} description. ${i === 0 ? 'This is the featured project.' : 'A regular project card.'}`,
    tags: ['Frontend', 'Backend', 'Testing']
  }));

  return (
    <Container>
      <Header>
        <h1 style={{ margin: 0, fontSize: '24px' }}>Project Dashboard</h1>
        <button
          onClick={() => setShowModal(true)}
          style={{
            background: '#3498db',
            color: 'white',
            border: 'none',
            padding: '10px 20px',
            borderRadius: '4px',
            cursor: 'pointer'
          }}
        >
          Add Project
        </button>
      </Header>

      <CardGrid>
        {cards.map(card => (
          <Card key={card.id}>
            <CardContent>
              <h3 style={{ margin: '0 0 10px 0' }}>{card.title}</h3>
              <p style={{ margin: '0 0 15px 0', fontSize: '14px', lineHeight: '1.5' }}>
                {card.content}
              </p>

              <TagContainer>
                {card.tags.map(tag => (
                  <Tag key={tag}>{tag}</Tag>
                ))}
              </TagContainer>
            </CardContent>
          </Card>
        ))}
      </CardGrid>

      <Backdrop show={showModal} onClick={() => setShowModal(false)} />
      <Modal show={showModal}>
        <h3 style={{ margin: '0 0 15px 0' }}>Add New Project</h3>
        <p style={{ margin: '0 0 20px 0' }}>This modal should appear above all cards.</p>
        <div style={{ display: 'flex', gap: '10px', justifyContent: 'flex-end' }}>
          <button
            onClick={() => setShowModal(false)}
            style={{
              background: '#95a5a6',
              color: 'white',
              border: 'none',
              padding: '8px 16px',
              borderRadius: '4px',
              cursor: 'pointer'
            }}
          >
            Cancel
          </button>
          <button
            onClick={() => setShowModal(false)}
            style={{
              background: '#27ae60',
              color: 'white',
              border: 'none',
              padding: '8px 16px',
              borderRadius: '4px',
              cursor: 'pointer'
            }}
          >
            Create
          </button>
        </div>
      </Modal>
    </Container>
  );
};

export default CardLayout;
