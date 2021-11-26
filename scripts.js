let count = 0
function increment() {
    count = count + 1
    document.getElementById("count_h2").innerText = count
}

function reset() {
    count = 0
    document.getElementById("count_h2").innerText = count
}

function gotOff() {
    let count = document.getElementById("count_h2").innerText
    if (count == 0){
        alert('There is no one in the bus!!')}
    else {
        count = count - 1
    }
    document.getElementById("count_h2").innerText = count
}

function reset() {
    count = 0
    document.getElementById("count_h2").innerText = count
}

function save() {
    console.log(count)
}
