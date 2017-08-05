let update = document.getElementById('update')
let del = document.getElementById('delete')

//Replace last quote by Master Yoda with Lord Vader
update.addEventListener('click', function () {
  fetch('quotes', {
    method: 'put',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify({
      'name': 'Darth Vader',
      'quote': 'I find your lack of faith disturbing.'
    })
  })
  .then(response => {
    if (response.ok) return response.json()
  })
  .then(data => {
    console.log(data)
  })
})

//Delete Last quote by Darth Vader
del.addEventListener('click', function () {
  fetch('quotes', {
    method: 'delete',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      'name': 'Darth Vader'
    })
  }).then(function (response) {
    window.location.reload()
  })
})
