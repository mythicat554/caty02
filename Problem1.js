let A = "googlygoggles";
let B = "googly";
function findSubstring(A,B) {
  let C = A.split('');
  let D = B.split('');
  let array = new Array();
  let arraycounter = 0;
  for (let i=0; i<C.length; i++) {
    if(C[i]==D[i]) {
      array[arraycounter]=i;
      arraycounter++;
    }
  }
  var output = array.toString();
  console.log(output);
}
findSubstring(A,B);
