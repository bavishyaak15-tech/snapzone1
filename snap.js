const imageUpload = document.getElementById("imageUpload");
const gallery = document.getElementById("gallery");

imageUpload.addEventListener("change", function(event) {
    const files = event.target.files;

    for (let file of files) {
        if (!file.type.startsWith("image/")) {
            alert("❌ Only image files are allowed!");
            continue;
        }

        if (file.size > 2 * 1024 * 1024) {
            alert("⚠️ Max file size is 2MB!");
            continue;
        }

        const reader = new FileReader();
        reader.onload = function(e) {
            const imgCard = document.createElement("div");
            imgCard.className = "img-card";

            const img = document.createElement("img");
            img.src = e.target.result;

            const deleteBtn = document.createElement("button");
            deleteBtn.className = "delete-btn";
            deleteBtn.textContent = "DELETE";

            deleteBtn.addEventListener("click", function() {
                imgCard.remove();
            });

            imgCard.appendChild(img);
            imgCard.appendChild(deleteBtn);
            gallery.appendChild(imgCard);
        };

        reader.readAsDataURL(file);
    }
});
