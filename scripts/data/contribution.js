const contributions = {
    // 1: ""
}

const addContributionsInHTML = () => {
    let html = "";
    for(const [i, contribution] of Object.entries(contributions)){
        html += `<p><div class="dot"></div>${contribution}</p>`
    }
    return html;
}

const table = document.getElementById("contributionTable");
table.innerHTML = addContributionsInHTML();

//pgm: 