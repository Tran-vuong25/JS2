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