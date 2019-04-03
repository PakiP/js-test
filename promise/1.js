new Promise(function(resolve, reject) {
  var timeOut = Math.random() * 2;
  console.log('set timeout to: ' + timeOut + 'seconds');
  setTimeout(function() {
    if (timeOut < 1) {
      console.log('call resolve');
      resolve('200 ok');
    } else {
      console.log('call reject');
      reject('timeout in: ' + timeOut + 'seconds');
    }
  }, timeOut * 1000);
}).then(function(res) {
  console.log('success ' + res);
}).catch(function(error) {
  console.log('failed ' + error);
})