import * as piece from "../Data/pieces.js";
import { ROOT_DIV } from "../Helper/constants.js";

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
            //render black Pawn
            if(square.id[1] == 7) {
                square.piece = piece.blackPawn(square.id);
            }
            //render black Rook
            if(square.id == "h8" || square.id == "a8") {
                square.piece = piece.blackRook(square.id);
            }
            //render black Knight
            if(square.id == "b8" || square.id == "g8") {
                square.piece = piece.blackKnight(square.id);
            }
            //render black Bishop
            if(square.id == "c8" || square.id == "f8") {
                square.piece = piece.blackBishop(square.id);
            }
            //render black Queen
            if(square.id == "d8") {
                square.piece = piece.blackQueen(square.id);
            }
            //render black King
            if(square.id == "e8") {
                square.piece = piece.blackKing(square.id);
            }
            //render white Pawn
            if(square.id[1] == 2) {
                square.piece = piece.whitePawn(square.id);
            }
            //render white Queen
            if(square.id == "d1") {
                square.piece = piece.whiteQueen(square.id);
            }
            //render white King
            if(square.id == "e1") {
                square.piece = piece.whiteKing(square.id);
            }
            //render white Rook
            if(square.id == "h1" || square.id == "a1") {
                square.piece = piece.whiteRook(square.id);
            }
            //render white Knight
            if(square.id == "b1" || square.id == "g1") {
                square.piece = piece.whiteKnight(square.id);
            }
            //render white Bishop
            if(square.id == "c1" || square.id == "f1") {
                square.piece = piece.whiteBishop(square.id);
            }
            rowEl.appendChild(squareDiv);
        });
        rowEl.classList.add("squareRow");
        ROOT_DIV.appendChild(rowEl);
    });

    pieceRender(data);
}

export {initGameRender};