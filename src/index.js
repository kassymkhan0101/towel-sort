
// You should implement your task here.

module.exports = function towelSort (matrix) {
    var c = [];
    if(!matrix || matrix.length == 0){
    return c;}
    else{
        console.log("-----Start-----");
        console.log(matrix)
    for(i=0; i<matrix.length; i++){
        if(i+1%2==1){
           for(j=0; j<matrix[i].length; j++){
               c.push(matrix[i][j])
           }}else{
               for(k=matrix[i].length-1; k>=0; k--){
               c.push(matrix[i][k])
           }
        }
        
    }
        console.log(c);
        console.log("-----End-----");
        return c;
    }
}
