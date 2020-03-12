var form = document.forms["contact"];
    form.addEventListener('submit',contact_submit,false);
  
    function contact_submit(e) {
      // Stop Form From Submitting
      e.preventDefault();
  
      // Set Initial Variables
      var target = e.target || e.srcElement;
      var to = 'contactus@codersunited.org';
      var uri = 'mailto:' + to;
      var body = '';
  
      // Set Form Values to Variables
      var name = target.elements['name'].value;
      var subject = target.elements['subject'].value;
      var email = target.elements['email'].value;
      var message = target.elements['message'].value;
  
      // Build Body / Message with all Input Fields
      body += message + "\r\n\r\n";
      body += "Name: " + name + "\r\n";
      body += "Email: " + email + "\r\n";
  
      // Build final Mailto URI
      uri += '?subject=' + encodeURIComponent(subject);
      uri += '&body=' + encodeURIComponent(body);
  
      // Open Mailto in New Window / Tab
      window.open(uri,'_blank');
    }
// jQuery(document).ready(function($) {
//   "use strict";

//   //Contact
//   $('form.contactForm').submit(function() {
//     var f = $(this).find('.form-group'),
//       ferror = false,
//       emailExp = /^[^\s()<>@,;:\/]+@\w[\w\.-]+\.[a-z]{2,}$/i;

//     f.children('input').each(function() { // run all inputs

//       var i = $(this); // current input
//       var rule = i.attr('data-rule');

//       if (rule !== undefined) {
//         var ierror = false; // error flag for current input
//         var pos = rule.indexOf(':', 0);
//         if (pos >= 0) {
//           var exp = rule.substr(pos + 1, rule.length);
//           rule = rule.substr(0, pos);
//         } else {
//           rule = rule.substr(pos + 1, rule.length);
//         }

//         switch (rule) {
//           case 'required':
//             if (i.val() === '') {
//               ferror = ierror = true;
//             }
//             break;

//           case 'minlen':
//             if (i.val().length < parseInt(exp)) {
//               ferror = ierror = true;
//             }
//             break;

//           case 'email':
//             if (!emailExp.test(i.val())) {
//               ferror = ierror = true;
//             }
//             break;

//           case 'checked':
//             if (! i.is(':checked')) {
//               ferror = ierror = true;
//             }
//             break;

//           case 'regexp':
//             exp = new RegExp(exp);
//             if (!exp.test(i.val())) {
//               ferror = ierror = true;
//             }
//             break;
//         }
//         i.next('.validation').html((ierror ? (i.attr('data-msg') !== undefined ? i.attr('data-msg') : 'wrong Input') : '')).show('blind');
//       }
//     });
//     f.children('textarea').each(function() { // run all inputs

//       var i = $(this); // current input
//       var rule = i.attr('data-rule');

//       if (rule !== undefined) {
//         var ierror = false; // error flag for current input
//         var pos = rule.indexOf(':', 0);
//         if (pos >= 0) {
//           var exp = rule.substr(pos + 1, rule.length);
//           rule = rule.substr(0, pos);
//         } else {
//           rule = rule.substr(pos + 1, rule.length);
//         }

//         switch (rule) {
//           case 'required':
//             if (i.val() === '') {
//               ferror = ierror = true;
//             }
//             break;

//           case 'minlen':
//             if (i.val().length < parseInt(exp)) {
//               ferror = ierror = true;
//             }
//             break;
//         }
//         i.next('.validation').html((ierror ? (i.attr('data-msg') != undefined ? i.attr('data-msg') : 'wrong Input') : '')).show('blind');
//       }
//     });
//     if (ferror) return false;
//     else var str = $(this).serialize();
//     var action = $(this).attr('action');
//     if( ! action ) {
//       action = 'contactform/contactform.php';
//     }
//     $.ajax({
//       type: "POST",
//       url: action,
//       data: str,
//       success: function(msg) {
//         // alert(msg);
//         if (msg == 'OK') {
//           $("#sendmessage").addClass("show");
//           $("#errormessage").removeClass("show");
//           $('.contactForm').find("input, textarea").val("");
//         } else {
//           $("#sendmessage").removeClass("show");
//           $("#errormessage").addClass("show");
//           $('#errormessage').html(msg);
//         }

//       }
//     });
//     return false;
//   });

// });