const transpose = function(matrix) {
    let newArray = [];
    let numPlaceholders = 0; 
    
    for (let i = 0; i < matrix.length; i++) {
       numPlaceholders = matrix[i].length;
    }
    for (let j = 0; j < numPlaceholders; j++){
        newArray.push([]);
    }
    for (let j = 0; j < newArray.length; j++) { 
      for (let x = 0; x < matrix.length; x++) { 
        newArray[j].push(matrix[x][j]); 
    }
  }
  return newArray;
};

const wordSearch = (letters, word) => { 
    let transposedLetters = transpose(letters);
    const horizontalJoin = letters.map(ls => ls.join(''));
    const verticalJoin = transposedLetters.map(ls => ls.join(''));
    
    for (row of horizontalJoin) { 
        if (row.includes(word)) {
            return true;
        }     
    }
    for (element of verticalJoin) {
        if (element.includes(word)) {
            return true;
        }
    }
    return false;
};

module.exports = wordSearch