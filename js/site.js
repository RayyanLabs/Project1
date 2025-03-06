document.getElementById('content').addEventListener('submit', function(event) {
  var checkbox = document.getElementById('Is-Lebron-James-The-Goat');
  if (!checkbox.checked) {
    event.preventDefault();
    alert('You Must Accept Lebron Is The Goat To Join The Club!');
  } else {
    alert("Congratulations on Joining the LeBron SuperFan Club!");
    }
  });
