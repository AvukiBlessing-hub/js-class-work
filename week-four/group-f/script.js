const taskInput = document.getElementById("taskInput");
const addTaskBtn = document.getElementById("addTaskBtn");
const taskList = document.getElementById("taskList");
const completedTasks = document.getElementById("completedTasks");
const deletedTasks = document.getElementById("deletedTasks");
const searchInput = document.getElementById("searchInput");
const clearCompletedBtn = document.getElementById("clearCompletedBtn");
const clearAllBtn = document.getElementById("clearAllBtn");
const themeToggle = document.getElementById("themeToggle");

// Dark/light theme toggle
themeToggle.addEventListener("click", () => document.body.classList.toggle("light"));

// Add new task
addTaskBtn.addEventListener("click", addTask);
taskInput.addEventListener("keypress", e => { if(e.key==="Enter") addTask(); });

// Add task function
function addTask() {
  const text = taskInput.value.trim();
  if (!text) return alert("Enter a task!");
  const li = createTaskElement(text);
  taskList.appendChild(li);
  taskInput.value = "";
}

// Create task element
function createTaskElement(text) {
  const li = document.createElement("li");

  // Task header
  const header = document.createElement("div");
  header.className = "task-header";

  const span = document.createElement("span");
  span.textContent = text;

  const actions = document.createElement("div");
  actions.className = "task-actions";

  // Complete button
  const completeBtn = document.createElement("button");
  completeBtn.textContent = "✔";
  completeBtn.onclick = () => toggleComplete(li);

  // Delete button
  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "🗑";
  deleteBtn.onclick = () => moveToDeleted(li);

  // Dropdown toggle
  const dropdownBtn = document.createElement("button");
  dropdownBtn.textContent = "▼";

  header.append(span, actions);
  actions.append(completeBtn, deleteBtn, dropdownBtn);

  // Dropdown content
  const content = document.createElement("div");
  content.className = "dropdown-content";

  // Due date
  const dueDate = document.createElement("input");
  dueDate.type = "date";
  dueDate.className = "due-date";
  content.appendChild(dueDate);

  // Subtask input
  const subtaskInputDiv = document.createElement("div");
  subtaskInputDiv.className = "subtask-input";
  const subtaskInput = document.createElement("input");
  subtaskInput.type = "text";
  subtaskInput.placeholder = "Add subtask...";
  const subtaskBtn = document.createElement("button");
  subtaskBtn.textContent = "+";

  // Subtask list
  const subtaskList = document.createElement("ul");
  subtaskList.className = "subtask-list";

  subtaskBtn.onclick = () => {
    if (!subtaskInput.value.trim()) return;
    const subLi = document.createElement("li");
    subLi.textContent = subtaskInput.value.trim();
    subtaskList.appendChild(subLi);
    subtaskInput.value = "";
  };

  subtaskInput.addEventListener("keypress", e => { if(e.key==="Enter") subtaskBtn.click(); });
  subtaskInputDiv.append(subtaskInput, subtaskBtn);
  content.append(subtaskInputDiv, subtaskList);

  // Dropdown toggle event
  dropdownBtn.onclick = () => content.classList.toggle("active");

  li.append(header, content);
  return li;
}

// Toggle complete/incomplete
function toggleComplete(taskLi) {
  taskLi.classList.toggle("completed");
  if (taskLi.classList.contains("completed")) {
    completedTasks.appendChild(taskLi);
  } else {
    taskList.appendChild(taskLi);
  }
}

// Move task to deleted section with Restore & Permanent Delete
function moveToDeleted(taskLi) {
  const actionsDiv = taskLi.querySelector(".task-actions");
  actionsDiv.innerHTML = "";

  const restoreBtn = document.createElement("button");
  restoreBtn.textContent = "⤴ Restore";
  restoreBtn.onclick = () => {
    const newActions = taskLi.querySelector(".task-actions");
    newActions.innerHTML = "";
    const completeBtn = document.createElement("button");
    completeBtn.textContent = "✔";
    completeBtn.onclick = () => toggleComplete(taskLi);
    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "🗑";
    deleteBtn.onclick = () => moveToDeleted(taskLi);
    const dropdownBtn = document.createElement("button");
    dropdownBtn.textContent = "▼";
    dropdownBtn.onclick = () => taskLi.querySelector(".dropdown-content").classList.toggle("active");
    newActions.append(completeBtn, deleteBtn, dropdownBtn);
    taskList.appendChild(taskLi);
  };

  const permDeleteBtn = document.createElement("button");
  permDeleteBtn.textContent = "❌ Delete";
  permDeleteBtn.onclick = () => taskLi.remove();

  actionsDiv.append(restoreBtn, permDeleteBtn);
  deletedTasks.appendChild(taskLi);
}

// Search filter (main tasks only)
searchInput.addEventListener("input", () => {
  const query = searchInput.value.toLowerCase();
  Array.from(taskList.children).forEach(task => {
    const text = task.querySelector("span").textContent.toLowerCase();
    task.style.display = text.includes(query) ? "block" : "none";
  });
});

// Clear completed tasks
clearCompletedBtn.addEventListener("click", () => {
  Array.from(completedTasks.children).forEach(task => task.remove());
});

// Clear all tasks
clearAllBtn.addEventListener("click", () => { taskList.innerHTML = ""; });