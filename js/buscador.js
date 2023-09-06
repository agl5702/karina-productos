document.addEventListener("keyup", e => {

    if (e.target.matches("#buscador")) {

        document.querySelectorAll(".card").forEach(c => {

            c.textContent.toLowerCase().includes(e.target.value.toLowerCase()) ?
                c.classList.remove("filtro") :
                c.classList.add("filtro")

        })

    }

})