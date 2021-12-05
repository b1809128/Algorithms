const pagesNumbering = (n) => {
    var s = "";
    for (let i = 1; i <= n; i++) {
        s+=i;
        // console.log(i.toString());
    }
    console.log(s.length);
}

pagesNumbering(1100000)