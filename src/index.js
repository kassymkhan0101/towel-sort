
// You should implement your task here.

module.exports = function towelSort (matrix) {
    var c = []
  if(matrix.length == 0){
  return c}else{
  for(i=1; i< matrix.length+1; i++){
      if(i%2 == 1){
      for(k=1; k< i.length; k++){
          c.push(i[k])
      }}
      else{
      for(k=i.length; k>0; k--){
          c.push(i[k])
      }}
  }
    console.log("my ans is ", c)}
}
