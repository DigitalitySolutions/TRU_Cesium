document.addEventListener('DOMContentLoaded', () => {
    const dropdown = document.getElementById('ddELR');
    const apiUrl = 'https://7ypjauhya1.execute-api.us-east-1.amazonaws.com/ElrVesrion1/mongo'; // Replace with your actual API endpoint

    // Fetch data from the API
    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            // Assuming data is an array of objects with 'id' and 'name' properties
            data.forEach(item => {
                const option = document.createElement('option');
                option.value = 'ELR';
                option.textContent = item.elr;
                dropdown.appendChild(option);
            });
        })
        .catch(error => {
            console.error('Error fetching data:', error);
        });
});


// Function to draw a route 
function drawRoute(route) { 
  viewer.entities.removeAll(); // Clear existing entities 
  viewer.entities.add({ 
    polyline: { 
      positions: routes[route], width: 5, material: Cesium.Color.RED 
    } 
  }); 
  viewer.zoomTo(viewer.entities); 
} 


// Handle dropdown change 
document.getElementById('routeSelect').addEventListener('change', function() { 
  const selectedRoute = this.value; 
  drawRoute(selectedRoute); 
}); 
// Draw initial route 
drawRoute('route1');

