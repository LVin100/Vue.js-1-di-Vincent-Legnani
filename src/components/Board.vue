<template>
  <div v-if="game" class="d-flex flex-column">
    <div class="d-flex flex-wrap m-5">
      <div v-for="(n, i) in dimensioniBoard" v-bind:key="i">
        <div v-for="(n, j) in dimensioniBoard" v-bind:key="j">
          <cell @click="performMove(i, j)" :value="board[i][j]"></cell>
      </div>
      </div>
    </div>
    <button @click="resetBoard()" class="btn btn-primary w-50 mx-auto">reset</button>
  </div>


  <div v-else class="d-flex justify-content-center flex-column">
      <h1 class="m-3">Gioca a Tic Tac Toe!</h1>
      <button @click="game= !game" class="btn btn-primary w-50 mx-auto">Gioca ora!</button>
</div>
</template>



<script>
export default {
  data() {
    const dimensioniBoard = 3;
    const board = this.createBoard(dimensioniBoard);
    const game = false;
    
    return {
      game,
      dimensioniBoard,
      board,
      turnOrder: 1,
    };
  },
  methods: {
  
    performMove(x, y) {
      if (this.board[x][y] !== "") {
        return;
      }
      console.log("perf", x, y);
      if (this.turnOrder % 2 !== 0) {
        this.board[x][y] = "X";
      } else {
        this.board[x][y] = "O";
      }
      this.board = [...this.board];
      this.checkWinner();
      this.turnOrder++;
    },
    
    checkWinner() {
      let player;
      let colCounter = 0;
      let rowCounter = 0;
      let mainDiag = 0;
      let secDiag = 0;
      if (this.turnOrder % 2 == 0) {
        player = "O";
      } else {
        player = "X";
      
      for (let row = 0; row < this.dimensioniBoard; row++) {
        rowCounter = 0;
        colCounter = 0;
        for (let col = 0; col < this.dimensioniBoard; col++) {
          console.log("row= " + row + "; col= " + col);
          if (this.board[row][col] !== "" && this.board[row][col] === player) {
            colCounter++;
          }
          if (this.board[col][row] !== "" && this.board[col][row] === player) {
            rowCounter++;
          }
        }
        if (
          colCounter === this.dimensioniBoard ||
          rowCounter === this.dimensioniBoard
        ) {
          alert(player + " wins!");
          this.game = !this.game;
           this.resetBoard()
        }
        if (this.board[row][row] !== "" && this.board[row][row] === player) {
          mainDiag++;
          if (mainDiag === this.dimensioniBoard) {
            alert(player + " wins!");
            this.game = !this.game;
            this.resetBoard()
          }
        }
        if (
          this.board[row][this.dimensioniBoard - 1 - row] !== "" &&
          this.board[row][this.dimensioniBoard - 1 - row] === player
        ) {
          secDiag++;
          if (secDiag === this.dimensioniBoard) {
            alert(player + " wins!");
            this.game = !this.game;
             this.resetBoard()
          }
        }
      }
    },
    
    createBoard(dimensioniBoard) {
      let board = [];
      for (let i = 0; i < dimensioniBoard; i++) {
        const riga = [];
        for (let j = 0; j < dimensioniBoard; ++j) {
          riga[j] = "";
        }
        board[i] = riga;
      }
      return board;
    },
    
    resetBoard() {
      this.board = this.createBoard(this.dimensioniBoard);
    },
  },
};
</script>

