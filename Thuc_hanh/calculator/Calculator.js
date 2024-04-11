function clickButton1() {
    // lay du lieu tu o input ra
    let bieuThuc = document.getElementById("print").value
    // them so 1 vao
    bieuThuc += 1;
    // dien lai vao o input
    document.getElementById("print").value = bieuThuc;
}
function clickButton(newValue) {
    // lay du lieu tu o input ra
    let newValue = document.getElementById("print").value
    // them so 1 vao
    bieuThuc += newValue;
    // dien lai vao o input
    document.getElementById("print").value = bieuThuc;
    }
//tinh ket qua
function getResult() {
    //lay du lieu tu o input
    let bieuThuc = document.getElementById("print").value;
    //tinh toan bang eval
    let result = eval(bieuThuc);
    //in ket qua
    document.getElementById("print").value = result;
    }
function clear(){
    document.getElementById('print').value = ""
    }