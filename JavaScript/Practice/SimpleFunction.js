class SimpleFunction {
  constructor(data) {
    this.data = data;
  }
  //Select like order by value of object
  mapArray() {
    var array = [
      {
        id: 1,
        name: "QuocHuy",
      },
      { id: 2, name: "ThaoAnh" },
    ];

    const testArray = array.map((data) => {
      return data.name;
    });
    console.log(testArray);
  }

  //Select distinct values of object, get by id
  filterArray(id) {
    var array = [
        {
          id: 1,
          name: "QuocHuy",
        },
        { id: 2, name: "ThaoAnh" },
      ];
    
      const testArray = array.filter((data) => {return data.id == id})
    //   const testArray = array.filter((data) => {return data.name != "QuocHuy"})
      console.log(testArray);
  }

  reduceArray() {
    var array = [
        100000001,100000002, 100000003, 100000004, 100000005
      ];
    
      const testArray = array.reduce((data, currentNums) => {return data+currentNums})
      console.log(testArray);
  }
}

const qh = new SimpleFunction();
qh.mapArray()
qh.filterArray(1)
qh.reduceArray()