// function addingEventListener() {
//  alert("I was clicked")}

// The following returns a false when test is run instead of true.
//  const input = document.getElementById("button").addEventListener("click", addingEventListener, true)

//  button.onclick = addingEventListener;
// button.addEventListener (alert, addingEventListener);


const input = document.getElementById('button');
function addingEventListener() {
    input.addEventListener('click', function() {
        alert('I was clicked!');
      })
};

// input.addEventListener('click', function() {
//   alert('I was clicked!');
// });