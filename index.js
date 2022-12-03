let form = document.querySelector("form")
let ul = document.querySelector("ul")
let input = document.querySelector("#username")
let contact = document.querySelector("#contact")

// console.log(form)


form.addEventListener("submit", saveTodo)


function saveTodo(e) {
    e.preventDefault()
    if (input.value === "") {
        window.alert("Please Type Something")
    } else if (contact.value === "") {
        window.alert("mobile no is necessary")
    } else {
        let NewLi = document.createElement("li")
        NewLi.className = "container list-group-item rounded-0 w-50 mt-2",
            NewLi.innerText = input.value
        ul.appendChild(NewLi)
        // let delBtn = document.createElement("button")
        // delBtn.className = "btn btn-danger btn-sm rounded-0 float-end"
        // delBtn.innerText = "Delete"
        // NewLi.appendChild(delBtn)



        let Newlino = document.createElement("li")
        Newlino.className = "container list-group-item rounded-0 mt-2 w-50",
            Newlino.innerText = contact.value
        ul.appendChild(Newlino)
        // let delBtn = document.createElement("button")
        // delBtn.className = "btn btn-danger btn-sm rounded-0 float-end"
        // delBtn.innerText = "Delete"
        // NewLi.appendChild(delBtn)


        let callbtn = document.createElement("button")
        callbtn.className = "container rounded-5 py-1 px-1 border-0 bg-success w-25 mt-3 mb-2 text-center "
        ul.appendChild(callbtn)
        let calllink = document.createElement("a")
        let no = `tel:${contact.value}`
        calllink.setAttribute("href", no)
        calllink.className = "text-decoration-none text-light"
        calllink.innerText = "Call"
        callbtn.appendChild(calllink)

        let linebreak = document.createElement("hr")
        linebreak.className = "text-light"
        ul.appendChild(linebreak)
        form.reset()
    }
}


ul.addEventListener("click", deleteTodo)

// Function to delete todo

function deleteTodo(e) {
    // Check if element contains "btn-danger" class
    if (e.target.className.includes("btn-danger")) {
        // Select Parent Element Of Button
        let li = e.target.parentElement
        // Remove li form ul
        ul.removeChild(li)
    }
}





