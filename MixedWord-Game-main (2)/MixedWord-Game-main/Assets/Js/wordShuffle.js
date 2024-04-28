function shuffle() {
    document.getElementById("output").value = "";

    let parola = document.getElementById("input").value;
    let output = document.getElementById("output").value;
    let l = parola.length;
    let ll = l;
    const parolArray = [];

    for (let i = 0; i < l; i++) {
      parolArray[i] = parola.at(i);
    }
    for (let i = 0; i < l; i++) {
      let num = Math.floor(Math.random() * ll);
      output += parolArray[num].toUpperCase();
      parolArray.splice(num, 1);
      ll--;
    }
    if (output.toUpperCase() != parola.toUpperCase()) {
      document.getElementById("output").value = output;
    } else {
      shuffle();
    }
}