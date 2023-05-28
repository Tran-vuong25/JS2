// ! 1
/**
 * Khối 1:
 * Nhập điểm chuẩn hội đồng, điểm 3 môn thi, khu vực ưu tiên, đối tượng ưu tiên
 * 
 * Khối 2:
 * Tính tổng điểm 3 môn thi của sinh viên
 * Nếu KV A - ĐT 1: +4.5
 * Nếu KV A - ĐT 2: +3.5
 * Nếu KV A - ĐT 3: +3
 * Nếu KV B - ĐT 1: +3.5
 * Nếu KV B - ĐT 2: +2.5
 * Nếu KV B - ĐT 3: +2
 * Nếu KV C - ĐT 1: +3
 * Nếu KV C - ĐT 2: +2
 * Nếu KV C - ĐT 3: +1.5
 * 
 * Khối 3:
 * Thông báo kết quả "Trúng tuyển" or "Rớt"
 * Tổng kết quả
 */

function inpCont() {
    var point = document.getElementById("inpPoint").value;
    var pointSub1 = document.getElementById("subject1").value;
    var pointSub2 = document.getElementById("subject2").value;
    var pointSub3 = document.getElementById("subject3").value;
    var area = document.getElementById("inpArea").value;
    var object = document.getElementById("inpObject").value;

    var resultFinal = "Rớt";
    var totalPoint = 0
    // console.log(point,pointSub1,pointSub2,pointSub3, area, object)

    if (area == "A" && object==1){
        totalPoint = (Number(pointSub1) + Number(pointSub2) + Number(pointSub3))+4.5
    } else if (area == "A" && object==2){
        totalPoint = (Number(pointSub1) + Number(pointSub2) + Number(pointSub3))+3.5
    } else if (area == "A" && object==3){
        totalPoint = (Number(pointSub1) + Number(pointSub2) + Number(pointSub3))+3
    } else if (area == "B" && object==1){
        totalPoint = (Number(pointSub1) + Number(pointSub2) + Number(pointSub3))+3.5
    } else if (area == "B" && object==2){
        totalPoint = (Number(pointSub1) + Number(pointSub2) + Number(pointSub3))+2.5
    } else if (area == "B" && object==3){
        totalPoint = (Number(pointSub1) + Number(pointSub2) + Number(pointSub3))+2
    } else if (area == "C" && object==1){
        totalPoint = (Number(pointSub1) + Number(pointSub2) + Number(pointSub3))+3
    } else if (area == "C" && object==2){
        totalPoint = (Number(pointSub1) + Number(pointSub2) + Number(pointSub3))+2
    } else if (area == "C" && object==3){
        totalPoint = (Number(pointSub1) + Number(pointSub2) + Number(pointSub3))+1.5
    } else {
        totalPoint = Number(pointSub1) + Number(pointSub2) + Number(pointSub3)
    }

    if (totalPoint >= point){
        resultFinal = "Trúng tuyển"
    }
    document.getElementById("txtNotify1").innerHTML = "Kết quả: " + resultFinal +"<br> Tổng điểm: " + totalPoint
}

document.getElementById("btnTotal").onclick = inpCont


// ! 2
/**
 * Khối 1:
 * Nhập tên chủ hộ, số kw sử dụng được
 * 
 * Khối 2:
 * Tính tiền điện
 * Nếu kw <= 50: *500
 * Nếu kw > 50 & kw <= 100: *650
 * Nếu kw > 100 & kw <= 200: *850
 * Nếu kw > 200 & kw <= 350: *1100
 * Nếu kw > 350: *1300

 */
const KW_DUOI_50 = 500
const KW_50_100 = 650
const KW_100_200 = 850 
const KW_200_350 = 1100
const KW_TREN_350 = 1300


function calcPrice() {
    var name = document.getElementById("inpName").value;
    var num = document.getElementById("inpNum").value;

    var totalPrice =0

    if (num <= 50){
        totalPrice = num * KW_DUOI_50
    } else if (num > 50 && num <= 100){
        totalPrice = (50 * KW_DUOI_50) + ((num - 50) * KW_50_100) 
    } else if (num > 100 && num <= 200){
        totalPrice = (50 * KW_DUOI_50) + (50 * KW_50_100) + ((num - 100) * KW_100_200) 
    } else if (num > 200 && num <= 350){
        totalPrice = (50 * KW_DUOI_50) + (50 * KW_50_100) + (100 * KW_100_200) + ((num - 200) * KW_200_350) 
    } else {
        totalPrice = (50 * KW_DUOI_50) + (50 * KW_50_100) + (100 * KW_100_200) + (150 * KW_200_350) + ((num - 350) * KW_TREN_350)
    }

    document.getElementById("txtNotify2").innerHTML = "Tên chủ hộ: " + name + "<br>Tổng tiền điện: " + totalPrice.toLocaleString()

}

document.getElementById("btnPrice").onclick = calcPrice

// ! 3
function tinhThue(){
    var hoTen = document.getElementById("hoTen").value;
    var thuNhap = document.getElementById("thuNhap").value;
    var nguoiPhuThuoc = document.getElementById("nguoiPhuThuoc").value;

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
    document.getElementById("txtNotify3").innerHTML ="Họ và tên: "+ hoTen + "<br>Tiền thuế thu nhập là: " +thueThuNhap.toLocaleString() +" VND";

}

document.getElementById("calcThue").onclick = tinhThue;

// ! 4
function mySelect() {
    var x = document.getElementById("loaiKhach").value;
    if (x == 2) {
        document.getElementById("ketNoi").style.display = 'block';
    } else {
        document.getElementById("ketNoi").style.display = 'none';
    }
}

function tinhTien() {
var maKH = document.getElementById("maKhachHang").value;
var loaiKhach = document.getElementById("loaiKhach").value;
var soKenh = document.getElementById("soKenh").value;
var soKetNoi = document.getElementById("soKetNoi").value;
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
   document.getElementById("txtNotify4").innerHTML ="Mã khách hàng: "+ maKH + "<br>Tiền cáp là: $" +total.toLocaleString('en-US') ;

}

document.getElementById("tienCap").onclick = tinhTien;