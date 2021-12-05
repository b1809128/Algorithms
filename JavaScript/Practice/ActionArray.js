const array = ["a", "b", "c", "d", "e"];

const removeArray = (id) => {
  const newArray = [...array].filter((data, index) => index !== id);
  console.log(newArray);
};

// removeArray(0)

const addArray = (value) => {
  const newArray = [value, ...array];
  console.log(newArray);
};
// addArray("huy");

const updateArray = (id, value) => {
  const newArray = [...array];
  let update = newArray.map((data, index) => {
    if (index == id) {
      data = value;
    }
    return data;
  });
  console.log(update);
};
// updateArray(2,"huy")

const completeWork = id =>{
  const newArray = [...array];
  let complete = newArray.map((data, index) => {
    if(index == id){
      data = "isComplete";
    }
    return data;
  })
  console.log(complete);
}

// completeWork(3)

const chooseId = id => {
  const newArray = [...array];
  let choose = newArray.map((data, index)=>{
    if(index == id){
      return data;
    }
  })
  console.log(choose);
}

chooseId(3)

// console.log(array);
