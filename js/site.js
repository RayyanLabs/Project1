document.getElementById('content').addEventListener('submit', function(event) {
  var checkbox = document.getElementById('is-lebron-james-the-goat');
  if (!checkbox.checked) {
    event.preventDefault();
    alert('You Must Accept Lebron Is The Goat To Join The Club!');
  } else {
    alert("Congratulations on Joining the LeBron SuperFan Club!");
    }
  });
