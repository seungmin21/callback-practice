function four(number, callback) {
  return callback(number)
}

const fourResult = four(1, function(number) {
  return number / 10
})

console.log(fourResult)