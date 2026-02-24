async function loadMachines() {
    const res = await fetch("/api/machines");
    const machines = await res.json();

    const container = document.getElementById("machines");
    container.innerHTML = "";

    machines.forEach(machine => {
        container.innerHTML += `
            <div class="card">
                <h3>${machine.title}</h3>
                <p>${machine.description}</p>
                <p><b>₹ ${machine.pricePerDay} / day</b></p>
                <p>${machine.location}</p>
            </div>
        `;
    });
}

loadMachines();