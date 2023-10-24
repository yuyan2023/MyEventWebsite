
// references from https://chat.openai.com/
async function searchlist() {
    let table = document.getElementById('search-table');
    table.style.display = 'none';

    const baseUrl = `https://damp-castle-86239-1b70ee448fbd.herokuapp.com/decoapi/community_events/`;


    const requestOptions = {
        method: 'GET',
       
    };
    try {
        const response = await fetch(baseUrl, requestOptions);
        const result = await response.json();

        // Display the data as an unordered list
        console.log(result)
        
        const eventDetails = document.getElementById("eventDetails");
        eventDetails.innerHTML = '';
        let tableHTML = '<table border="1"  class="table">' // Start the table

        // Add table headers based on the image columns
        tableHTML += `
            <tr>
                <th>Photo</th>
                <th>Name</th>
                <th>Date</th>
                <th>Location</th>
                <th>Organiser</th>
                <th>capacity</th>
                <th>intensity</th>
            </tr>
        `;
        
        const maxRowsToShow = 10; // Set the maximum number of rows to display

        for (let i = 0; i < Math.min(maxRowsToShow, result.length); i++) {
            const event = result[i];
            tableHTML += '<tr>'; // Start a table row
            tableHTML += `<td><img src="${event.photo} ">
            </td>`
            tableHTML += `<td>${event.name}</td>`;         // Activities
            tableHTML += `<td>${event.date_time.substring(0,7)}</td>`;         // Date
            tableHTML += `<td>${event.location}</td>`;     // Location
            tableHTML += `<td>${event.organiser}</td>`;     // Distance
            tableHTML += `<td>${Math.floor(Math.random()*30)}</td>`;     // Capacity
            tableHTML += `<td><img src="media/Star.png" alt="do reading" width="30"></td>`;    // Intensity
        
            tableHTML += '</tr>'; // End the table row
        }
        
        tableHTML += '</table>'; // End the table
   
        eventDetails.innerHTML = tableHTML; // Add the table to the eventDetails
        
    } catch (error) {
        console.error(error);
        document.getElementById("eventDetails").textContent = 'Error fetching data.';
    }
}

function refresh() {
    location.reload();
}
