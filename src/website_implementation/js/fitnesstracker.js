    // the API is referenced from https://rapidapi.com/malaaddincelik/api/fitness-calculator
    async function calculateCalories() {
    const age = document.getElementById("age").value;
    const gender = document.getElementById("gender").value;
    const height = document.getElementById("height").value;
    const weight = document.getElementById("weight").value;
    const activitylevel = document.getElementById("activitylevel").value;

    const url = `https://fitness-calculator.p.rapidapi.com/dailycalorie?age=${age}&gender=${gender}&height=${height}&weight=${weight}&activitylevel=${activitylevel}`;
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': 'a338b86333msh0ac563539d576f6p1d643bjsn80e803aa3ee7',
            'X-RapidAPI-Host': 'fitness-calculator.p.rapidapi.com'
        }
    };

    try {
        const response = await fetch(url, options);
        const result = await response.json();
        document.getElementById("result").textContent = JSON.stringify(result);
    } catch (error) {
        console.error(error);
        document.getElementById("result").textContent = 'Error fetching data.';
    }
}

