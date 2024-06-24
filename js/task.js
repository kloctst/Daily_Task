document.addEventListener("DOMContentLoaded", () => {
  const tasks = [
    "Melakukan presentasi produk kepada klien ataupun prospek klien",
    "Melakukan follow-up pada klien yang sebelumnya sudah dihubungi",
    "Melakukan demonstrasi produk kepada klien",
    "Melakukan negosiasi kepada klien untuk mencapai kesepakatan kerja",
    "Memperbarui database klien dengan informasi yang terbaru",
    "Memantau dan menganalisis data penjualan untuk meningkatkan kinerja.",
    "Mengembangkan materi pemasaran seperti brosur, artikel blog, dan posting media sosial.",
    "Melakukan pelatihan produk kepada tim penjualan untuk meningkatkan pemahaman mereka.",
    "Menghadiri pameran dagang untuk memperluas jangkauan produk.",
    "Berkerja sama dengan tim pengembangan produk untuk perbaikan produk.",
    "Melakukan analisis pesaing untuk mempertahankan keunggulan kompetitif.",
    "Bertanggung jawab atas manajemen akun media sosial perusahaan.",
    "Menyusun laporan kinerja pemasaran dan penjualan.",
    "Menangani keluhan pelanggan dengan efektif untuk mempertahankan kepuasan pelanggan.",
    "Mengelola anggaran pemasaran untuk efisiensi dan pencapaian tujuan."
  ];

// Dates for each task category
  const creationDates = {
      'container': generateDates(50, new Date('July 24, 2024')),
      'container-4': generateDates(50, new Date('July 27, 2024')),
      'container-5': generateDates(50, new Date('July 30, 2024'))
  };

  const deadlineDates = {
      'container': generateDates(50, new Date('July 25, 2024')),
      'container-4': generateDates(50, new Date('July 28, 2024')),
      'container-5': generateDates(50, new Date('July 31, 2024'))
  };

  let currentTaskIndices = {
      'container': 0,
      'container-4': 0,
      'container-5': 0
  };

  // Function to generate dates array based on start date and count
  function generateDates(count, startDate) {
      const dates = [];
      let currentDate = new Date(startDate.getTime());
      for (let i = 0; i < count; i++) {
          currentDate.setDate(currentDate.getDate() + 1); // Move to the next day
          dates.push(formatDate(currentDate));
      }
      return dates;
  }

  // Function to format date as 'Day Month Year'
  function formatDate(date) {
      const day = date.getDate();
      const month = date.toLocaleString('default', { month: 'long' });
      const year = date.getFullYear();
      return `${day} ${month} ${year}`;
  }

  function createTaskElement(task, className, creationDate, deadlineDate) {
      const taskContainer = document.createElement('div');
      taskContainer.className = className;
      taskContainer.innerHTML = `
          <div class="text-wrapper">${task}</div>
          <p class="p">Created at ${creationDate}</p>
          <div class="text-wrapper-2">In Progress</div>
          <div class="text-wrapper-3">${deadlineDate}</div>
          <div class="text-wrapper-4">All Employee</div>
          <div class="text-wrapper-5">High</div>
          <img class="icon-button" src="/assets/task.png" />
          <button class="button markCompletedButton"><div class="text-wrapper-6">Mark as Completed</div></button>
          <img class="clock" src="/assets/deadline.png" />
          <img class="image" src="/assets/priority.png" />
          <img class="img" src="/assets/user.png" />
          <img class="image-2" src="/assets/progres.png" />
      `;
      const button = taskContainer.querySelector('.markCompletedButton');
      button.addEventListener('click', handleTaskCompletion);
      return taskContainer;
  }

  function handleTaskCompletion(event) {
      const taskContainer = event.target.closest('.container, .container-4, .container-5');
      const className = taskContainer.className;
      taskContainer.remove();
      
      incrementPoints(); // Call the function to increment points

      if (currentTaskIndices[className] < tasks.length) {
          const newTask = tasks[currentTaskIndices[className]];
          const creationDate = creationDates[className][currentTaskIndices[className] % creationDates[className].length];
          const deadlineDate = deadlineDates[className][currentTaskIndices[className] % deadlineDates[className].length];
          const newTaskContainer = createTaskElement(newTask, className, creationDate, deadlineDate);
          document.getElementById('task-container').appendChild(newTaskContainer);

          // Update index for the next task
          currentTaskIndices[className]++;
          if (currentTaskIndices[className] >= tasks.length) {
              currentTaskIndices[className] = 0; // Reset to start from the beginning
          }
      } else {
          alert("All tasks completed!");
      }
  }

  const buttons = document.querySelectorAll('.button');
  buttons.forEach(button => button.addEventListener('click', handleTaskCompletion));

  // Function to increment points
  function incrementPoints() {
      const pointText = document.getElementById('pointText');
      let currentPoints = parseInt(pointText.innerText, 10);
      currentPoints += 1;
      pointText.innerText = currentPoints;
  }
});

