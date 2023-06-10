// Bài Tập 1: tính tiền lương nhân viên
function ex1() {
  let salarys = +document.getElementById("input-salarys").value;
  let days = +document.getElementById("input-days").value;

  let totalSalary = 0;

  if (days > 0) {
    totalSalary = salarys * days;
    display1(totalSalary);
  } else {
    alert("Không có lương!!!");
  }
}

function display1(totalSalary) {
  document.getElementById("divThanhTien").style.display = "block";
  document.getElementById("xuatTien").innerHTML = totalSalary.toLocaleString();
}

// Bài Tập 2: tính giá trị trung bình
function ex2() {
  let number1 = +document.getElementById("input-number1").value;
  let number2 = +document.getElementById("input-number2").value;
  let number3 = +document.getElementById("input-number3").value;
  let number4 = +document.getElementById("input-number4").value;
  let number5 = +document.getElementById("input-number5").value;

  let medium = 0;

  medium = (number1 + number2 + number3 + number4 + number5) / 5;
  display2(medium);
}

function display2(medium) {
  document.getElementById("divTrungBinh").style.display = "block";
  document.getElementById("giaTriTrungBinh").innerHTML =
    medium.toLocaleString();
}

// Bài Tập 3: Quy đổi tiền
function ex3() {
  let usd = +document.getElementById("input-usd").value;

  let exchange = 0;

  exchange = usd * 23500;
  display3(exchange);
}

function display3(exchange) {
  document.getElementById("divQuyDoi").style.display = "block";
  document.getElementById("giaTriQuyDoi").innerHTML = exchange.toLocaleString();
}

// Bài tập 4: Tính diện tích chu vi hình chữ nhật
function display4(acreage, perimeter) {
  document.getElementById("divKetQua").style.display = "block";
  document.getElementById(
    "ketQua"
  ).innerHTML = `Diện tích: ${acreage.toLocaleString()} - Chu vi: ${perimeter.toLocaleString()}`;
}

function ex4() {
  let length = +document.getElementById("input-length").value;
  let width = +document.getElementById("input-width").value;

  let acreage = 0;
  let perimeter = 0;

  acreage = length * width;
  perimeter = (length + width) * 2;
  display4(acreage, perimeter);
}

// Bài tập 5: Tính tổng 2 ký số
function ex5() {
  let twonumber = +document.getElementById("input-twonumber").value;

  let so_hang_dv = twonumber % 10;
  let so_hang_chuc = twonumber / 10;

  let total = 0;

  total = so_hang_dv + so_hang_chuc;
  display5(total);
}

function display5(total) {
  document.getElementById("divTinh").style.display = "block";
  document.getElementById("giaTriTong").innerHTML = total.toLocaleString();
}
