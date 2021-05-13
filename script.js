var  libButton = document.getElementById('lib-button');

var sendIt = function() {
    var sentenceContent = document.getElementById('sentence');

      var someName = document.getElementById('person').value;
      var noun = document.getElementById('noun').value;
      var adjective = document.getElementById('adjective').value;

    sentenceContent.innerHTML = `Hello ${someName} is in ${noun} and is ${adjective}`;  

};


libButton.addEventListener('click', sendIt);