let upload = document.getElementById("upload");
let imagePreview = document.getElementById("imagePreview");


upload.onchange = function(){

    let file = upload.files[0];

    if(file){

        imagePreview.src = URL.createObjectURL(file);

    }

};



function removeBG(){

    alert(
    "Background remover AI connect karna baki hai. Next step me API add karenge."
    );

}
