import { blackPawn } from "../Data/pieces.js";
import { whitePawn } from "../Data/pieces.js";

const ROOT_DIV = document.getElementById("root");

function pieceRender(data) {
    data.forEach(row => {
        row.forEach((square) => {
            if(square.piece) {
                const squareEl = document.getElementById(square.id);

                //create piece
                const piece  = document.createElement("img");
                piece.src = square.piece.img;
                piece.classList.add("piece");
                
                //insert piece
                squareEl.appendChild(piece);
            }
        });
    });
}

function initGameRender(data) {
    
    data.forEach(element => {
        const rowEl = document.createElement("div");
        squareDiv.id = square.id;
        element.forEach((square) => {
            const squareDiv = document.createElement("div");
            squareDiv.classList.add(square.color, "square");
            //render black pawn
            if(square.id[1] == 7) {
                square.piece = blackPawn(square.id);
            }
            //render white pawn
            if(square.id[1] == 2) {
                square.piece = whitePawn(square.id);
            }
            rowEl.appendChild(squareDiv);
        });
        rowEl.classList.add("squareRow");
        ROOT_DIV.appendChild(rowEl);
    });

    pieceRender(data);
}

export {initGameRender};