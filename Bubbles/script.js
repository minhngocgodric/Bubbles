const noteInput = document.getElementById("note-input");
const noteList = document.getElementById("note-list");

// Lấy danh sách ghi chú từ Local Storage (nếu có)
const notes = JSON.parse(localStorage.getItem("notes")) || [];

// Hiển thị danh sách ghi chú
function displayNotes() {
    noteList.innerHTML = "";
    notes.forEach((note, index) => {
        const noteElement = document.createElement("div");
        noteElement.classList.add("note");
        noteElement.textContent = note;
        noteElement.addEventListener("click", () => deleteNote(index));
        noteList.appendChild(noteElement);
    });
}

// Thêm ghi chú mới
function addNote() {
    const newNote = noteInput.value.trim();
    if (newNote !== "") {
        notes.push(newNote);
        localStorage.setItem("notes", JSON.stringify(notes));
        noteInput.value = "";
        displayNotes();
    }
}

// Xóa ghi chú
function deleteNote(index) {
    notes.splice(index, 1);
    localStorage.setItem("notes", JSON.stringify(notes));
    displayNotes();
}

// Hiển thị ghi chú khi trang web được tải
displayNotes();