const API_URL = process.env.REACT_APP_API_URL;
const API_KEY = process.env.REACT_APP_API_KEY;

const tasksEl = document.getElementById("tasks");
const statusFilterEl = document.getElementById("statusFilter");

async function fetchTasks() {
  const status = statusFilterEl.value;
  const url = new URL(API_URL);
  if (status) url.searchParams.append("status", status);

  const res = await fetch(url, { headers: { "x-api-key": API_KEY } });
  const data = await res.json();
  renderTasks(data);
}

function renderTasks(tasks) {
  tasksEl.innerHTML = "";
  tasks.forEach(t => {
    const li = document.createElement("li");
    li.textContent = `[${t.status}] ${t.title} (${t.priority})`;
    li.onclick = () => changeStatus(t.id, t.status);
    tasksEl.appendChild(li);
  });
}

async function addTask() {
  const title = document.getElementById("title").value;
  const description = document.getElementById("description").value;
  const priority = document.getElementById("priority").value;

  await fetch(API_URL, {
    method: "POST",
    headers: { 
      "Content-Type": "application/json",
      "x-api-key": API_KEY
    },
    body: JSON.stringify({ title, description, priority, status: "NEW" })
  });

  document.getElementById("title").value = "";
  document.getElementById("description").value = "";
  fetchTasks();
}

async function changeStatus(id, currentStatus) {
  let next = currentStatus === "NEW" ? "IN_PROGRESS" :
             currentStatus === "IN_PROGRESS" ? "DONE" : "NEW";

  await fetch(`${API_URL}/${id}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
      "x-api-key": API_KEY
    },
    body: JSON.stringify({ status: next })
  });

  fetchTasks();
}

// Event listeners
document.getElementById("addBtn").onclick = addTask;
statusFilterEl.onchange = fetchTasks;

fetchTasks();