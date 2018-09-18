class Sorter {
  constructor() {
    this.mass = [];
    this.comparator = function(a1,a2){
      return (a1>a2)?1:-1;
    }
  }

  add(element) {
    this.mass.push(element);
  }

  at(index) {
    return this.mass[index];
  }

  get length() {
    return this.mass.length;
  }

  toArray() {
    return this.mass;
  }

  sort(indices) {
    var second = [];
    var qwe = indices;
    indices.sort(function(a1,a2){return (a1>a2)?1:-1});
    for(var i = 0; i<indices.length; i++){
      second.push(this.mass[indices[i]]);
    }
    second.sort(this.comparator);
    var j =0;
    for(var i = 0; i<indices.length; i++){
      this.mass[indices[i]] = second[i];
      j++;
    }
  }

  setComparator(compareFunction) {
    this.comparator = compareFunction;
  }
}

module.exports = Sorter;