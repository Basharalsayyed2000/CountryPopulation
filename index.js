fetch('https://restcountries.com/v2/all')
    .then(response => response.json())
    .then(json => {
        json.forEach(element => {

            var x = document.createElement('li');
            x.className = "list-group-item";
            var content = `<div class="card" style="width:400px">
            <img class="card-img-top" src="XXX" alt="Card image">
             <div class="card-body">
                  <h4 class="card-title">YYY</h4>
                  <p class="card-text"> TTT.</p>
                
              </div>
            </div>`;
            var text = content.replace("XXX", element.flag);
            text = text.replace("YYY", element.name);
            text = text.replace("TTT", " " + element.population + "/  " + element.capital + "/   " + element.region);

            x.innerHTML = text;

            document.getElementById('id1').appendChild(x);


        });
    })