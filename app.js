const btnNavigate = document.getElementById("btnNavigate");
const textareaDOMTracker = document.getElementById("textareaDOMTracker");


btnNavigate.addEventListener("click", () => {
    console.log(textareaDOMTracker.value);
    textareaDOMTracker.value = "";
})