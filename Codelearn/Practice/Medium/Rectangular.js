const rectangular = (s1,s2,s3)=>{
    var a,b,h;
    b = Math.sqrt((s3*s2)/s1);
    h  = s2/b;
    a = (s1/h);

    console.log(4*(a+b+h));
}

rectangular(20,10,50)