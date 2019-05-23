import React, { Component } from 'react';
import { Droppable, Draggable } from 'react-beautiful-dnd';

class DroppableDetailed extends Component {
    render(){
        const { getItemStyle, getListStyle, items, droppableId } = this.props;
        return(
            <div>
                <h2>{`${items.length} Estudiantes`}</h2>
                <div className="specialitiesTab">
                    <Droppable droppableId={droppableId}>
                        {(provided, snapshot) => (
                            <div
                                ref={provided.innerRef}
                                style={getListStyle(snapshot.isDraggingOver)}>
                                {items.map((item, index) => (
                                    <Draggable
                                        key={item.idCandidate}
                                        draggableId={item.idCandidate}
                                        index={index}>
                                        {(provided, snapshot) => (
                                            <div
                                                ref={provided.innerRef}
                                                {...provided.draggableProps}
                                                {...provided.dragHandleProps}
                                                style={getItemStyle(
                                                    snapshot.isDragging,
                                                    provided.draggableProps.style
                                                )}>
                                                {item.candidateName}
                                            </div>
                                        )}
                                    </Draggable>
                                ))}
                                {provided.placeholder}
                            </div>
                        )}
                    </Droppable>
                </div>
            </div>
        );
    }
}

export default DroppableDetailed;