
buildmenu()

function buildmenu()
{
    document.getElementById("menyn").innerHTML = ""
    let links = [
        ["Start", "index.html"],
        ["Produkter", "produktsida.html"],
        ["Kontakta oss", "kontaktaoss.html"],
        ["Kontaktformulär", "kontaktformulär.html"],
        ["Media", "media.html"]
    ]

    for(let i = 0; i < links.length; i++)
    {
        // <li><a href="">Länk</a></li>
        
        let listitem = document.createElement("li")
        let link = document.createElement("a")
        link.href = links[i][1]
        link.appendChild(document.createTextNode(links[i][0]))
        listitem.appendChild(link)
        document.getElementById("menyn").appendChild(listitem)
    }
}