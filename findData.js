const findData = (str, subStr) => {
  const arrStrr = str.split(" ");
  return arrStrr.indexOf(subStr) !== -1;
};

console.log(findData("I belong to Pune city.", "Pune", "mumbai"));
