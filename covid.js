

    function getcoviddata(){

        let cdata = "";
        let tablebody = document.getElementById("tablebody");

        const options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': config.SECRET_API_KEY,
                'X-RapidAPI-Host': 'corona-virus-world-and-india-data.p.rapidapi.com'
            }
        };
        
        fetch('https://corona-virus-world-and-india-data.p.rapidapi.com/api_india', options).then((response) => 
        {
            return response.json()
        }
        ).then((actualdata) =>
        {

            let allconfirmed = document.getElementById("card-title");
            allconfirmed.innerHTML = actualdata.total_values.confirmed;
            let alldeath = document.getElementById("card-title1");
            alldeath.innerHTML = actualdata.total_values.deaths;
            let allactive = document.getElementById("card-title2");
            allactive.innerHTML = actualdata.total_values.active;
            
            const propertyValues = Object.values(actualdata.state_wise);
            for(i=0;i<propertyValues.length;i++)
            {
                let tcontent = `<tr>
                <th scope="row">${propertyValues[i].state}</th>
                <td>${propertyValues[i].confirmed}</td>
                <td>${propertyValues[i].deaths}</td>
                <td>${propertyValues[i].active}</td>
                <td>${propertyValues[i].recovered}</td>
              </tr>`
              cdata+=tcontent;
              tablebody.innerHTML=cdata;
            }
            
             
        }).catch(err => console.error(err));
    }  

// getcoviddata()








