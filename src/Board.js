import React from "react";
import Square from "./Square";

class Board extends React.Component {
  renderSquare(i) {
    return (
      <Square
        value={this.props.squares[i]}
        onClick={() => this.props.onClick(i)}
      />
    );
  }

  renderLineOfSquares(linha) {
    let squares = [];

    for (let coluna = 0; coluna < 3; coluna++) {
      squares.push(this.renderSquare(linha * 3 + coluna));
    }
    return <div className="board-row">{squares}</div>;
  }

  renderBoard() {
    let board = [];

    for (let linha = 0; linha < 3; linha++) {
      board.push(this.renderLineOfSquares(linha));
    }

    return board;
  }

  render() {
    return <div>{this.renderBoard()}</div>;
  }
}

export default Board;
