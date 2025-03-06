document.getElementById('content').addEventListener('submit', function(event) {
  var username = document.getElementById('username').value;
  if (username === '') {
    event.preventDefault();
    alert('Please enter your username');
  } else {
    alert("Congratulations on Joining the LeBron SuperFan Club!");
    }
  });
