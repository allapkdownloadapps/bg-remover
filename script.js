let upload = document.getElementById("upload");
let imagePreview = document.getElementById("imagePreview");
let download = document.getElementById("download");

let selectedFile;


upload.onchange = function(){

    selectedFile = upload.files[0];

    if(selectedFile){

        imagePreview.src = URL.createObjectURL(selectedFile);

    }

};



async function removeBG(){

    if(!selectedFile){
        alert("Pehle image upload karo");
        return;
    }


    let formData = new FormData();

    formData.append("image_file", selectedFile);
    formData.append("size","auto");


    let response = await fetch(
        "https://api.remove.bg/v1.0/removebg",
        {
            method:"POST",

            headers:{
                "X-Api-Key":"aNmVoeoS3bxykDa6aKFo6dn4"
            },

            body:formData
        }
    );


    let blob = await response.blob();


    let url = URL.createObjectURL(blob);


    imagePreview.src = url;


    download.href = url;
    download.style.display="block";
    download.innerHTML="Download PNG";


}
