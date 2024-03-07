var modal = document.getElementById('myModal');


window.onload = function() {
  modal.style.display = 'block';
};


function checkPassword() {
  var password = document.getElementById('password').value;

  if (password === 'qMpoF84HdUd') {
 
    modal.style.display = 'none';
  } else {
 
    alert('Неверный пароль. Попробуйте еще раз.');
  }
}


var passwordForm = document.getElementById('passwordForm');


passwordForm.addEventListener('submit', function(event) {

  event.preventDefault();
  checkPassword();
});