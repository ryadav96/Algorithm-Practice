
let ar = [
  [4,7,1,6],
  [5,7,3,9],
  [3,2,1,2],
  [7,1,6,3]
]

const numberOfPath = (cost, row, col,arr) => {
   if(cost<0) {
     return 0;
  }
   if(row===0 && col===0) {
   return cost===arr[0][0]?1:0;
}  

   if(row===0) {
    return numberOfPath(cost-arr[row][col], row,col-1,arr);
}

   if(col===0) {
    return numberOfPath(cost-arr[row][col], row-1,col,arr);
}
   let numOfPthasFromPresviousRow = numberOfPath(cost-arr[row][col], row-1,col,arr);
   let numOfPthasFromPresviousCol = numberOfPath(cost-arr[row][col], row,col-1,arr);

   return numOfPthasFromPresviousRow+numOfPthasFromPresviousCol;
}

numberOfPath(25, 3,3, ar);