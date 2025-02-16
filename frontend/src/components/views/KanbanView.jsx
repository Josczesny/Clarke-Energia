import React from 'react';
import styled from 'styled-components';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';

const KanbanView = ({ fornecedores, onDragEnd }) => {
  const columns = {
    interessados: {
      id: 'interessados',
      title: 'Interessados',
      items: fornecedores.filter(f => f.status === 'interessado')
    },
    comparando: {
      id: 'comparando',
      title: 'Comparando',
      items: fornecedores.filter(f => f.status === 'comparando')
    },
    favoritos: {
      id: 'favoritos',
      title: 'Favoritos',
      items: fornecedores.filter(f => f.status === 'favorito')
    }
  };

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <Container>
        {Object.values(columns).map(column => (
          <Column key={column.id}>
            <ColumnHeader>{column.title}</ColumnHeader>
            <Droppable droppableId={column.id}>
              {(provided) => (
                <ColumnContent
                  ref={provided.innerRef}
                  {...provided.droppableProps}
                >
                  {column.items.map((item, index) => (
                    <Draggable
                      key={item.id}
                      draggableId={item.id.toString()}
                      index={index}
                    >
                      {(provided) => (
                        <Card
                          ref={provided.innerRef}
                          {...provided.draggableProps}
                          {...provided.dragHandleProps}
                        >
                          <CardContent fornecedor={item} />
                        </Card>
                      )}
                    </Draggable>
                  ))}
                  {provided.placeholder}
                </ColumnContent>
              )}
            </Droppable>
          </Column>
        ))}
      </Container>
    </DragDropContext>
  );
};

// ... styled components 