(function($) {
    "use strict";
    $(window).scroll(function() {
        if ($(document).scrollTop() > 300) $("#go_up").addClass("open").fadeIn(500);
        else $("#go_up").removeClass("open").fadeOut(500);
    });
    $(document).on("click", "#go_up", function() {
        $("html,body").stop().animate({
            scrollTop: "0",
        }, 500);
    });

    function toggleFullscreen(elem) {
        elem = elem || document.documentElement;
        if (!document.fullscreenElement && !document.mozFullScreenElement && !document.webkitFullscreenElement && !document.msFullscreenElement) {
            if (elem.requestFullscreen) {
                elem.requestFullscreen();
            } else if (elem.msRequestFullscreen) {
                elem.msRequestFullscreen();
            } else if (elem.mozRequestFullScreen) {
                elem.mozRequestFullScreen();
            } else if (elem.webkitRequestFullscreen) {
                elem.webkitRequestFullscreen(Element.ALLOW_KEYBOARD_INPUT);
            }
        } else {
            if (document.exitFullscreen) {
                document.exitFullscreen();
            } else if (document.msExitFullscreen) {
                document.msExitFullscreen();
            } else if (document.mozCancelFullScreen) {
                document.mozCancelFullScreen();
            } else if (document.webkitExitFullscreen) {
                document.webkitExitFullscreen();
            }
        }
    }
    if ($.fn.cookie) {
        if ($.cookies.get("themeMode") == "dark") {
            $(".changeThemeLight i").attr("class", "icon ion-md-sunny");
            $("header").attr("class", "dark-bb");
            $("body").attr("id", "dark");
            if (typeof chartParams != "undefined" && chartParams !== null) {
                chartParams["theme"] = "Dark";
                new TradingView.widget(chartParams);
            }
        } else {
            if (typeof chartParams != "undefined" && chartParams !== null) {
                chartParams["theme"] = "Light";
                new TradingView.widget(chartParams);
            }
            $(".changeThemeLight i").attr("class", "icon ion-md-moon");
            $("header").attr("class", "light-bb");
            $("body").attr("id", "light");
        }
    }
    $("#clickFullscreen").on("click", function() {
        toggleFullscreen();
    });
    var ThemeOn = false;
    $(".changeThemeLight").on("click", function(e) {
        ThemeOn = !ThemeOn;
        if (ThemeOn) {
            $(".changeThemeLight i").attr("class", "icon ion-md-sunny");
            $("header").attr("class", "dark-bb");
            $("body").attr("id", "dark");
            $.cookies.set("themeMode", "dark");
            if (typeof chartParams != "undefined" && chartParams !== null) {
                chartParams["theme"] = "Dark";
                new TradingView.widget(chartParams);
            }
        } else {
            if (typeof chartParams != "undefined" && chartParams !== null) {
                chartParams["theme"] = "Light";
                new TradingView.widget(chartParams);
            }
            $(".changeThemeLight i").attr("class", "icon ion-md-moon");
            $("header").attr("class", "light-bb");
            $("body").attr("id", "light");
            $.cookies.set("themeMode", "light");
        }
    });
    $("i.add-to-favorite").on("click", function(e) {
        $(this).toggleClass("added");
    });
    $(".birthday").birthdayPicker();
    $("select").selectpicker();
    $(".clickable-row td:not(:last-child)").click(function() {
        window.location = $(this).parent().data("href");
    });
    $(".clickable-row .pair-name .add-to-favorite").on("click", function(e) {
        e.preventDefault();
        e.stopImmediatePropagation();
    });
    $(".announcements-single-item").slick({
        infinite: true,
        vertical: true,
        autoplay: true,
        autoplaySpeed: 5000,
        arrows: false,
    });
    $(".home-small-banners").slick({
        dots: true,
        infinite: true,
        speed: 300,
        slidesToShow: 4,
        slidesToScroll: 4,
        autoplay: true,
        autoplaySpeed: 5000,
        arrows: false,
        responsive: [{
            breakpoint: 1024,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
                dots: true,
            },
        }, {
            breakpoint: 600,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
            },
        }, {
            breakpoint: 480,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
            },
        }, ],
    });
    $(".video-single-item").slick({
        infinite: true,
        autoplay: true,
        autoplaySpeed: 5000,
        arrows: false,
        dots: true,
    });
    $(".guide-carousel").slick({
        infinite: true,
        autoplay: true,
        autoplaySpeed: 5000,
        arrows: true,
        dots: false,
        vertical: true,
        verticalSwiping: true,
    });
    $(".blog-single-item").slick({
        infinite: true,
        autoplay: true,
        autoplaySpeed: 5000,
        arrows: true,
        dots: true,
        slidesToShow: 3,
        slidesToScroll: 3,
        responsive: [{
            breakpoint: 1200,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
            },
        }, {
            breakpoint: 992,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
            },
        }, {
            breakpoint: 768,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
            },
        }, ],
    });
    $(".roadmap-carousel").slick({
        infinite: true,
        autoplay: true,
        autoplaySpeed: 5000,
        arrows: true,
        dots: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        responsive: [{
            breakpoint: 1200,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
            },
        }, {
            breakpoint: 992,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
            },
        }, {
            breakpoint: 768,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
            },
        }, ],
    });
    $(".airdrop-single-item").slick({
        infinite: true,
        autoplay: true,
        autoplaySpeed: 3000,
        arrows: true,
        dots: true,
        slidesToShow: 1,
        slidesToScroll: 1,
    });
    $(".exchange-icon").on("click", function(e) {
        var parentdiv = "#" + $(this).parent().attr("id");
        var swapFormText = $(parentdiv).find(".swap-from-text").html();
        var swapToText = $(parentdiv).find(".swap-to-text").html();
        var swapFormPrice = $(parentdiv).find(".swap-from-price").html();
        var swapToPrice = $(parentdiv).find(".swap-to-price").html();
        console.log($(parentdiv).find(".swap-to-price").html());
        console.log($(parentdiv).find(".swap-from-price").html());
        $(parentdiv).find(".swap-to-text").html(swapFormText);
        $(parentdiv).find(".swap-from-text").html(swapToText);
        $(parentdiv).find(".swap-to-price").html(swapFormPrice);
        $(parentdiv).find(".swap-from-price").html(swapToPrice);
    });
    $(".app-screenshot-slick").slick({
        infinite: true,
        autoplay: true,
        centerMode: true,
        dots: true,
        autoplaySpeed: 3500,
        speed: 1000,
        slidesToShow: 5,
        slidesToScroll: 1,
        variableWidth: true,
        responsive: [{
            breakpoint: 769,
            settings: {
                slidesToShow: 3,
            },
        }, {
            breakpoint: 480,
            settings: {
                dots: false,
                slidesToShow: 1,
                variableWidth: false,
                fade: true,
                cssEase: "linear",
            },
        }, ],
    });
    $(".icheck").iCheck({
        checkboxClass: "icheckbox_flat-green",
        radioClass: "iradio_flat-green",
        increaseArea: "20%",
    });
    $(".nationality_type").on("ifToggled", function(event) {
        if ($(event.target).val() == "1" && $(event.target).is(":checked")) {
            $(".nationality_type1").show().find(":input").prop("disabled", false);
        } else {
            $(".nationality_type1").hide().find(":input").prop("disabled", true);
        }
    });
    $("#bank-accounts").change(function() {
        $(".bank-info").hide();
        $("#" + $(this).val()).show();
    });
    $(".pass_show").append('<span class="ptxt">Göster</span>');
    $(document).on("click", ".pass_show .ptxt", function() {
        $(this).text($(this).text() == "Show" ? "Hide" : "Show");
        $(this).prev().attr("type", function(index, attr) {
            return attr == "password" ? "text" : "password";
        });
    });
    if ($.fn.intlTelInput) {
        $(".intlPhoneMask").intlTelInput({
            autoHideDialCode: true,
            autoPlaceholder: true,
            geoIpLookup: function(callback) {
                $.get("http://ipinfo.io", function() {}, "jsonp").always(function(resp) {
                    var countryCode = resp && resp.country ? resp.country : "";
                    callback(countryCode);
                });
            },
            nationalMode: false,
            preferredCountries: ["tr", "gb", "de"],
            utilsScript: "utils.js",
            formatOnDisplay: true,
        });
    }
    $(".datepicker").datepicker({
        language: "tr",
        autoclose: true,
    });
    $('[data-toggle="tooltip"]').tooltip();
    if ($.fancybox) {
        $(".fancybox").fancybox();
    }
    $(".js-range-slider").ionRangeSlider();
    (function() {
        var copyInput = $(".copy-input");
        $(document).on("click", ".copy-btn", function(e) {
            e.preventDefault();
            var text = copyInput.select();
            document.execCommand("copy");
        });
        $(document).on("click", ".copy-input", function() {
            this.select();
        });
    })();
    (function() {
        var copyInput = $(".copy-code-input");
        $(document).on("click", ".copy-code-btn", function(e) {
            e.preventDefault();
            var text = copyInput.select();
            document.execCommand("copy");
        });
        $(document).on("click", ".copy-code-input", function() {
            this.select();
        });
    })();
    var updatingChartOne = $(".updating-chart-one").peity("line", {
        width: 150,
        height: 30,
        fill: "none",
        stroke: "#16b979",
        strokeWidth: 2,
    });
    setInterval(function() {
        var random = Math.round(Math.random() * 50);
        var values = updatingChartOne.text().split(",");
        values.shift();
        values.push(random);
        updatingChartOne.text(values.join(",")).change();
    }, 2500);
    var updatingChartTwo = $(".updating-chart-two").peity("line", {
        width: 150,
        height: 30,
        fill: "none",
        stroke: "#e54c67",
        strokeWidth: 2,
    });
    setInterval(function() {
        var random = Math.round(Math.random() * 5);
        var values = updatingChartTwo.text().split(",");
        values.shift();
        values.push(random);
        updatingChartTwo.text(values.join(",")).change();
    }, 2000);
    var updatingChartThree = $(".updating-chart-three").peity("line", {
        width: 150,
        height: 30,
        fill: "none",
        stroke: "#e54c67",
        strokeWidth: 2,
    });
    setInterval(function() {
        var random = Math.round(Math.random() * 5);
        var values = updatingChartThree.text().split(",");
        values.shift();
        values.push(random);
        updatingChartThree.text(values.join(",")).change();
    }, 3000);
    var updatingChartFour = $(".updating-chart-four").peity("line", {
        width: 150,
        height: 30,
        fill: "none",
        stroke: "#16b979",
        strokeWidth: 2,
    });
    setInterval(function() {
        var random = Math.round(Math.random() * 5);
        var values = updatingChartFour.text().split(",");
        values.shift();
        values.push(random);
        updatingChartFour.text(values.join(",")).change();
    }, 2200);
    var updatingChartFive = $(".updating-chart-five").peity("line", {
        width: 150,
        height: 30,
        fill: "none",
        stroke: "#e54c67",
        strokeWidth: 2,
    });
    setInterval(function() {
        var random = Math.round(Math.random() * 5);
        var values = updatingChartFive.text().split(",");
        values.shift();
        values.push(random);
        updatingChartFive.text(values.join(",")).change();
    }, 2400);
    var updatingChartSix = $(".updating-chart-six").peity("line", {
        width: 150,
        height: 30,
        fill: "none",
        stroke: "#e54c67",
        strokeWidth: 2,
    });
    setInterval(function() {
        var random = Math.round(Math.random() * 5);
        var values = updatingChartSix.text().split(",");
        values.shift();
        values.push(random);
        updatingChartSix.text(values.join(",")).change();
    }, 2800);
})(jQuery);
jQuery(document).ready(function($) {
    $("#bcbAppealModal").on("shown.bs.modal", function(e) {});
    $("#addCreditCardModal").on("shown.bs.modal", function(e) {});
    $("#depositTLModal").on("shown.bs.modal", function(e) {
        var tab = e.relatedTarget.hash;
        $('.nav-pills a[href="' + tab + '"]').tab("show");
        $('#deposit-withdraw-tabs a[data-toggle="pill"]').on("shown.bs.tab", function(e) {
            let target = $(e.target).data("target");
            $(target).addClass("active show").siblings(".tab-pane.active").removeClass("active show");
        });
    });
    $(".iban-mask").mask("TR00 0000 0000 0000 0000 00", {
        placeholder: "____ ____ ____ ____ ____ __",
    });
    var $defaultModeButton = $("#defaultModeButton"),
        $buyModeButton = $("#buyModeButton"),
        $sellModeButton = $("#sellModeButton"),
        $buyingTable = $(".order-book table .buying"),
        $sellingTable = $(".order-book table .selling"),
        $oblastStatusTable = $(".order-book table .ob-heading");
    $defaultModeButton.on("click", function(event) {
        $(this).addClass("active");
        $buyModeButton.removeClass("active");
        $sellModeButton.removeClass("active");
        $buyingTable.show();
        $sellingTable.show();
    });
    $buyModeButton.on("click", function(event) {
        $(this).addClass("active");
        $defaultModeButton.removeClass("active");
        $sellModeButton.removeClass("active");
        $buyingTable.show();
        $sellingTable.hide();
    });
    $sellModeButton.on("click", function(event) {
        $(this).addClass("active");
        $defaultModeButton.removeClass("active");
        $buyModeButton.removeClass("active");
        $buyingTable.hide();
        $sellingTable.show();
    });
    $(".hide-password").on("click", function() {
        var $this = $(this),
            $password_field = $this.prev("input");
        "password" == $password_field.attr("type") ? $password_field.attr("type", "text") : $password_field.attr("type", "password");
        "Gizle" == $this.text() ? $this.text("Göster") : $this.text("Gizle");
        $password_field.putCursorAtEnd();
    });
    if (!Modernizr.input.placeholder) {
        $("[placeholder]").focus(function() {
            var input = $(this);
            if (input.val() == input.attr("placeholder")) {
                input.val("");
            }
        }).blur(function() {
            var input = $(this);
            if (input.val() == "" || input.val() == input.attr("placeholder")) {
                input.val(input.attr("placeholder"));
            }
        }).blur();
        $("[placeholder]").parents("form").submit(function() {
            $(this).find("[placeholder]").each(function() {
                var input = $(this);
                if (input.val() == input.attr("placeholder")) {
                    input.val("");
                }
            });
        });
    }
});
jQuery.fn.putCursorAtEnd = function() {
    return this.each(function() {
        if (this.setSelectionRange) {
            var len = $(this).val().length * 2;
            this.setSelectionRange(len, len);
        } else {
            $(this).val($(this).val());
        }
    });
};
$(document).ready(function() {
    if (typeof WOW !== "undefined") {
        var AnimatedEntrances = true;
        if (AnimatedEntrances) {
            var wow = new WOW({
                boxClass: "wow",
                animateClass: "animated",
                offset: 0,
                mobile: true,
                live: true,
                callback: function(box) {},
                scrollContainer: null,
            });
            wow.init();
        }
    }
});
$("#product-price-range").ionRangeSlider({
    type: "double",
    min: 0,
    max: 1000,
    from: 0,
    to: 600,
    drag_interval: true,
    min_interval: null,
    max_interval: null,
});
$("[data-toggle=popover]").popover({
    html: true
});
$(document).ready(function() {
    var navListItems = $("div.setup-panel div a"),
        allWells = $(".setup-content"),
        allNextBtn = $(".nextBtn");
    allWells.hide();
    navListItems.click(function(e) {
        e.preventDefault();
        var $target = $($(this).attr("href")),
            $item = $(this);
        if (!$item.hasClass("disabled")) {
            navListItems.removeClass("btn-primary").addClass("btn-default");
            $item.addClass("btn-primary");
            allWells.hide();
            $target.show();
            $target.find("input:eq(0)").focus();
        }
    });
    allNextBtn.click(function() {
        var curStep = $(this).closest(".setup-content"),
            curStepBtn = curStep.attr("id"),
            nextStepWizard = $('div.setup-panel div a[href="#' + curStepBtn + '"]').parent().next().children("a"),
            curInputs = curStep.find("input[type='text'],input[type='url']"),
            isValid = true;
        $(".form-group").removeClass("has-error");
        for (var i = 0; i < curInputs.length; i++) {
            if (!curInputs[i].validity.valid) {
                isValid = false;
                $(curInputs[i]).closest(".form-group").addClass("has-error");
            }
        }
        if (isValid) nextStepWizard.removeAttr("disabled").trigger("click");
    });
    $("div.setup-panel div a.btn-primary").trigger("click");
});
$("#datepicker").datepicker({
    uiLibrary: "bootstrap4",
});

function copyToClipboard(element) {
    var $temp = $("<input>");
    $("body").append($temp);
    $temp.val($(element).text()).select();
    document.execCommand("copy");
    $temp.remove();
}

function hideShowPass(inputid, eyeid) {
    var password = document.getElementById(inputid);
    if (password.type === "password") {
        password.type = "text";
        $("#" + eyeid).toggleClass("fa-eye fa-eye-slash");
    } else {
        password.type = "password";
        $("#" + eyeid).toggleClass("fa-eye-slash fa-eye");
    }
}
$("#eye1").click(function() {
    var password = document.getElementById("enterPW1");
    if (password.type === "password") {
        password.type = "text";
        $("#eye1").toggleClass("fa-eye fa-eye-slash");
    } else {
        password.type = "password";
        $("#eye1").toggleClass("fa-eye-slash fa-eye");
    }
});
$("#eye2").click(function() {
    var password = document.getElementById("enterPW2");
    if (password.type === "password") {
        password.type = "text";
        $("#eye2").toggleClass("fa-eye fa-eye-slash");
    } else {
        password.type = "password";
        $("#eye2").toggleClass("fa-eye-slash fa-eye");
    }
});
(function() {
    "use strict";
    window.addEventListener("load", function() {
        var forms = document.getElementsByClassName("needs-validation");
        var validation = Array.prototype.filter.call(forms, function(form) {
            form.addEventListener("submit", function(event) {
                if (form.checkValidity() === false) {
                    event.preventDefault();
                    event.stopPropagation();
                }
                form.classList.add("was-validated");
            }, false);
        });
    }, false);
})();

function check() {
    if (document.getElementById("enterPW1").value === document.getElementById("enterPW2").value) {
        var element = document.getElementById("enterPW2");
        element.classList.add("match-pass");
        element.classList.remove("no-match-pass");
    } else {
        var element = document.getElementById("enterPW2");
        element.classList.add("no-match-pass");
        element.classList.remove("match-pass");
    }
}
$(document).ready(function() {
    jQuery('<div class="quantity-nav"><button class="quantity-button quantity-up">&#xf106;</button><button class="quantity-button quantity-down">&#xf107</button></div>').insertAfter(".quantity input");
    jQuery(".quantity").each(function() {
        var spinner = jQuery(this),
            input = spinner.find('input[type="number"]'),
            btnUp = spinner.find(".quantity-up"),
            btnDown = spinner.find(".quantity-down"),
            min = input.attr("min"),
            max = input.attr("max");
        btnUp.click(function() {
            var oldValue = parseFloat(input.val());
            if (oldValue >= max) {
                var newVal = oldValue;
            } else {
                var newVal = oldValue + 1;
            }
            spinner.find("input").val(newVal);
            spinner.find("input").trigger("change");
        });
        btnDown.click(function() {
            var oldValue = parseFloat(input.val());
            if (oldValue <= min) {
                var newVal = oldValue;
            } else {
                var newVal = oldValue - 1;
            }
            spinner.find("input").val(newVal);
            spinner.find("input").trigger("change");
        });
    });
});
$(".modal-auto-clear").on("shown.bs.modal", function() {
    var timer = $(this).data("timer") ? $(this).data("timer") : 1000;
    $(this).delay(timer).fadeOut(200, function() {
        $(this).modal("hide");
    });
});
$("#date-select").change(function() {
    var opval = $(this).val();
    if (opval == "datepicker-modal") {
        $("#dateModal").modal("show");
    }
});