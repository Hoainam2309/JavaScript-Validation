var mangNhanVien = [];
renderTableNhanVien(mangNhanVien);
// initData
document.querySelector("#btnThemNV").onclick = function () {
  //input: thông tin nhân viên: nhanVien
  var nv = new NhanVien();
  nv.taiKhoan = document.querySelector("#tknv").value;
  nv.hoVaTen = document.querySelector("#name").value;
  nv.Email = document.querySelector("#email").value;
  nv.matKhau = document.querySelector("#password").value;

  var ngayLam = new Date(document.querySelector("#datepicker").value);
  nv.ngayLam = ngayLam.toLocaleDateString();
  nv.tienLuong = document.querySelector("#luongCB").value;
  nv.chucVu = document.querySelector("#chucvu").value;
  nv.gioLam = document.querySelector("#gioLam").value;

  //   console.log(nv);

  mangNhanVien.push(nv);
  renderTableNhanVien(mangNhanVien);
  console.log("mảng nhân viên", mangNhanVien);

  var valid =
    kiemTra(nv.taiKhoan, "#error_required_tknv", "Tài khoản") &
    kiemTra(nv.hoVaTen, "#error_required_name", "Họ Và Tên") &
    kiemTra(nv.Email, '#error_required_email', 'Email') &
    kiemTra(nv.matKhau, '#error_required_password', 'mật Khẩu') &
    kiemTra(nv.ngayLam, '#error_required_datepicker', 'Ngày') &
    kiemTra(nv.tienLuong, '#error_required_luongCB', 'Tiền lương') &
    kiemTra(nv.chucVu, '#error_required_chucvu', 'Chức vụ') &
    kiemTra(nv.gioLam, '#error_required_gioLam', 'Giờ làm');

  if (!valid) {
  }
// var ngayTest = moment(ngaySinh).format('YYYY-MM-DD');
  valid &= kiemTraKiTu(nv.taiKhoan,'#error_all_letter_taiKhoan', 'Tài khoản ') &
  kiemTraKiTu(nv.hoVaTen,'#error_all_letter_name','Họ và Tên ') &
  kiemTraEmail(nv.Email,'#error_all_text_email', 'Email ') &
  // kiemTraDoDai(nv.matKhau,'#error_password','Mật khẩu',6,32) &
  kiemTraMatKhau(nv.matKhau,'#error_password', 'Mật khẩu ')
  // kiemTraNgayThangNam(ngayTest,'#error_datepicker','Ngày Sinh');
};

function renderTableNhanVien(arrNhanVien) {
  var htmlContent = "";
  for (var index = 0; index < arrNhanVien.length; index++) {
    var nv = arrNhanVien[index];
    var tr = `
    <tr>
    <td>${nv.taiKhoan}</td>
    <td>${nv.hoVaTen}</td>
    <td>${nv.Email}</td>
    <td>${nv.ngayLam}</td>
    <td>${nv.chucVu}</td>
    <td>${nv.tienLuong}</td>
    
    <td>${nv.gioLam}</td>
    <td>${nv.tinhLuong()}</td>

    
    <td>
    <button class="btn btn-danger" onclick="xoaNhanVien('${
      nv.taiKhoan
    }')">Xóa</button>
    <button class="btn btn-primary" onclick ="xoaNhanVien('${
      nv.taiKhoan
    }')">Sửa</button>
    </td>

    </tr>
    `;

    htmlContent += tr;
    console.log(tr);
  }
  console.log(htmlContent);
  document.querySelector("#tableDanhSach").innerHTML = htmlContent;
}

