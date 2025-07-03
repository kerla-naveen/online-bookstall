function loadBooks(branch) {
    let books = {
        'cse': [
            {title: "Data Structures", img: "cse.png", pdf: "JavaScript Everywhere.pdf"},
            {title: "Algorithms", img: "cse.png", pdf: "JavaScript Everywhere.pdf"}
        ],
        'ece': [
            {title: "Digital Circuits", img: "digital_circuits.jpg", pdf: "digital_circuits.pdf"},
            {title: "Signal Processing", img: "signal_processing.jpg", pdf: "signal_processing.pdf"}
        ],
        'eee': [
            {title: "Power Systems", img: "power_systems.jpg", pdf: "power_systems.pdf"},
            {title: "Electrical Machines", img: "electrical_machines.jpg", pdf: "electrical_machines.pdf"}
        ],
        'mech': [
            {title: "Thermodynamics", img: "thermodynamics.jpg", pdf: "thermodynamics.pdf"},
            {title: "Fluid Mechanics", img: "fluid_mechanics.jpg", pdf: "fluid_mechanics.pdf"}
        ],
        'civil': [
            {title: "Structural Analysis", img: "structural_analysis.jpg", pdf: "structural_analysis.pdf"},
            {title: "Concrete Technology", img: "concrete_technology.jpg", pdf: "concrete_technology.pdf"}
        ]
    };

    let contentDiv = document.getElementById("main-content");
    contentDiv.innerHTML = ""; // Clear previous content
    
    books[branch].forEach(book => {
        let bookDiv = document.createElement("div");
        bookDiv.className = "book";
        bookDiv.innerHTML = `
            <a href="${book.pdf}" target="_blank">
                <img src="${book.img}" alt="${book.title}">
            </a>
            <p>${book.title}</p>
        `;
        contentDiv.appendChild(bookDiv);
    });
}

function loadContent(page) {
    let contentDiv=document.getElementById("main-content");
    let iframe=document.createElement('iframe');
    contentDiv.appendChiled(iframe);
    document.getElementById("content-frame").src = page;
}