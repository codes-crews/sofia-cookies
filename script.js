function pindah() {
    window.location.assign("buy.html");
}

function process() {
    var packages = document.getElementById("package").value;
    console.log(packages)
    var num_of_people = document.getElementById("num-of-people").value
    console.log(num_of_people)


    var totalharga = packages * num_of_people;

    document.getElementById("total").innerHTML = totalharga;
    setTimeout(() => {
        alert("Thank You!")
        window.location.assign("index.html")
        }, 3000)
}

