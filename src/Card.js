import React from 'react';

const Card = ({ cards, setDragDrop }) => {

  // fires when card starts being dragged
  const handleDragStart = (e) => {
    
    let initialPosition = Number(e.currentTarget.dataset.position);
    
    console.log('dragstart', initialPosition)
    
    setDragDrop({
      ...setDragDrop,
      draggedFrom: initialPosition,
      isDragging: true,
      originalOrder: cards
    })
    
    e
    .currentTarget
    .style
    .backgroundColor = 'yellow';
  }

  const renderCards = () => {
    if(cards){
      return cards && cards.map((card, i) => {
        console.log(card)
        return <p 
                className="draggable" 
                draggable="true"
                data-position={i}
                onDragStart={handleDragStart}
                key={i}>{card.card_name}</p>
      })
    } else {
      return <section></section>
    }
  }

  return (
    <>
      <section>{renderCards()}</section>        
    </>  
  );
}

export default Card;
