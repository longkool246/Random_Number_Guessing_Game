function generateRandomNumber() {
  return Math.floor(Math.random() * 10 + 1);
}

let answer = generateRandomNumber();
let guesses = 0;
let isNewNumberSelected = false; // Biến kiểm tra xem số đã thay đổi chưa

document.getElementById("submitButton").onclick = function (){
  let guess = document.getElementById("guessField").value;
  guesses += 1;
  
  let resultDiv = document.getElementById("result");
  let messageDiv = document.getElementById("message");

  if (guess == answer){
    resultDiv.textContent = `${answer} is the #. It took you ${guesses} guesses`;

    // Kiểm tra xem số đã thay đổi chưa
    if (isNewNumberSelected) {
      messageDiv.textContent = "Số mới đã được chọn"; 
      setTimeout(function() {
        messageDiv.textContent = ""; // Ẩn thông báo sau 5 giây
      }, 5000);
    }

    answer = generateRandomNumber(); 
    guesses = 0;
    isNewNumberSelected = true; // Đánh dấu là số đã thay đổi
  }
  else if (guess < answer){
    resultDiv.textContent = "Too small!";
  }
  else{
    resultDiv.textContent = "Too large!";
  }
}
