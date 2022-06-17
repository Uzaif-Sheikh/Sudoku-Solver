var btn = document.getElementById("solve");
console.log(btn);
btn.addEventListener("click", () => {
    const _board = [
        ['5', '3', '.', '.', '7', '.', '.', '.', '.'],
        ['6', '.', '.', '1', '9', '5', '.', '.', '.'],
        ['.', '9', '8', '.', '.', '.', '.', '6', '.'],
        ['8', '.', '.', '.', '6', '.', '.', '.', '3'],
        ['4', '.', '.', '8', '.', '3', '.', '.', '1'],
        ['7', '.', '.', '.', '2', '.', '.', '.', '6'],
        ['.', '6', '.', '.', '.', '.', '2', '8', '.'],
        ['.', '.', '.', '4', '1', '9', '.', '.', '5'],
        ['.', '.', '.', '.', '8', '.', '.', '7', '9'],
    ];
    sodokoSolver(_board);
    console.log(_board);

    document.getElementById("cell-2").value = _board[0][2];
    document.getElementById("cell-2").classList.add("greenClass");
    document.getElementById("cell-3").value = _board[0][3];
    document.getElementById("cell-3").classList.add("greenClass");
    document.getElementById("cell-5").value = _board[0][5];
    document.getElementById("cell-5").classList.add("greenClass");
    document.getElementById("cell-6").value = _board[0][6];
    document.getElementById("cell-6").classList.add("greenClass");
    document.getElementById("cell-7").value = _board[0][7];
    document.getElementById("cell-7").classList.add("greenClass");
    document.getElementById("cell-8").value = _board[0][8];
    document.getElementById("cell-8").classList.add("greenClass");
    document.getElementById("cell-10").value = _board[1][1];
    document.getElementById("cell-10").classList.add("greenClass");
    document.getElementById("cell-11").value = _board[1][2];
    document.getElementById("cell-11").classList.add("greenClass");
    document.getElementById("cell-15").value = _board[1][6];
    document.getElementById("cell-15").classList.add("greenClass");
    document.getElementById("cell-16").value = _board[1][7];
    document.getElementById("cell-16").classList.add("greenClass");
    document.getElementById("cell-17").value = _board[1][8];
    document.getElementById("cell-17").classList.add("greenClass");
    document.getElementById("cell-18").value = _board[2][0];
    document.getElementById("cell-18").classList.add("greenClass");
    document.getElementById("cell-21").value = _board[2][3];
    document.getElementById("cell-21").classList.add("greenClass");
    document.getElementById("cell-22").value = _board[2][4];
    document.getElementById("cell-22").classList.add("greenClass");
    document.getElementById("cell-23").value = _board[2][5];
    document.getElementById("cell-23").classList.add("greenClass");
    document.getElementById("cell-24").value = _board[2][6];
    document.getElementById("cell-24").classList.add("greenClass");
    document.getElementById("cell-26").value = _board[2][7];
    document.getElementById("cell-26").classList.add("greenClass");
    document.getElementById("cell-28").value = _board[3][1];
    document.getElementById("cell-28").classList.add("greenClass");
    document.getElementById("cell-29").value = _board[3][2];
    document.getElementById("cell-29").classList.add("greenClass");
    document.getElementById("cell-30").value = _board[3][3];
    document.getElementById("cell-30").classList.add("greenClass");
    document.getElementById("cell-32").value = _board[3][5];
    document.getElementById("cell-32").classList.add("greenClass");
    document.getElementById("cell-33").value = _board[3][6];
    document.getElementById("cell-33").classList.add("greenClass");
    document.getElementById("cell-34").value = _board[3][7];
    document.getElementById("cell-34").classList.add("greenClass");
    document.getElementById("cell-37").value = _board[4][1];
    document.getElementById("cell-37").classList.add("greenClass");
    document.getElementById("cell-38").value = _board[4][2];
    document.getElementById("cell-38").classList.add("greenClass");
    document.getElementById("cell-40").value = _board[4][4];
    document.getElementById("cell-40").classList.add("greenClass");
    document.getElementById("cell-42").value = _board[4][5];
    document.getElementById("cell-42").classList.add("greenClass");
    document.getElementById("cell-43").value = _board[4][6];
    document.getElementById("cell-43").classList.add("greenClass");
    document.getElementById("cell-46").value = _board[5][1];
    document.getElementById("cell-46").classList.add("greenClass");
    document.getElementById("cell-47").value = _board[5][2];
    document.getElementById("cell-47").classList.add("greenClass");
    document.getElementById("cell-48").value = _board[5][3];
    document.getElementById("cell-48").classList.add("greenClass");
    document.getElementById("cell-50").value = _board[5][5];
    document.getElementById("cell-50").classList.add("greenClass");
    document.getElementById("cell-51").value = _board[5][5];
    document.getElementById("cell-51").classList.add("greenClass");
    document.getElementById("cell-52").value = _board[5][5];
    document.getElementById("cell-52").classList.add("greenClass");
    document.getElementById("cell-54").value = _board[6][0];
    document.getElementById("cell-54").classList.add("greenClass");
    document.getElementById("cell-56").value = _board[6][2];
    document.getElementById("cell-56").classList.add("greenClass");
    document.getElementById("cell-57").value = _board[6][3];
    document.getElementById("cell-57").classList.add("greenClass");
    document.getElementById("cell-58").value = _board[6][4];
    document.getElementById("cell-58").classList.add("greenClass");
    document.getElementById("cell-59").value = _board[6][5];
    document.getElementById("cell-59").classList.add("greenClass");
    document.getElementById("cell-62").value = _board[6][7];
    document.getElementById("cell-62").classList.add("greenClass");
    document.getElementById("cell-63").value = _board[7][0];
    document.getElementById("cell-63").classList.add("greenClass");
    document.getElementById("cell-64").value = _board[7][1];
    document.getElementById("cell-64").classList.add("greenClass");
    document.getElementById("cell-65").value = _board[7][2];
    document.getElementById("cell-65").classList.add("greenClass");
    document.getElementById("cell-69").value = _board[7][5];
    document.getElementById("cell-69").classList.add("greenClass");
    document.getElementById("cell-70").value = _board[7][6];
    document.getElementById("cell-70").classList.add("greenClass");
    document.getElementById("cell-72").value = _board[8][0];
    document.getElementById("cell-72").classList.add("greenClass");
    document.getElementById("cell-73").value = _board[8][1];
    document.getElementById("cell-73").classList.add("greenClass");
    document.getElementById("cell-74").value = _board[8][2];
    document.getElementById("cell-74").classList.add("greenClass");
    document.getElementById("cell-75").value = _board[8][3];
    document.getElementById("cell-75").classList.add("greenClass");
    document.getElementById("cell-77").value = _board[8][5];
    document.getElementById("cell-77").classList.add("greenClass");
    document.getElementById("cell-78").value = _board[8][6];
    document.getElementById("cell-78").classList.add("greenClass");

    function isValid(board, row, col, k) {
        for (let i = 0; i < 9; i++) {
            const m = 3 * Math.floor(row / 3) + Math.floor(i / 3);
            const n = 3 * Math.floor(col / 3) + i % 3;
            if (board[row][i] == k || board[i][col] == k || board[m][n] == k) {
                return false;
            }
        }
        return true;
    }


    function sodokoSolver(data) {
        for (let i = 0; i < 9; i++) {
            for (let j = 0; j < 9; j++) {
                if (data[i][j] == '.') {
                    for (let k = 1; k <= 9; k++) {
                        if (isValid(data, i, j, k)) {
                            data[i][j] = `${k}`;
                            if (sodokoSolver(data)) {
                                return true;
                            } else {
                                data[i][j] = '.';
                            }
                        }
                    }
                    return false;
                }
            }
        }
        return true;
    }

});