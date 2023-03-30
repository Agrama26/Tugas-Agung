function cekform(){
    id = document.getElementById("idagt")
    pinjam = document.getElementById("tglpinjam")
    balik = document.getElementById("tglbalik")
    harus = document.getElementById("tglhrsbalik")

    if (id.value=="") {
        alert("ID Tidak Boleh Kosong");
        return false();
    }else if (pinjam.value=="") {
        alert("Kapan Anda Pinjam");
        pinjam.focus();
        return false;
    }else if (balik.value=="") {
        alert("Kapan Anda Kembalikan");
        balik.focus();
        return false;
    }else if (harus.value=="") {
        alert("Harus diisi");
        harus.focus();
        return false;
    }else {
        alert("Makasi Mas Bro");
        return true;
    }
}