module.exports = function towelSort (matrix) {
    if (matrix == undefined || matrix.length == 0) {
        return [];
    }
    if (matrix.length == 1) {
        return matrix;
    }

    let result = [];
    let reverse_flag = false;
  
    matrix.forEach(row => {
      if (!reverse_flag) {
        row.forEach( elem => result.push(elem) );
        reverse_flag = true;
      } else {
        row.reverse().forEach( elem => result.push(elem) );
        reverse_flag = false;
      }
    });
    
    return result;
  }
