import React, { useState } from 'react'

const TicTacToe = () => {
  const [board, setboard] = useState(Array(9).fill(null))
  const [isXturn, setXturn] = useState(true)
  const [winner, setwinner] = useState(null)

  const rendersquare = (index) => {
    return (
      <button className='square' onClick={() => handleclick(index)}>{board[index]}</button>
    )
  }
  const handleclick = (index) => {
    if (board[index] != null) {
      return
    }
    const newboard = [...board]
    newboard[index] = isXturn ? 'X' : 'O';
    setboard(newboard)
    setXturn(!isXturn)
    const winnercombination = checkwinner(newboard);
    if (winnercombination) {
      setwinner(newboard[winnercombination[0]])
    }
  }
  const checkwinner = (board) => {
    const combination = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]
    ]
    for (let i = 0; i < combination.length; i++) {
      const [a, b, c] = combination[i];
      if (board[a] === board[b] && board[b] === board[c]) {
        return combination[i]
      }
    }
    return null;
  }
  const handlereset = () => {
    setboard(Array(9).fill(null))
    setwinner(null)
  }
  return (
    <>

      <div className='board'>
        <div className='boardrow'>
          {rendersquare(0)}
          {rendersquare(1)}
          {rendersquare(2)}
        </div>
        <div className='boardrow'>
          {rendersquare(3)}
          {rendersquare(4)}
          {rendersquare(5)}
        </div>
        <div className='boardrow'>
          {rendersquare(6)}
          {rendersquare(7)}
          {rendersquare(8)}
        </div>
      </div>

      <button onClick={handlereset}>RESET</button>
      {winner && <div>{winner} is winner of this game</div>}
    </>
  )
}

export default TicTacToe