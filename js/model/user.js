class User{
  constructor(name){
    this.name = name;
  }

  sendMessage(message){
    document.getElementById('type').remove();
    document.getElementById("chatLog").innerHTML += '<div>'+this.name+": "+message+'</div>';
  }

  typing() {
    if (document.getElementById('type')) {
      document.getElementById('type').remove();
    }
    document.getElementById("chatLog").innerHTML += '<div id="type">'+this.name+' is typing...</div>';
  }
}
