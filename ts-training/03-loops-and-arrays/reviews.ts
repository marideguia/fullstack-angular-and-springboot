let reviews: number[] = [77,2,3,4,5];

let total:number = 0;

for(let i=0; i< reviews.length; i++){
    console.log(reviews[i]);
    total+=reviews[i];
}

let average:number = total / reviews.length;

console.log(average);

// for (let review in reviews) {
//     console.log(review);
// }