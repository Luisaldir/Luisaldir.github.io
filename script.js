const pronosticoElement = document.getElementById('pronostico');
fetch('http://www.7timer.info/bin/api.pl?lon=43.39&lat=-3.01&timepoint=3&product=civil&output=json', {
    headers: {
        Accept: 'application/json'
    },
    method: 'GET'
    })
    .then(res => {
        return res.json()
    })
    .then(response => {
        pronostico = response;
        mostrarDatos(pronostico);
    })
    .catch(e => {
        console.error("Error " + e)
    })

function mostrarDatos(pronostico){

    pronostico['dataseries'].forEach(function(timepoint,i){
        if(timepoint.timepoint==27){
            hoy=[timepoint.weather,timepoint.prec_amount,timepoint.prec_type];
        }
    });

    pronosticoElement.innerHTML = `
        <div>
        <h3 class='txtpre'> Sopelana </h3>
        </div>
        <div>
            <img src='sope.jpg' class= 'imgpre'>
        </div>
        <div>
            <p>
                <strong>Tiempo:</strong>
                ${hoy[0]}
            </p>
            <p>
                <strong>Cantidad de precipitaciones(0-9):</strong>
                ${hoy[1]}
            </p>
            <p>
                <strong>Tipo de precipitaciones:</strong>
                ${hoy[2]}
            </p>
        </div>
    `;
}