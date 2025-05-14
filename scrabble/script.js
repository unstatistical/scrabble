var board = [[], [], [], [], [], [], [], [], [], [], [], [], [], [], []];
var container = [];

var bag = [];
var tiles = [];

var bonuses = {
    "dl": [
        [3, 0],
        [11, 0],
        [6, 2],
        [8, 2],
        [0, 3],
        [7, 3],
        [14, 3],
        [2, 6],
        [6, 6],
        [8, 6],
        [12, 6],
        [3, 7],
        [11, 7],
        [2, 8],
        [6, 8],
        [8, 8],
        [12, 8],
        [0, 11],
        [7, 11],
        [6, 12],
        [8, 12],
        [3, 14],
        [11, 14]
    ],
    "dw": [
        [1, 1],
        [13, 1],
        [2, 2],
        [12, 2],
        [3, 3],
        [11, 3],
        [4, 4],
        [10, 4],
        [7, 7],
        [10, 10],
        [4, 10],
        [11, 11],
        [3, 11],
        [12, 12],
        [2, 12],
        [13, 13],
        [1, 13],
    ],
    "tl": [
        [5, 1],
        [9, 1],
        [1, 5],
        [5, 5],
        [9, 5],
        [13, 5],
        [1, 9],
        [5, 9],
        [9, 9],
        [13, 9],
        [5, 13],
        [9, 13]
    ],
    "tw": [
        [0, 0],
        [7, 0],
        [14, 0],
        [0, 7],
        [14, 7],
        [0, 14],
        [7, 14],
        [14, 14]
    ]
}

window.onload = setup;

function setupBoard() {
    var table = document.createElement("table");
    table.classList.add("board");
    document.body.appendChild(table);
    for (var y = 0; y < 15; y++) {
        const row = document.createElement("tr");
        table.appendChild(row);
        for (var x = 0; x < 15; x++) {
            const cell = document.createElement("td");
            row.appendChild(cell);
            board[y][x] = cell;
        }
    }
    for (var type in bonuses) {
        var locations = bonuses[type];
        for (var i = 0; i < locations.length; i++) {
            const location = locations[i];
            const x = location[0];
            const y = location[1];
            if (board[y] && board[y][x]) {
                board[y][x].classList.add(type);
            }
        }
    }
}

function setupContainer() {
    table = document.createElement("table");
    table.classList.add("container");
    document.body.appendChild(table);
    const row = document.createElement("tr");
    table.appendChild(row);
    for (var i = 0; i < 7; i++) {
        const cell = document.createElement("td");
        row.appendChild(cell);
        container[i] = cell;
    }
}

function setup() {
    setupBoard();
    setupContainer();
}