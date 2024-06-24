document.addEventListener("DOMContentLoaded", () => {
    // Inisialisasi poin dari localStorage atau default 0
    let points = localStorage.getItem("points") ? parseInt(localStorage.getItem("points"), 10) : 0;

    const pointText = document.getElementById("pointText");
    pointText.textContent = points;

    function updatePoints() {
        points += 1;
        pointText.textContent = points;
        localStorage.setItem("points", points); // Simpan nilai poin ke localStorage
    }

    const buttons = document.querySelectorAll('.button');
    buttons.forEach(button => {
        button.addEventListener('click', (event) => {
            handleTaskCompletion(event);
            updatePoints(); // Panggil fungsi untuk memperbarui poin
        });
    });

    function handleTaskCompletion(event) {
        const taskContainer = event.target.closest('.container, .container-4, .container-5');
        const className = taskContainer.className;
        taskContainer.remove();

        // Tambahkan logika untuk menambah tugas baru (jika ada)
    }
});
