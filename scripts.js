document.addEventListener('DOMContentLoaded', () => {
    //const dropdown = document.querySelector('#ELRs');
    const dropdown = document.getElementById('ddELRs');
    if(!dropdown){
        console.error('dropdown not found');
    }
    console.log('event listener loaded')
    // Initialize Cesium Viewer
    //const viewer = new Cesium.Viewer('cesiumContainer');

    // Fetch data from an API
    fetch('https://7ypjauhya1.execute-api.us-east-1.amazonaws.com/ElrVesrion1/mongo')
    .then(response => response.json())
    .then(data =>{
        let myELR = "";
        data.raildata.forEach(element => {
            console.log(element.ELR)
            const option = document.createElement('option');
            //option.value = element.ELR
            option.textContent = element.ELR
            console.log(option)
            dropdown.appendChild(option);
        });
    }) 
    })

    // Event listener for dropdown change
    //dropdown.addEventListener('change', (event) => {
    //    const selectedValue = event.target.value;
    //    if (selectedValue) {
    //        // Perform action based on selected value, e.g., fly to a specific location
    //        // Example: viewer.camera.flyTo({ destination: Cesium.Cartesian3.fromDegrees(longitude, latitude, height) });
    //    }
    //});
