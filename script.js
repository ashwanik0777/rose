window.onload = function() {
    var h1Text = document.getElementById('animated-text');
    var words = h1Text.innerText.split(' ');
    
    h1Text.innerHTML = '';
    words.forEach(function(word) {
      var span = document.createElement('span');
      span.innerText = word;
      h1Text.appendChild(span);
      h1Text.innerHTML += ' ';
    });
  };
  