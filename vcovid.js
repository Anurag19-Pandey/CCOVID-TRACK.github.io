function vaccinedata()
{
    fetch('https://covid-api.mmediagroup.fr/v1/vaccines').then((response)=>{
        return response.json()
    }).then((data)=>{
        const va = document.getElementById("vaccine");
        let wvaccine = "";
          for(var property in data){
               let vacc = ` <div class="col-md-4 col-sm-6 col-lg-4">
               <div class="card mt-4">
               <a href="https://en.wikipedia.org/wiki/${data[property].All.country}" style="text-decoration:none;"><h5 class="card-header bg-primary text-white">${data[property].All.country}</h5></a>
               <div class="card-body  bg-dark text-white">
               <u>Administered</u><h5 class="card-title" id="card-title2">${data[property].All.administered}</h5>
               <u>People Partially Vaccinated</u><h5 class="card-title" id="card-title2">${data[property].All.people_partially_vaccinated}</h5>
               <u>People Vaccinated</u><h5 class="card-title" id="card-title2">${data[property].All.people_vaccinated}</h5>
               </div>
             </div>
             </div>` 
             wvaccine+=vacc;
             va.innerHTML = wvaccine;
             }
    })
}
  vaccinedata()

  function search_data()
{
    fetch('https://covid-api.mmediagroup.fr/v1/vaccines').then((response)=>{
        return response.json()
    }).then((data)=>{
    
        const va = document.getElementById("vaccine");
        var back = document.getElementById("back");

        let wvaccine = "";
        const s = document.getElementById("search").value;
        for(var property in data)
        {
        if(data[property].All.country === s){
             back.style.display = "inline-block"
            let vacc = ` <div class="col-sm-12 col-md-6 col-lg-4">
            <div class="card mt-4">
            <a href="https://en.wikipedia.org/wiki/${data[property].All.country}" style="text-decoration:none;"><h5 class="card-header bg-primary text-white">${data[property].All.country}</h5></a>
            <div class="card-body  bg-dark text-white">
            <u>Administered</u><h5 class="card-title" id="card-title2">${data[property].All.administered}</h5>
            <u>People Partially Vaccinated</u><h5 class="card-title" id="card-title2">${data[property].All.people_partially_vaccinated}</h5>
            <u>People Vaccinated</u><h5 class="card-title" id="card-title2">${data[property].All.people_vaccinated}</h5>
            </div>
          </div>
          </div>
          <div>      
          </div>
          
          ` 
          wvaccine+=vacc;
          va.innerHTML = wvaccine;

        //   return vacc;
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
