

function tinhThue(){
    var hoTen = document.getElementById("hoten").value;
    var thuNhap = document.getElementById("thunhap").value;
    var nguoiPhuThuoc = document.getElementById("nguoiphuthuoc").value;

    var thuNhapChiuThue = thuNhap - 4e+6 - nguoiPhuThuoc*1.6e+6;

    // console.log(hoTen,thuNhap,nguoiPhuThuoc);

    var thueSuat = 0;
    if (thuNhapChiuThue <= 60e+6) {
        thueSuat = 5;
    } else if (60e+6 < thuNhapChiuThue && thuNhapChiuThue <= 120e+6) {
        thueSuat = 10;
    } else if (120e+6 < thuNhapChiuThue && thuNhapChiuThue <= 210e+6) {
        thueSuat = 15;
    } else if (210e+6 < thuNhapChiuThue && thuNhapChiuThue <= 384e+6) {
        thueSuat = 20;
    } else if (384e+6 < thuNhapChiuThue && thuNhapChiuThue <= 624e+6) {
        thueSuat = 25;
    } else if (624e+6 < thuNhapChiuThue && thuNhapChiuThue <= 960e+6) {
        thueSuat = 30;
    }  else {
        thueSuat = 35;
    }
    var thueThuNhap = thuNhapChiuThue * thueSuat/100;
    document.getElementById("Result").innerHTML ="Họ và tên: "+ hoTen + "<br>Tiền thuế thu nhập là: " +thueThuNhap.toLocaleString() +" VND";

}

document.getElementById("btnCalc").onclick = tinhThue;