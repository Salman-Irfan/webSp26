let count = 1

const news = document.getElementById("news")
news.innerHTML = `<h1>News Section</h1>`  


news.innerHTML = `<h1>News Section updated ${count} times</h1>`


const updateBtn = document.getElementById("updateBtn")
console.log(updateBtn)

const handleUpdate = () => {
    count++
    news.innerHTML = `<h1>News Section updated ${count} times</h1>`
}

updateBtn.addEventListener("click", handleUpdate)