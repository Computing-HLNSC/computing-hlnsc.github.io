fetch("../imports/imodal.html")
.then(response => response.text())
.then(data => {
	document.getElementById("imodal").innerHTML = data;
});

fetch("../imports/header.html")
.then(response => response.text())
.then(data => {
	document.getElementById("header").innerHTML = data;
});

const currentPage = window.location.pathname.split("/").pop();

if (currentPage === "index.html" || currentPage === "") {
	fetch("../imports/index_practical_courses.html")
	.then(response => response.text())
	.then(data => {
		document.getElementById("index_practical_courses").innerHTML = data;
	});

	fetch("../imports/index_academic_courses.html")
	.then(response => response.text())
	.then(data => {
		document.getElementById("index_academic_courses").innerHTML = data;
	});

	fetch("../imports/index_cisco_courses.html")
	.then(response => response.text())
	.then(data => {
		document.getElementById("index_cisco_courses").innerHTML = data;
	});
}