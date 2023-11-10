function generateRandomNumber() {
  return Math.floor(Math.random() * 10 + 1);
}

function isNumeric(value) {
  return /^\d+$/.test(value);
}

let answer = generateRandomNumber();
let guesses = 0;
let isNewNumberSelected = false;

document.getElementById("submitButton").onclick = function () {
  let guess = document.getElementById("guessField").value;
  guesses += 1;

  let resultDiv = document.getElementById("result");
  let messageDiv = document.getElementById("message");

  // Kiểm tra xem có phải là số hay không
  if (!isNumeric(guess)) {
    resultDiv.textContent = "Vui lòng nhập số!";
    return;
  }

  // Kiểm tra xem số có nằm trong khoảng từ 1 đến 10 không
  if (guess < 1 || guess > 10) {
    resultDiv.textContent = "Vui lòng nhập số trong khoảng 1-10!";
    return;
  }

  if (guess == answer) {
    resultDiv.textContent = `${answer} is the #. It took you ${guesses} guesses`;

    // Hiển thị số được khởi tạo
    answer = generateRandomNumber();
    isNewNumberSelected = true;
    setTimeout(function () {
      resultDiv.textContent = "";
    }, 3000);
  } else if (guess < answer) {
    resultDiv.textContent = `${guess} is Too small!`;
  } else {
    resultDiv.textContent = `${guess} is Too large!`;
  }

  // Kiểm tra xem số đã thay đổi chưa
  if (isNewNumberSelected) {
    messageDiv.textContent = "Số mới đã được chọn";
    setTimeout(function () {
      messageDiv.textContent = ""; // Ẩn thông báo sau 5 giây
    }, 3000);
    isNewNumberSelected = false; // Đặt lại biến kiểm tra
  }
};