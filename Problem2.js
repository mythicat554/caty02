let A = [1,2,3,4];
let B = [1,3,5];
function split(A,B) {
  let same = new Array();
  let different = new Array();
  let sameCounter = 0;
  let diffCounter = 0;

  if (A.length<=B.length) {
    let isSame=false;
    for (let i=0; i<B.length; i++) {
      isSame=false;
      for (let j=0; j<A.length; j++) {
        if (B[i]==A[j]) {
          isSame=true;
         }
       }
       if (isSame==true) {
         same[sameCounter] = B[i];
         sameCounter++;
       }
       else if (isSame==false){
           different[diffCounter]=B[i];
           diffCounter++;
         }
       }
     }



  if (B.length<A.length) {
    let isSame1=false;
    for (let i=0; i<A.length; i++) {
      isSame1=false;
       for (let j=0; j<B.length; j++) {
         if (A[i]==B[j]) {
           isSame1=true;
         }
       }
       if (isSame1==true) {
         same[sameCounter] = A[i];
         sameCounter++;
       }
       else if (isSame1==false){
          different[diffCounter]=A[i];
          diffCounter++;
       }
     }
  }

  var output1 = same.toString();
  var output2 = different.toString();
  console.log(output1);
  console.log(output2);

}
split(A,B);
