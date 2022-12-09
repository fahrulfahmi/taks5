let projectList = [
  {
    id: "01",
    projectName: "APP 1",
    startDate: "01/14/2022",
    endDate: "03/14/2022",
    projectDesc: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Recusandae, dignissimos, molestiae minus eius vero incidunt dolorem at blanditiis laboriosam minima harum repudiandae, tempore adipisci nostrum.`,
    tech: ["HTML 5", "CSS 3", "JavaScript", "React JS"],
    img: "img/project.png",
  },
  {
    id: "02",
    projectName: "App 2",
    startDate: "02/14/2022",
    endDate: "03/14/2022",
    projectDesc: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Recusandae, dignissimos, molestiae minus eius vero incidunt dolorem at blanditiis laboriosam minima harum repudiandae, tempore adipisci nostrum.`,
    tech: ["HTML 5", "JavaScript", "React JS"],
    img: "img/project.png",
  },
  {
    id: "03",
    projectName: "APP 3",
    startDate: "10/14/2021",
    endDate: "03/14/2022",
    projectDesc: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Recusandae, dignissimos, molestiae minus eius vero incidunt dolorem at blanditiis laboriosam minima harum repudiandae, tempore adipisci nostrum.`,
    tech: ["HTML 5", "CSS 3"],
    img: "img/project.png",
  },
  {
    id: "04",
    projectName: "YouNoob",
    startDate: "12/14/2021",
    endDate: "03/14/2022",
    projectDesc: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure
    voluptatibus fugiat, veniam magnam eos pariatur earum illo odit,
    eius voluptas expedita. Ullam, repellendus inventore
    exercitationem perferendis beatae ea enim ad, nemo tempora
    ducimus sunt in, eaque illum eius quo necessitatibus non
    delectus nam? Inventore, aliquam.`,
    tech: ["HTML 5", "CSS 3", "JavaScript"],
    img: "img/project.png",
  },
];
const handleDeleteClick = (e) => {
  projectList = projectList.filter((el) => {
    return el.id != e.target.id;
  });
  rowNode.innerHTML = "";
  updateProjectListDOM();
};
let rowNode = document.getElementById("projectListRow");
let deleteButton;
const updateProjectListDOM = () => {
  projectList.forEach((el) => {
    let startDate = new Date(el.startDate);
    let endDate = new Date(el.endDate);
    let t = endDate - startDate;
    let satuBulan = 1000 * 60 * 60 * 24 * 30;
    t = Math.round(t / satuBulan);
    t < 1 ? (t = "kurang dari 1") : (t = t);
    rowNode.innerHTML += `<div class="card">
    <div class="card-img">
      <a href="/project-detail.html?id=${el.id}">
      <img src="${el.img}" alt="#" />
      </a>
    </div>
    <div class="card-title">
    <a href="/project-detail.html?id=${el.id}">
      <h3>${el.projectName}</h3>
      <small>Durasi : ${t} Bulan</small>
      </a>
    </div>
    <div class="card-body">
      <p>
        ${el.projectDesc}
      </p>
    </div>
    <div class="tech-icon">
                ${
                  el.tech.includes("HTML 5")
                    ? '<img src="img/html5.png" alt="HTML 5" />'
                    : ""
                }
                ${
                  el.tech.includes("CSS 3")
                    ? '<img src="img/css3.png" alt="CSS 3" />'
                    : ""
                }
                ${
                  el.tech.includes("JavaScript")
                    ? '<img src="img/js.png" alt="JavaScript" />'
                    : ""
                }
                ${
                  el.tech.includes("React JS")
                    ? '<img src="img/react.png" alt="React JS" />'
                    : ""
                }
              </div>
              <div class="button-group">
                <button>edit</button>
                <button id=${el.id} class="delete-button">delete</button>
              </div>
  </div>`;
  });
  deleteButton = document.querySelectorAll(".delete-button");
  deleteButton.forEach((el) => {
    el.addEventListener("click", handleDeleteClick);
  });
};
updateProjectListDOM();
let addProjectForm = document.getElementById("projectForm");
addProjectForm.addEventListener("submit", (e) => {
  e.preventDefault();
  let newProject = {
    id: new Date().getTime().toString(),
    projectName: document.getElementById("projectName").value.trim(),
    startDate: document.getElementById("startDate").value.trim(),
    endDate: document.getElementById("endDate").value.trim(),
    projectDesc: document.getElementById("projectDesc").value.trim(),
    tech: [],
    img: "",
  };
  let error = "";
  html = document.getElementById("html");
  css = document.getElementById("css");
  javascript = document.getElementById("javascript");
  reactjs = document.getElementById("reactjs");
  html.checked && newProject.tech.push(html.value);
  css.checked && newProject.tech.push(css.value);
  javascript.checked && newProject.tech.push(javascript.value);
  reactjs.checked && newProject.tech.push(reactjs.value);
  projectImg = document.getElementById("projectImg").files;
  if (projectImg.length > 0) {
    newProject.img = URL.createObjectURL(projectImg[0]);
  } else {
    newProject.img = "";
  }
  newProject.startDate = formatWaktu(newProject.startDate);
  newProject.endDate = formatWaktu(newProject.endDate);
  for (data in newProject) {
    if (newProject[data] == "" && error == "") {
      error = "Inputan tidak boleh kosong";
    }
  }
  error != "" ? alert(error) : projectList.push(newProject);
  rowNode.innerHTML = "";
  updateProjectListDOM();
  error == "" && addProjectForm.reset();
});
const formatWaktu = (time) => {
  time = time.split("-");
  time = `${time[1]}/${time[2]}/${time[0]}`;
  return time;
};
