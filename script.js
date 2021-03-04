var show = false;

function toggle() {
  if (show == true) {
    document.querySelector("#pswrd").type = "password";
    document.querySelector("#icon").className = "fa fa-eye";
    show = false;
  } else {
    document.querySelector("#pswrd").type = "text";
    document.querySelector("#icon").className = "fa fa-eye-slash";
    show = true;
  }
}
