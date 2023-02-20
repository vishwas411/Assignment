const SortArray = function(originalArray){
  
  this.originalArray = originalArray;

  this.PrivateSortingFunction = function(){
    this.originalArray.sort();
    return this.originalArray;
  }

}

SortArray.prototype.getSortedArray = function(){
  this.PrivateSortingFunction();
  return this.originalArray;
}

/////////////////////////////

const SortObjectArray = function(originalArray){
  
  SortArray.call(this,originalArray);
  this.originalArray = originalArray;
  
  this.getSortedArray = function() {
    return this.originalArray.sort((a, b) => a.value - b.value);
  }


}

SortObjectArray.prototype = Object.create(SortArray.prototype);



////////////////////////////////


const fruits = new SortArray(["Banana", "Orange", "Apple", "Mango"]);

const objects = [{value: 3}, {value: 1}, {value: 4}];
const sortObjectArray = new SortObjectArray(objects);

console.log(fruits.getSortedArray());
console.log(sortObjectArray.getSortedArray());



