function showToast(text = "Belum tersedia di App Store") {
  const toast = document.getElementById("toast");

  toast.textContent = text;
  toast.classList.remove("hide");
  toast.style.visibility = "visible";
  toast.classList.add("show");

  setTimeout(() => {
    toast.classList.remove("show");
    toast.classList.add("hide");

    setTimeout(() => {
      toast.style.visibility = "hidden";
      toast.classList.remove("hide");
    }, 400);
  }, 2000);
}
