import React, { useEffect, useState } from 'react';
import Card from "./Card" 

const BoardColumn = ({ list, cards, setDragDrop }) => {

    const handleClick = (e) => {
      e.preventDefault();
      console.log('The link was clicked...render form');
    }

    return (
      <div 
        className="column droppable"
        droppable="true">
        <div className="card">
          <header>
            <h3>{list.list_name}</h3>
          </header>
          <Card setDragDrop={setDragDrop} cards={cards} />
          <footer onClick={handleClick}>
            <p>+ add another card</p>
          </footer>
        </div>
      </div>
    );
}

export default BoardColumn;
