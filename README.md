# bg-remover
AI-powered background remover website that removes image backgrounds instantly and allows users to download transparent PNG images.
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>AI Background Remover</title>
    <link rel="stylesheet" href="style.css">
</head>

<body>

<div class="container">

    <h1>AI Background Remover</h1>
    <p>Remove image background instantly</p>

    <div class="upload-box">
        <input type="file" id="imageInput" accept="image/*">

        <button onclick="removeBackground()">
            Remove Background
        </button>
    </div>

    <div class="preview">
        <img id="previewImage" src="" alt="Preview">
    </div>

    <a id="downloadBtn" style="display:none;" download="removed-bg.png">
        Download Image
    </a>

</div>


<script src="script.js"></script>

</body>
</html>
