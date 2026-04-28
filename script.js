const modelData = {
    'clio': { title: 'Renault Clio', type: 'Citadine Polyvalente' },
    'megane': { title: 'Renault Mégane', type: 'Berline Compacte' },
    'austral': { title: 'Renault Austral', type: 'SUV Familial' },
    'captur': { title: 'Renault Captur', type: 'Crossover Urbain' },
    'zoe': { title: 'Renault ZOE', type: '100% Électrique' }
};

function showDetails(modelKey) {
    const modal = document.getElementById('info-modal');
    const data = modelData[modelKey];

    document.getElementById('modal-title').innerText = data.title;
    document.getElementById('modal-type').innerText = data.type;

    modal.style.display = "block";
}

function closeModal() {
    document.getElementById('info-modal').style.display = "none";
}

// Bach tsded l-modal ila cliquiti outdoor
window.onclick = function(event) {
    const modal = document.getElementById('info-modal');
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
