// $("#memberSignIn").click(function () {
//   $("#memberSignUpContent").hide();
//   $("#memberSignInContent").show();
//   $("#memberSignUp").removeClass('active');
//   $("#memberSignIn").addClass('active');
// });
// $("#memberSignUp").click(function () {
//   $("#memberSignInContent").hide();
//   $("#memberSignUpContent").show();
//   $("#memberSignUp").addClass('active');
//   $("#memberSignIn").removeClass('active');
// });

// $("#vendorSignIn").click(function () {
//   $("#vendorSignUpContent").hide();
//   $("#vendorSignInContent").show();
//   $("#vendorSignUp").removeClass('active');
//   $("#vendorSignIn").addClass('active');
// });
// $("#vendorSignUp").click(function () {
//   $("#vendorSignInContent").hide();
//   $("#vendorSignUpContent").show();
//   $("#vendorSignUp").addClass('active');
//   $("#vendorSignIn").removeClass('active');
// });


// function tabChange() {
//   var tabs = $('.nav-tabs > li');
//   var active = tabs.filter('.active');
//   var next = active.next('li').length? active.next('li').find('a') : tabs.filter(':first-child').find('a');
//   next.tab('show');
// }

// $('.tab-pane').hover(function() {
//   clearInterval(tabCycle);
// }, function() {
//   tabCycle = setInterval(tabChange, 5000);
// });

// // Tab Cycle function
// var tabCycle = setInterval(tabChange, 5000)
  
// // Tab click event handler
// $(function(){
//   $('.nav-tabs a').click(function(e) {
//       e.preventDefault();
//       clearInterval(tabCycle);
//       $(this).tab('show')
//       tabCycle = setInterval(tabChange, 5000);
//   });
// });