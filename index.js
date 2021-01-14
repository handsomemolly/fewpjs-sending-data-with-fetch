// Add your code here
function submitData() {
    return fetch('http://localhost:3000/users', configurationObject).then(function(response) {
        return response.json()
    })
    .then(function(object) {
        document.body.innerHTML = object.id
    })
    .catch(function(error) {
        alert("Whoopsy Daisy")
        document.body.innerHTML = error.message
    })
}

let configurationObject = {
    method: "POST",
    headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
    },
    body: JSON.stringify({
        name: "Steve",
        email: "steve@steve.com"
    })
}