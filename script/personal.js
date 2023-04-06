const url = "https://randomuser.me/api/?results=15"
const personal = document.getElementById("personal")

fetch(url)
    .then(function(response) { return response.json() })
    .then(function(data){

        let users = data.results;

        users.map(function(user)
        {
            console.log(user)

            let card = document.createElement("div")
            card.setAttribute("class", "card")

            let picture = document.createElement("img")
            picture.src = user.picture.large 

            let name = document.createElement("p")
            name.innerHTML = user.name.first + " " + user.name.last

            let gender = document.createElement("p")
            gender.innerHTML = user.gender

            let location = document.createElement("p")
            location.innerHTML = user.location.street.number

            let phone = document.createElement("p")
            phone.innerHTML = user.phone

            let likebutton = document.createElement("input")
            likebutton.setAttribute("type", "button")
            likebutton.setAttribute("value", "Send <3")
            likebutton.setAttribute("onclick", "givelike(" + user.name + ")")
            
            card.appendChild(picture)
            card.appendChild(name)
            card.appendChild(gender)
            card.appendChild(location)
            card.appendChild(phone)
            card.appendChild(likebutton)
            personal.appendChild(card)
        })
    })

    function givelike(name)
    {
        alert("Gillade: " + name)
    }