// Add your code here
function submitData(name, email){
    return fetch('http://localhost:3000/users', {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            Accept: "application/json"
        },
        body: JSON.stringify({
            name: name,
            email: email
        })
    })
    .then(function (response){
        return response.json();
    })
    .then(function (obj){
        document.querySelector('body').append(obj.id);
    })
    .catch(function (obj){
        document.querySelector('body').append(obj.message);
    });
}