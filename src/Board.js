import React, { useEffect, useState } from 'react';

import BoardColumn from "./BoardColumn"

const Board = ({data}) => {

  const initialState = {
    draggedFrom: null,
    draggedTo: null,
    isDragging: false,
    originalCards: [],
    updatedCards: []
  }

  const [dragDrop, setDragDrop] = useState( initialState );
  const [items, setItems] = useState( data );

  const handleDragOver = (e) => {
    
    e.preventDefault();
    
    let newArray = dragDrop.originalCards;

    // index of card being dragged
    const draggedFrom = dragDrop.draggedFrom; 
    // index of board column
    const draggedTo = e.currentTarget.dataset.position; 
    console.log('drag to', draggedTo) // not firing!!!

    const draggedCard = newArray[draggedFrom];
    const remainingCards = newArray.filter((item, index) => index !== draggedFrom);
    console.log(remainingCards)
    
    // updated list of cards
    newArray = [
      ...remainingCards.slice(0, draggedTo),
      draggedCard,
      ...remainingCards.slice(draggedTo)
    ];

    if (draggedTo !== dragDrop.draggedTo){
    setDragDrop({
      ...dragDrop,
      updatedOrder: newArray,
      draggedTo: draggedTo
    })
    }
  }

  const handleOnDrop = (e) => {
    setItems(dragDrop.updatedCards);

    setDragDrop({
      ...dragDrop,
      draggedFrom: null,
      draggedTo: null,
      isDragging: false
    })
  }

  useEffect(()=>{
    console.log("terllo board updated");
  }, [data])


  return (
      <div className="board">
        {data[0].lists && data[0].lists.map((list, i) => {
          const cards = data[0].cards && data[0].cards.filter(card => card.key_list === list.key)
          return <BoardColumn 
                  data-position={i}
                  setDragDrop={setDragDrop}
                  onDragOver={handleDragOver}
                  onDrop={handleOnDrop}
                  key={i} list={list} cards={cards} />
        })}
      </div>
    );
}

export default Board;
