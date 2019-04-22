var zoomBtn = document.querySelectorAll(".sertificate__zoom-icon");
var zoomPopup = document.querySelector(".zoom-popup");
var zoomPopupInner = document.querySelector(".zoom-popup__inner");

for (let i=0; i<zoomBtn.length; i++) {
    zoomBtn[i].onclick = function (e) {
        zoomPopup.classList.toggle("zoom-popup-active");

        const index = this.nextElementSibling.src.indexOf('img');
        const imgPath = this.nextElementSibling.src.slice(index);
        const fullPath = cdn_path + imgPath;

        zoomPopupInner.innerHTML = "<img src='" +fullPath+ "'>";


    };
}

zoomPopup.onclick = function (c) {
    console.log("baka");
    zoomPopup.classList.remove("zoom-popup-active");
};
