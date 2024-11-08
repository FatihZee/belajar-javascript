function kalkulator() {
    let angka1 = parseFloat(document.getElementById('angka1').value);
    let angka2 = parseFloat(document.getElementById('angka2').value);
    let operasi = document.getElementById('operasi').value;
    let hasil;

    switch (operasi) {
        case '+':
            hasil = angka1 + angka2;
            break;
        case '-':
            hasil = angka1 - angka2;
            break;
        case '*':
            hasil = angka1 * angka2;
            break;
        case '/':
            if(angka2 !== 0) {
                hasil = angka1 / angka2;
            } else {
                hasil = 'Tidak terdefinisi';
            }
            break;
        default:
            hasil = 'Operasi tidak valid';
            break;
    }

    document.getElementById('hasil').value = hasil;
}
