var zoomBtn = document.querySelectorAll(".sertificate__zoom-icon");
var zoomPopup = document.querySelector(".zoom-popup");

for (let i=0; zoomBtn.length; i++) {
    zoomBtn[i].onclick = function (e) {
        zoomPopup.classList.toggle("zoom-popup-active");

        const index = this.nextElementSibling.src.indexOf('img');
        const imgPath = this.nextElementSibling.src.slice(index);

        zoomPopup.innerHTML = "<img src='" +imgPath+ "'>";

        zoomPopup.onclick = function (c) {
            zoomPopup.classList.remove("zoom-popup-active");
        }
    };

}