// ---------- email validator
function validate(email) {
    const reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
    if (reg.test(email) == false) {
        return false;
    } else {
        return true;
    }
}

// ---------- input border color 
function borderColor(tag, color) {
    return tag.css("border", "2px solid").css("border-color", color);
}

// ---------- button click event
if (btn = $("#paynow")) {
    btn.addEventListener("click", sendPaymentRequest, false);
}

function sendPaymentRequest(e) {
    // check input value and set in the local storage
    e.preventDefault();
    const userName = $("#name").val();
    const userPhone = $("#phone").val();
    const userSecname = $("#secname").val();
    const userEmail = $("#email").val();
    const userAddress = $("#address").val();
    const errorText = $("#error-text");
    if (userName === "" || userPhone === "" || userSecname === "" || validate(userEmail) == false || userAddress === "") {
        (userName !== "") ? borderColor($("#name"), "green"): borderColor($("#name"), "red");
        (userPhone !== "") ? borderColor($("#phone"), "green"): borderColor($("#phone"), "red");
        (userSecname !== "") ? borderColor($("#secname"), "green"): borderColor($("#secname"), "red");
        (validate(userEmail)) ? borderColor($("#email"), "green"): borderColor($("#email"), "red");
        (userAddress !== "") ? borderColor($("#address"), "green"): borderColor($("#address"), "red");
        errorText.css("visibility", "visible");
    } else {
        localStorage.setItem('name', userName);
        localStorage.setItem('phone', userPhone);
        localStorage.setItem('secname', userSecname);
        localStorage.setItem('email', userEmail);
        localStorage.setItem('address', userAddress);

        
        let ajaxdata = {};
        let order_num = "";
        let day = new Date;

        // generate order number. Format 0109-12-21-14
        order_num = day.getDate() + "-" + (parseInt(day.getMonth()) + 1) + "-" + day.getHours() + "-" + day.getMinutes() + "-" + day.getSeconds();

        // send to the server the data for payment
        ajaxdata["description"] = "Заказ куклы";
        ajaxdata["orderNumber"] = order_num;
        ajaxdata["amount"] = 520000; 

        $.ajax({
            method: "POST",
            url: "../php/chain.php",
            data: ajaxdata
        }).done(function (msg) {
            if (msg == "fail") {
                // Fail
                return false;
            } else {
                let final_result = jQuery.parseJSON(msg);
                if (final_result.errorCode)
                    alert("Возникла ошибка обработки оплаты");
                document.location.href = final_result.formUrl;
            }
        });
    }
}