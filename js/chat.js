function sendA() {
  let user = new User(document.getElementById('txtSideAName').value);
  user.sendMessage(document.getElementById('txtSendAMsg').value);
  document.getElementById('txtSendAMsg').value = "";
}

function typingA() {
  let user = new User(document.getElementById('txtSideAName').value);
  user.typing();
}

function sendB() {
  let user = new User(document.getElementById('txtSideBName').value);
  user.sendMessage(document.getElementById('txtSendBMsg').value);
  document.getElementById('txtSendBMsg').value = "";
}

function typingB() {
  let user = new User(document.getElementById('txtSideBName').value);
  user.typing();
}
