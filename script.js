document.addEventListener("DOMContentLoaded", function () {
    const textInput = document.getElementById("textInput");
    const countButton = document.getElementById("countButton");
    const wordCount = document.getElementById("wordCount");

    countButton.addEventListener("click", function () {
        const inputText = textInput.value.trim();
        const words = inputText.split(/\s+/);

        if (inputText === "") {
            wordCount.textContent = "0";
        } else {
            wordCount.textContent = words.length;
        }
    });
});
