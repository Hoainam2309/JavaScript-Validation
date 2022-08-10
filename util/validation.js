function kiemTra(value, selectorError, name) {
  if (value.trim() == "") {
    document.querySelector(selectorError).innerHTML =
      name + " không được bỏ trống";
    return false;
  }
  document.querySelector(selectorError).innerHTML = "";
  return true;
}
//kiểm tra kí tự
function kiemTraKiTu(value, selectorError, name) {
  var regexLetter = /^[A-Z a-z]+$/;
  if (regexLetter.test(value)) {
    document.querySelector(selectorError).innerHTML = "";
    return true;
  }
  document.querySelector(selectorError).innerHTML = name + " phải là ký tự !";
  return false;
}
// kiểm tra email
function kiemTraEmail(value, selectorError, name) {
  var regexEmail =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\ [[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (regexEmail.test(value)) {
    document.querySelector(selectorError).innerHTML = "";
    return true;
  }
  document.querySelector(selectorError).innerHTML = name + "không hợp lệ !";
  return false;
}

//kiểm tra độ dài
function kiemTraDoDai (value,selectorError,name,minLength,maxLength) {
    if(value.length > maxLength || value.length < minLength) {
        document.querySelector(selectorError).innerHTML = name +' độ dài từ '+ minLength + ' đến ' +max +' ký tự ';
        return false;
    }
    document.querySelector(selectorError).innerHTML = '';
    return true; 
}


//kiểm tra mật khẩu
function kiemTraMatKhau(value, selectorError, name) {
  var regexPassword = /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])([a-zA-Z0-9]{8})$/;
  if (regexPassword.test(value)) {
    document.querySelector(selectorError).innerHTML = "";
    return true;
  }
  document.querySelector(selectorError).innerHTML =
    name + "phải có số và chữ, ít nhất 1 ký tự viết hoa và 1 ký tự đặt biệt !";
  return false;
}

//kiểm tra ngày thang năm
function kiemTraNgayThangNam (value,selectorError,name) {
    var regexDdMmYy = /^\d{4}-(0[1-9]|1[0-2])-(0[1-9]|[12][0-9]|3[01])$/;
    if(regexDdMmYy.test(value)) {
        document.querySelector(selectorError).innerHTML ='';
        return true;
    }
    document.querySelector(selectorError).innerHTML = name +'không hợp lệ !';
    return false;
}

