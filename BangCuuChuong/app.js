function table() {
    let board;
    board = "<table border='1' border-collapse='collapse' width='100%'";
    for (let rows = 1; rows < 10; rows++) {
        board = board + "<tr>";
        for (let column = 1; column < 10; column++) {
            board = board + "<td>" + column + "x" + rows + "=" + rows * column + "</td>" ;
        }
        board = board + "</tr>";
    }
    board = board + "</table>";
    document.getElementById("result").innerHTML = board;
}
