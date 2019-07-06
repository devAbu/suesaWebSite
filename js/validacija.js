$('#button').click(function () {
    var fullName = $('#fullName').val()
    var email = $('#email').val()
    var phoneNumber = $('#phoneNumber').val()
    var message = $('#message').val()

    function validateEmail($email) {
        var emailReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
        return emailReg.test($email);
    }

    toastr.options.closeButton = true;
    toastr.options.preventDuplicates = true;
    toastr.options.progressBar = true;
    toastr.options.timeOut = 2000;
    toastr.options.extendedTimeOut = 1000;

    if (fullName == "") {
        toastr.error('Please enter your name.')
    } else if (email == "") {
        toastr.error("Please enter your email address.")
    } else if (!validateEmail(email)) {
        toastr.warning("Please enter a valid email address")
    } else if (phoneNumber == "") {
        toastr.error("Please enter your phone number.")
    } else if (phoneNumber == 0 || phoneNumber.length < 6 || phoneNumber.length > 15) {
        toastr.warning("Please enter a valid number.")
    } else if (message == "") {
        toastr.error("Please enter your message.")
    } else {
        $.ajax({
            url: "./emailSend/sendEmail.php?task=message&fullName=" + fullName + "&email=" + email + "&phoneNumber=" + phoneNumber + "&message=" + message,
            success: function (data) {
                if (data == 'sent') {
                    toastr.success("Vaša poruka je uspješno poslana. Hvala!")
                } else {
                    toastr.error("Došlo je do greške, molimo Vas da pokušate kasnije")
                }
            },
            error: function (data, err) {
                toastr.error("Došlo je do greške, molimo Vas da pokušate kasnije!")
            }
        });
    }
})