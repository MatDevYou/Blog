var badge = document.querySelector(".badge")
var caption = document.querySelector("figcaption")
var details = document.querySelector(".details__content")

var lowResImage = document.querySelector(".img")
var highResImage = document.createElement("img")

var front = document.querySelector(".front")
var back = document.querySelector(".back")
var showFrontBtn = document.querySelector("#show-front")
var showBackBtn = document.querySelector("#show-back")

caption.addEventListener("mouseover", function() {
var contentHeight = detailsContent.offsetHeight
details.computedStyleMap.height = contentHeight + 10 + "px"
badge.innerHTML = '<i class= "fas fa-minus-square"></i>'
});

caption.addEventListener("mouseout", function() {
details.computedStyleMap.height = 0
badge.innerHTML = '<i class="fas fa-plus-square"></i>'

})