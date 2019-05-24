import React, { Component } from 'react';
import { Droppable, Draggable } from 'react-beautiful-dnd';

class DroppableDetailed extends Component {
    render(){
        const { getItemStyle, getListStyle, items, droppableId } = this.props;
        const shift = () => {
            if(droppableId.indexOf("afternoon")===0)
                return "Vespertino";
            else if(droppableId.indexOf("candidates")!==0)
                return "Matutino";
            else
                return "No Seleccionados";
        }
        return(
            <div>
                <h2>{shift()}</h2>
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
                                                {`${item.candidateName} ${item.candidateLastNameFather} (${item.candidateScore})`}
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