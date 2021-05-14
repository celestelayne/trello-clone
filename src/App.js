import React from 'react';
import './App.css';
import Board from "./Board"

const App = () => {

  const data = [{
    lists: [
      {
        key: 1,
        list_name: 'To Do'
      },
      {
        key: 2,
        list_name: 'In Progress'
      },
      {
        key: 3,
        list_name: 'QA'
      },
      {
        key: 4,
        list_name: 'Done'
      },
    ],
    cards: [
      {
        key: 1,
        card_name: 'Gather stakeholder feedback',
        key_list: 1
      },
      {
        key: 2,
        card_name: 'Write requirements',
        key_list: 2
      },
      {
        key: 3,
        card_name: 'Resourcing',
        key_list: 3
      },
      {
        key: 3,
        card_name: 'Design prototype',
        key_list: 3
      }
    ]
  }];

  return (
    <div className="container">

      <Board data={data} />

    </div>
  );
}

export default App;
