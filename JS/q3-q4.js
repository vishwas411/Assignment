const groupObjectsBy = function (arrayOfJSONObj, Key) {
    let ans = {};
    arrayOfJSONObj.forEach((element) => {
      const newArray = arrayOfJSONObj.filter((tempElement) => tempElement[Key] === element[Key]);
      ans[element[Key]] = newArray;
    });
    return ans;
  };
  
  const x = groupObjectsBy(
    [
      {
        channel: "A",
        name: "shoe",
      },
      {
        channel: "A",
        name: "electronics",
      },
      {
        channel: "B",
        name: "apparel",
      },
      {
        channel: "C",
        name: "electronics",
      },
    ],
    "channel"
  );
  console.log(x);