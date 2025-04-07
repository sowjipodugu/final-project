function navigate() {
    let source = document.getElementById("source").value;
    let destination = document.getElementById("destination").value;

    if (source === destination) {
        showModal();
    return;
}
// TODO: Your logic to show the path or marker
console.log(`Navigating from ${source} to ${destination}`);

 // Redirect to map page with query parameters
window.location.href = `map.html?source=${source}&destination=${destination}`;
}
function showModal() {
document.getElementById("customModal").style.display = "block";
}

function closeModal() {
document.getElementById("customModal").style.display = "none";
}
