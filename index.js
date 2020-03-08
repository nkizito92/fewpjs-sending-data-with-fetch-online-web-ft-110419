// Add your code here
function submitData(name, email) {
    let formData = {
        name: name,
        email: email
    };

    let configObj = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify(formData)
    };

    fetch("http://localhost:3000/users", configObj)
        .then(res => res.json())
        .then(obj => {
          const h1 = document.ge
        })
        .catch(error => {
          const body = document.querySelector("body");
          let div = document.createElement("div");
          div.innerHTML = error.message;
          err.appendChild(div);
        });

}