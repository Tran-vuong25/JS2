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
    document.getElementById("txtNotify").innerHTML = "Kết quả: " + resultFinal +"<br> Tổng điểm: " + totalPoint
}

document.getElementById("btnTotal").onclick = inpCont