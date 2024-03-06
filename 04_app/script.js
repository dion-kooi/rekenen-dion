let inp_A1 = document.getElementById("inp_A1")
let inp_D1 = document.getElementById("inp_D1")
let inp_D2 = document.getElementById("inp_D2")
let inp_D3 = document.getElementById("inp_D3")
let inp_C4 = document.getElementById("inp_C4")
let inp_B4 = document.getElementById("inp_B4")

let opl_B2 = document.getElementById("opl_B2")
let opl_C2 = document.getElementById("opl_C2")
let opl_B3 = document.getElementById("opl_B3")
let opl_C3 = document.getElementById("opl_C3")

function solveProblem() {
        let gokje = 1;
        let decision = true;
        while( decision ){
    opl_B2.value = parseInt(gokje);
    opl_C2.value = parseInt(inp_D2.value) - parseInt(opl_B2.value);
    opl_B3.value = parseInt(inp_B4.value) - parseInt(opl_B2.value);
    opl_C3.value = parseInt(inp_D3.value) - parseInt(opl_B3.value);

    if (
        parseInt(opl_B3.value) + parseInt(opl_C2.value) === parseInt(inp_D1.value) &&
        parseInt(opl_C3.value) + parseInt(opl_B2.value) === parseInt(inp_A1.value) &&
        parseInt(opl_C2.value) + parseInt(opl_C3.value) === parseInt(inp_C4.value)

    ) {
        // alert("bingo");
        decision = false;
    } else {
        // alert("kak");
        gokje++;
    }
}
}

        