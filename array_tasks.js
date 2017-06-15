var arrayTasks = {

	concat: function (arr1, arr2) {
		return arr1.concat(arr2);
	},

	insertAt: function (arr, itemToAdd, index) {
		arr.splice(index, 0, itemToAdd);
		return arr;
	},

	square: function (arr) {
		  return arr.map(function (x) {
		    return Math.pow(x, 2);
		  });

	},

	sum: function (arr) {
		return arr.reduce(function(all, item) {
			return all + item;
		},0 )
	},

	findDuplicates: function (arr) {
		
	//nested loops 1st forEach will compare each item with the item from the second loop which is one index ahead. If they are the equal and also does not exist in the duplicates array, it will be pushed into it.  

			var duplicates = []
			arr.forEach(function (item, index, array) {
				for (var j = index+1; j < arr.length; j++) {
					if (item === arr[j] && !duplicates.includes(item)) {
						duplicates.push(item)
						break
					}
				}
			})
			return duplicates
		},


	removeAndClone: function (arr, valueToRemove) {

	// array and valuetoRemove are passed in and the for each grabs hold of each item in the array and compares it with this value.  If the item os not equal to og array it is pushed into the clonedArray.  

		var clonedArray = []
			arr.forEach(function (item) {
				if (item !== valueToRemove) clonedArray.push(item)
			})
			return clonedArray
	},

	findIndexesOf: function (arr, numberToFindIndexOf) {
		var newArray = []
			arr.forEach(function (item, index) {
				if (item === numberToFindIndexOf) newArray.push(index)
			})
		return newArray
	
	},

	sumOfAllEvenNumbersSquared: function (arr) {
		var filterArray = arr.filter(function(item) {
			return item % 2 === 0; 
		})
		var squaredArray = arrayTasks.square(filterArray);
		var summedArray = arrayTasks.sum(squaredArray);
		return summedArray; 
	}

};

module.exports = arrayTasks
