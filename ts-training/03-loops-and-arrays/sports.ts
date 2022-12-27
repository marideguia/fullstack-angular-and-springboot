let sports: string[] = ['golf', 'cricket', 'tennis', 'swimming'];

for (let temp of sports) {
    if (temp == 'swimming') {
        console.log(temp + '<<my fave!');
    } else {
        console.log(temp);
    }
}