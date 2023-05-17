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

    document.getElementById("txtNotify").innerHTML = "Tên chủ hộ: " + name + "<br>Tổng tiền điện: " + totalPrice.toLocaleString()

}

document.getElementById("btnPrice").onclick = calcPrice