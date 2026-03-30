let formConfig = {}; // start empty

const fieldList = document.getElementById("fieldList");
const addFieldBtn = document.getElementById("addFieldBtn");
const saveBtn = document.getElementById("saveBtn");

// 🔹 Render
const renderFields = () => {
	fieldList.innerHTML = "";

	Object.keys(formConfig).forEach((key) => {
		const li = document.createElement("li");

		li.textContent = `${key} (${formConfig[key]})`;

		const delBtn = document.createElement("button");
		delBtn.textContent = "Delete";

		// ✅ Proper event binding (NO inline JS)
		delBtn.addEventListener("click", () => {
			delete formConfig[key];
			renderFields();
		});

		li.appendChild(delBtn);
		fieldList.appendChild(li);
	});
};

// 🔹 CREATE
const addField = () => {
	const name = document.getElementById("fieldName").value.trim();
	const type = document.getElementById("fieldType").value;

	if (!name) return alert("Field name required");

	formConfig[name] = type;
	renderFields();
};

// 🔹 SAVE
const saveConfig = () => {
	localStorage.setItem("fitnessConfig", JSON.stringify(formConfig));
	alert("Saved!");
};

// 🔹 Events
addFieldBtn.addEventListener("click", addField);
saveBtn.addEventListener("click", saveConfig);

renderFields();
