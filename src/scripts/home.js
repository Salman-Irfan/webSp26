// ✅ Safe fallback
const formConfig = JSON.parse(localStorage.getItem("fitnessConfig")) || {};

const form = document.getElementById("dynamicForm");
const submitBtn = document.getElementById("submitFormBtn");

//  Generate Form
const renderForm = () => {
	form.innerHTML = "";

	if (Object.keys(formConfig).length === 0) {
		form.innerHTML = "<p>No fields configured by admin.</p>";
		return;
	}

	Object.keys(formConfig).forEach((key) => {
		const label = document.createElement("label");
		label.textContent = key;

		const input = document.createElement("input");
		input.type = formConfig[key];
		input.id = key;

		form.appendChild(label);
		form.appendChild(document.createElement("br"));
		form.appendChild(input);
		form.appendChild(document.createElement("br"));
		form.appendChild(document.createElement("br"));
	});
};

//  SUBMIT
const submitForm = () => {
	let userData = {};

	Object.keys(formConfig).forEach((key) => {
		const value = document.getElementById(key).value;
		userData[key] = value;
	});

	document.getElementById("output").textContent = JSON.stringify(
		userData,
		null,
		2,
	);
};

//  Event
submitBtn.addEventListener("click", submitForm);

//  Init
renderForm();
