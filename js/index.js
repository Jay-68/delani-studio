$('#design').click(function () {
  $('#design-img').toggle();
  $('#design-content').toggle();
});
$('#development').click(function () {
  $('#dev-img').toggle();
  $('#dev-content').toggle();
});
$('#product').click(function () {
  $('#product-img').toggle();
  $('#product-content').toggle();
});

$('#image1').hover(function () {
  $('.title1').toggle(100);
})
$('#image2').hover(function () {
  $('.title2').toggle(100);
})
$('#image3').hover(function () {
  $('.title3').toggle(100);
})
$('#image4').hover(function () {
  $('.title4').toggle(100);
})
$('#image5').hover(function () {
  $('.title5').toggle(100);
})
$('#image6').hover(function () {
  $('.title6').toggle(100);
})
$('#image7').hover(function () {
  $('.title7').toggle(100);
})
$('#image8').hover(function () {
  $('.title8').toggle(100);
})

let btn = document.getElementById("submitButton");

btn.onclick = function (event) {
  let nameValidate = document.forms["myForm"]["fName"].value;
  if (nameValidate == "") {
    alert("Name not entered");
    return false;
  }
  let mailValidate = document.forms["myForm"]["mail"].value;
  if (mailValidate == "") {
    alert("Email not entered");
    return false;
  }
  let messageValidate = document.forms["myForm"]["message"].value;
  if (messageValidate == "") {
    alert("You have no message to send");
    return false;
  } else {
    alert('Dear ' + nameValidate + ', we have received your message. Thank you for reaching out to us!')
  }
}