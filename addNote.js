var addBtn = document.getElementById('add');
var title = document.getElementById('title');
var desc = document.getElementById('desc');
var date = document.getElementById('date');

addBtn.addEventListener('click', (e) => {
  e.preventDefault();
  var xhr = new XMLHttpRequest();

  var data = JSON.stringify({
    title: title.value,
    description: desc.value,
    modifiedAt: date.value,
  });

  xhr.open('POST', 'http://localhost:3000/notes');
  xhr.setRequestHeader('Content-Type', 'application/json');

  xhr.addEventListener('readystatechange', () => {
    if (xhr.readyState == 4 && xhr.status == 201) {
      console.log('Response: ', xhr.responseText);
      window.close();
    }
  });

  xhr.send(data);
  //!validation
});
