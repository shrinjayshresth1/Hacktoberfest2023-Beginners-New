<!DOCTYPE html>
<html>
<head>
    <title>Tic-Tac-Toe Game</title>
    <style>
        .cell {
            width: 100px;
            height: 100px;
            text-align: center;
            font-size: 36px;
            cursor: pointer;
        }
    </style>
</head>
<body>
    <h1>Tic-Tac-Toe</h1>
    <div id="board">
        <div class="cell" onclick="makeMove(0)"></div>
        <div class="cell" onclick="makeMove(1)"></div>
        <div class="cell" onclick="makeMove(2)"></div>
        <div class="cell" onclick="makeMove(3)"></div>
        <div class="cell" onclick="makeMove(4)"></div>
        <div class="cell" onclick="makeMove(5)"></div>
        <div class="cell" onclick="makeMove(6)"></div>
        <div class="cell" onclick="makeMove(7)"></div>
        <div class="cell" onclick="makeMove(8)"></div>
    </div>
    <p id="message"></p>

    <script>
        const cells = document.querySelectorAll('.cell');
        let currentPlayer = 'X';
        let gameBoard = ['', '', '', '', '', '', '', '', ''];
        let gameActive = true;

        function makeMove(cellIndex) {
            if (gameBoard[cellIndex] === '' && gameActive) {
                gameBoard[cellIndex] = currentPlayer;
                cells[cellIndex].textContent = currentPlayer;
                checkWinner();
                currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
            }
        }

        const winCombinations = [
            [0, 1, 2], [3, 4, 5], [6, 7, 8], // Rows
            [0, 3, 6], [1, 4, 7], [2, 5, 8], // Columns
            [0, 4, 8], [2, 4, 6] // Diagonals
        ];

        function checkWinner() {
            for (const combo of winCombinations) {
                const [a, b, c] = combo;
                if (gameBoard[a] && gameBoard[a] === gameBoard[b] && gameBoard[a] === gameBoard[c]) {
                    gameActive = false;
                    document.getElementById('message').textContent = `Player ${gameBoard[a]} wins!`;
                    return;
                }
            }
            if (!gameBoard.includes('')) {
                gameActive = false;
                document.getElementById('message').textContent = 'It\'s a draw!';
            }
        }
    </script>
</body>
</html>
