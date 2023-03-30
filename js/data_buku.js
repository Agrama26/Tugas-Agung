function cekform(){
    idbuk = document.getElementById("idbuku")
    judul = document.getElementById("judul")
    pengarang = document.getElementById("pengarang")
    penerbit = document.getElementById("penerbit")

    if (idbuk.value=="") {
        alert("ID Tidak Boleh Kosong")
        return false()
    }else if (judul.value=="") {
        alert("Judul Jangan Kosong Dek")
        judul.focus()
        return false
    }else if (judul.value.length <= 3) {
        alert("Judul minimal 3 karakter")
        judul.focus()
        return false
    }else if (pengarang.value=="") {
        alert("Pengarang Diisi cuy")
        pengarang.focus()
        return false
    }else if (penerbit.value=="") {
        alert("Penerbit Harus diisi")
        penerbit.focus()
        return false
    }else {
        alert("Makasi Mas Bro")
        return true
    }
}