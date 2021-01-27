
// You should implement your task here.

module.exports = function towelSort (matrix) {
  if(matrix.length == 0){
  return 0}else{var c = []
  for(i=1; i< matrix.length+1; i++){
      if(i%2 == 1){
      for(k=1; k< i.length; k++){
          c.push[i[k]]
      }}
      else{
      for(k=i.length; k>0; k--){
          c.push[i[k]]
      }}
  }
    return c;}
}
