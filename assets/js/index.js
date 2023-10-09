$("#memberSignIn").click(function () {
  $("#memberSignUpContent").hide();
  $("#memberSignInContent").show();
  $("#memberSignUp").removeClass('active');
  $("#memberSignIn").addClass('active');
});
$("#memberSignUp").click(function () {
  $("#memberSignInContent").hide();
  $("#memberSignUpContent").show();
  $("#memberSignUp").addClass('active');
  $("#memberSignIn").removeClass('active');
});

$("#vendorSignIn").click(function () {
  $("#vendorSignUpContent").hide();
  $("#vendorSignInContent").show();
  $("#vendorSignUp").removeClass('active');
  $("#vendorSignIn").addClass('active');
});
$("#vendorSignUp").click(function () {
  $("#vendorSignInContent").hide();
  $("#vendorSignUpContent").show();
  $("#vendorSignUp").addClass('active');
  $("#vendorSignIn").removeClass('active');
});