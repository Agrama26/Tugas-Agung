function cekform(){
    idagt = document.getElementById("idagt")
    nama = document.getElementById("txtnama")
    j = document.getElementById("jkel")

    if (idagt.value=="") {
        alert("ID Tidak Boleh Kosong");
        return false();
    }else if (nama.value=="") {
        alert("Nama Jangan Kosong Dek");
        nama.focus();
        return false;
    }else if (nama.value.length <= 3) {
        alert("nama minimal 3 karakter");
        nama.focus();
        return false;
    }else if (j.value=="") {
        alert("Jenis Kelamin belum dipilih");
        j.focus();
        return false;
    }else {
        alert("Terima Kasih Masbro")
        return true;
    }
}