function mySelect() {
    var x = document.getElementById("loaikhach").value;
    if (x == 2) {
        document.getElementById("ketnoi").style.display = 'block';
    } else {
        document.getElementById("ketnoi").style.display = 'none';
    }
    // console.log(x);
}

function tinhTien() {
var maKH = document.getElementById("makhachhang").value;
var loaiKhach = document.getElementById("loaikhach").value;
var soKenh = document.getElementById("sokenh").value;
var soKetNoi = document.getElementById("soketnoi").value;
var total = 0;
    if (loaiKhach == 0) {
        alert("Chọn loại khách hàng!");
    } else if (loaiKhach == 1) {
        total = 4.5 + 20.5 + 7.5 * soKenh;
    } else if (loaiKhach == 2 && soKetNoi <=10) {
        total = 15 + 75 + 50 * soKenh;
    } else {
        total = 15 + 75 + (soKetNoi - 10)*5  + 50 * soKenh;
    }
    // console.log(maKH,loaiKhach,soKenh,soKetNoi);
    // console.log(total);

   document.getElementById("Result").innerHTML ="Mã khách hàng: "+ maKH + "<br>Tiền cáp là: $" +total.toLocaleString('en-US') ;

}

document.getElementById("btnCalc").onclick = tinhTien;