const services = {
    "System-level Optimized Software": "Develops customized software according to costumers",
    "Full Stack Development": "Connecting frontend with backend using REST APIs.",
    "Deployment": "Version control with Git, basic deployment with Linux/Docker."
};

const addServicesInHTML = () => {
    let html = ""
    let i = 1
    for (const [skill, description] of Object.entries(services)) {
        html += `
            <a class="a-b-lss-bl2" href="javascript:void(0)">
            <div class="d-b-lss-bl2">
                <div class="d-in-lss-bl2">
                <h2>${i}</h2>
                </div>
                <div class="d-ht-lss-bl2">
                <h2>${skill}</h2>
                </div>
                <div class="d-dt-lss-bl2">
                <p>${description}</p>
                </div>
            </div>
            </a>
        `;
        i++;
    }
    return html;
}



document.querySelectorAll("[wmodel]").forEach(
    el => {
        const modelName = el.getAttribute("wmodel");
        if(modelName == "services"){
            const html = addServicesInHTML();
            el.innerHTML = html;
        }
    }
);





