USE PiecesProviders;

-- Exercise 01
SELECT Code, Name FROM Providers
ORDER BY Name DESC
LIMIT 1;

-- Exercise 02
SELECT Piece, Price FROM Provides
ORDER BY Price DESC
LIMIT 5;

-- Exercise 03
SELECT DISTINCT Provider, Price FROM Provides
ORDER BY Price DESC
LIMIT 4
OFFSET 3;

-- Exercise 04
SELECT CONCAT('A peça mais cara é a: ', Piece, ', provida pela empresa ', Provider, ' e custa ', Price, ' reais.') as resultado FROM Provides
ORDER BY Price DESC
LIMIT 1;