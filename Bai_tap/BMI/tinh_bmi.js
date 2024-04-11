function tinhBMI() {
    let weight = +document.getElementById("canNang").value;
    let height = +document.getElementById("chieuCao").value;
    if (weight > 0 && height > 0) {
        let bmi = weight / (height * height);
        if (bmi < 18) {
            document.write("Underweight");
        } else if (bmi < 25.0) {
            document.write("Normal");
        } else if (bmi < 30.0) {
            document.write("Overweight");
        } else {
            document.write("Obese");
        }
    } else {
        alert("chieu cao va can nang lon hon 0");
    }
}