function cal() {
  let opr1 = document.getElementById('first').value;
  let opr2 = document.getElementById('second').value;
  let opr = document.getElementById('ope').value;

  let res = 0; // Initialize res with a default value

  if (opr === '+') {
    res = parseInt(opr1) + parseInt(opr2);
  } else if (opr === '-') {
    res = parseInt(opr1) - parseInt(opr2);
  } else if (opr === '*') {
    res = parseInt(opr1) * parseInt(opr2);
  } else if (opr === '/') {
    res = parseInt(opr1) / parseInt(opr2);
  }

  document.getElementById('res').value = res;
}