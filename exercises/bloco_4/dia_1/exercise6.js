let chessPiece = "knight";

switch (chessPiece.toLowerCase()) {
    case "king":
        console.log("King => One square in any direction");
        break;
    case "bishop":
        console.log("Bishop => Diagonally only");
        break;
    case "rook":
        console.log("Rook => Horizontally and vertically");
        break;
    case "knight":
        console.log("Knight => 'L' movement");
        break;
    case "queen":
        console.log("Queen => Horizontally, vertically and diagonally");
        break;
    case 'pawn':
        console.log("Pawn => One square forward (Two squares if first movement");
        break;
    default:
        console.log("Invalid piece! Try again.");
        break;
}
