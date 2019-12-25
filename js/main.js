'use strict'

$(".ba-card-item").not(":first").hide();
$(".ba-tab").click(function () {
	$(".ba-tab").removeClass("active").eq($(this).index()).addClass("active");
	$(".ba-card-item").hide().eq($(this).index()).fadeIn()
}).eq(0).addClass("active");