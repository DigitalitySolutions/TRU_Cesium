// Initialize Cesium viewer 
const viewer = new Cesium.Viewer('cesiumContainer'); // Example routes with coordinates 
const routes = { 
  'route1': [ 
    Cesium.Cartesian3.fromDegrees(-75.10, 40.00), Cesium.Cartesian3.fromDegrees(-75.20, 40.00) 
  ], 
  'route2': [ 
    Cesium.Cartesian3.fromDegrees(-75.30, 40.00), Cesium.Cartesian3.fromDegrees(-75.40, 40.00) 
  ] 
}; 
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

document.addEventListener('DOMContentLoaded', function () {
    const dropdown = document.getElementById('dropdown');

    // Define the API endpoint
    const apiURL = 'https://www.digitalitysolutions.co.uk/_functions/get_elrComplete'; // Replace with your API endpoint

    // Fetch data from the API
    fetch(apiURL)
        .then(response => response.json())
        .then(data => {
            // Assuming the API returns an array of objects with 'id' and 'name' properties
            data.forEach(item => {
                const option = document.createElement('option');
                option.value = item.id;
                option.textContent = item.name;
                dropdown.appendChild(option);
            });
        })
        .catch(error => {
            console.error('Error fetching data:', error);
        });
});
