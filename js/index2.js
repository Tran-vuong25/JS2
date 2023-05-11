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
 * Nếu kw > 250: *1300

 */

function calcPrice() {
    var name = document.getElementById("inpName").value;
    var num = document.getElementById("inpNum").value;

    var totalPrice =0

    if (num <= 50){
        totalPrice = num * 500
    } else if (num > 50 && num <= 100){
        totalPrice = (50 * 500) + ((num - 50) * 650) 
    } else if (num > 100 && num <= 200){
        totalPrice = (50 * 500) + (50 * 650) + ((num - 100) * 850) 
    } else if (num > 200 && num <= 350){
        totalPrice = (50 * 500) + (50 * 650) + (100 * 850) ((num - 200) * 1100) 
    } else {
        totalPrice = (50 * 500) + (50 * 650) + (100 * 850) (150 * 1100) + ((num - 350) * 1300)
    }

    document.getElementById("txtNotify").innerHTML = "Tên chủ hộ: " + name + "<br>Tổng tiền điện: " + totalPrice.toLocaleString()

}

document.getElementById("btnPrice").onclick = calcPrice