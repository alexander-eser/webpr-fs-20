// todo: implement the times function

<<<<<<< HEAD
Number.prototype.times = function (callback) {
    return Array.from({length: this}).map((element, index) => callback(index));
=======
Number.prototype.times = function(callback) {
    return Array.from({length: this},(element,index)=> callback(index));
>>>>>>> upstream/master
}
