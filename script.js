function upDate(previewPic){

    console.log("Mouse Over");

    console.log(previewPic.alt);
    console.log(previewPic.src);

    let imageDiv = document.getElementById("image");

    imageDiv.innerHTML = previewPic.alt;

    imageDiv.style.backgroundImage =
        "url('" + previewPic.src + "')";

}

function unDo(){

    let imageDiv = document.getElementById("image");

    imageDiv.innerHTML =
    "Di chuột qua một hình ảnh bên dưới để hiển thị ở đây.";

    imageDiv.style.backgroundImage = "url('')";

}