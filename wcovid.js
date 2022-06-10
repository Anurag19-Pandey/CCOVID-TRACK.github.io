function getworlddata()
{
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key':'a41f336137mshe0b323dcafdcf12p165728jsn37884ff09b81',
            'X-RapidAPI-Host': 'corona-virus-world-and-india-data.p.rapidapi.com'
        }
    };
    
    fetch('https://corona-virus-world-and-india-data.p.rapidapi.com/api', options)
        .then((response) =>
        { 
           return response.json()
        }).then((data) =>
        {
            const world = document.getElementById("card_col");
            let covid= "";
             for(i=0;i<data.countries_stat.length;i++)
             {
                let wcovid = `
                <div class="col-sm-6 col-md-4 col-lg-3">
                <div class="card mt-4"  id="card">
                <h5 class="card-header bg-warning text-white">${data.countries_stat[i].country_name}</h5>
                <div class="card-body text-center bg-dark text-white">
                <u>Total Confirmed Cases</u><h5 class="card-title" id="card-title">${data.countries_stat[i].cases}</h5>
                <u>Total Number of Deaths</u><h5 class="card-title" id="card-title1">${data.countries_stat[i].deaths}</h5>
                <u>Total Recovered</u><h5 class="card-title" id="card-title2">${data.countries_stat[i].total_recovered}</h5>
                <u>Total Tests</u><h5 class="card-title" id="card-title2">${data.countries_stat[i].total_tests}</h5>
                <a href="https://en.wikipedia.org/wiki/${data.countries_stat[i].country_name}" class="btn btn-primary">${data.countries_stat[i].country_name}</a>
                </div>
                </div>
                </div>`
         covid+=wcovid;        
         world.innerHTML = covid;
             }
        })
        .catch(err => console.error(err));
}

getworlddata()


function search_wdata()
{

    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': 'a41f336137mshe0b323dcafdcf12p165728jsn37884ff09b81',
            'X-RapidAPI-Host': 'corona-virus-world-and-india-data.p.rapidapi.com'
        }
    };
    fetch('https://corona-virus-world-and-india-data.p.rapidapi.com/api', options)
        .then((response) =>
        { 
           return response.json()
        }).then((data) =>
        {

        var back = document.getElementById("back");
        
        const world = document.getElementById("card_col");
        let covid= "";
        const s = document.getElementById("search").value;
        for(i=0;i<data.countries_stat.length;i++){
        if(data.countries_stat[i].country_name === s){
             back.style.display = "inline-block"
             let wcovid = `  
             <div class="col-sm-12 col-md-6 col-lg-4">
             <div class="card mt-4"  id="card">
             <h5 class="card-header bg-warning text-white">${data.countries_stat[i].country_name}</h5>
             <div class="card-body text-center bg-dark text-white">
             <u>Total Confirmed Cases</u><h5 class="card-title" id="card-title">${data.countries_stat[i].cases}</h5>
             <u>Total Number of Deaths</u><h5 class="card-title" id="card-title1">${data.countries_stat[i].deaths}</h5>
             <u>Total Recovered</u><h5 class="card-title" id="card-title2">${data.countries_stat[i].total_recovered}</h5>
             <u>Total Tests</u><h5 class="card-title" id="card-title2">${data.countries_stat[i].total_tests}</h5>
             <a href="https://en.wikipedia.org/wiki/${data.countries_stat[i].country_name}" class="btn btn-primary">${data.countries_stat[i].country_name}</a>
             </div>
             </div>
             </div>
          ` 
          covid+=wcovid;
          world.innerHTML = covid;

        }
    }
    })
    
} 

function backb()
{

    setTimeout(function(){
        var back = document.getElementById("back");
        back.style.display = "none"
    },2000)
   
    
}
