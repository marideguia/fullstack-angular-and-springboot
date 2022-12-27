var reviews = [77, 2, 3, 4, 5];
var total = 0;
for (var i = 0; i < reviews.length; i++) {
    console.log(reviews[i]);
    total += reviews[i];
}
var average = total / reviews.length;
console.log(average);
// for (let review in reviews) {
//     console.log(review);
// }
