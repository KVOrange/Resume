let myPhoto = document.getElementById('my-photo');
let imageLayout = document.getElementById('image-layout');
let hiddenElements = document.getElementsByClassName('visually-hidden');

let vkLink = document.getElementById("vk")
let githubLink = document.getElementById("github")
let instagramLink = document.getElementById("instagram")
let linkedinLink = document.getElementById("linkedin")

myPhoto.style.boxShadow = '-50px -50px #fd7e14';
imageLayout.style.left = "390px";
imageLayout.style.bottom = "-40px";

for (el of hiddenElements) {
    el.classList.remove('visually-hidden');
}

vkLink.onclick = function() {
    window.location.href = "https://vk.com/kvorange"
}

githubLink.onclick = function() {
    window.location.href = "https://github.com/KVOrange"
}

instagramLink.onclick = function() {
    window.location.href = "https://www.instagram.com/kirillchaek/"
}

linkedinLink.onclick = function() {

}