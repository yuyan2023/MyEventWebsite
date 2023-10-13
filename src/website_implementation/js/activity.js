

async function searchlist() {
    var table = document.getElementById('search-table');
    table.style.display = 'none';

    const namelist = document.getElementById("name").value;
    const locationlist = document.getElementById("location").value;
    const organiserlist = document.getElementById("organiser").value;
    const baseUrl = `https://damp-castle-86239-1b70ee448fbd.herokuapp.com/decoapi/community_events/`;
    
    const queryParams = {
    name : namelist,
    location: locationlist,
    organiser: organiserlist,


    
}


const queryString = new URLSearchParams(queryParams).toString();
const urlWithParams = baseUrl+"?"+queryString;

    const requestOptions = {
        method: 'GET',
       
    };
    try {
        const response = await fetch(urlWithParams, requestOptions);
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
        
        for (const event of result) {
            tableHTML += '<tr>'; // Start a table row
            tableHTML += `<td><img src="${event.photo} ">
            </td>`
            tableHTML += `<td>${event.name}</td>`;         // Activities
            tableHTML += `<td>${event.date_time}</td>`;         // Date
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
// async function http(obj) {
//     let { method,url,params,data } = obj
//     console.log(method, url, params, data)
//     if (params) {
//         let str = new URLSearchParams(params).toString()
//         console.log(str)
//     }
// }

// async function searchlist() {
//     let result = http({
//         method:'get',
//         url:'https://damp-castle-86239-1b70ee448fbd.herokuapp.com/decoapi/community_events/',
      
//     })
//     console.log(result)
// }

// searchlist()