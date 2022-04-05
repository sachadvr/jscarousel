// carousel script for the home page carousel
// div class is item and the div active is "item active"

function carousel() {
  var i;
  var x = document.getElementsByClassName("item");
  for (i = 0; i < x.length; i++) {
    x[i].classList.remove("active");
    x[i].addEventListener("click", function (e) {
      // show position of the mouse on item x[i]

      var pos = e.clientX - e.target.offsetLeft;
      var width = e.target.offsetWidth;
      var percent = pos / width;
      console.log(percent);
      if (percent > 0.5) {
        carouselNext();
      } else {
        carouselNext(false);
      }
    });
    x[0].classList.add("active");
  }
}
function carouselNext(t = true) {
  var i;
  var x = document.getElementsByClassName("item");
  for (i = 0; i < x.length; i++) {
    if (x[i].classList.contains("active")) {
      x[i].classList.remove("active");
      if (t) {
        if (x[i + 1] != null) {
          x[i + 1].classList.add("active");
        } else {
          x[0].classList.add("active");
        }
        return;
      } else {
        if (x[i - 1] != null) {
          x[i - 1].classList.add("active");
        } else {
          x[x.length - 1].classList.add("active");
        }
        return;
      }
    }
  }
}

carousel();
