fetch("https://coding-week-2024-api.onrender.com/api/data")
.then(response => response.json())
.then(data => {
    console.log(data);

    document.getElementById('headline-1').innerHTML = data[0].headline;
    document.getElementById('headline-2').innerHTML = data[1].headline;
    document.getElementById('headline-3').innerHTML = data[2].headline;
    document.getElementById('headline-4').innerHTML = data[3].headline;

    document.getElementById('type-1').innerHTML = data[0].type;
    document.getElementById('type-2').innerHTML = data[1].type;
    document.getElementById('type-3').innerHTML = data[2].type;
    document.getElementById('type-4').innerHTML = data[3].type;

    document.getElementById('date-1').innerHTML = data[0].date;
    document.getElementById('date-2').innerHTML = data[1].date;
    document.getElementById('date-3').innerHTML = data[2].date;
    document.getElementById('date-4').innerHTML = data[3].date;

    document.getElementById('author-1').innerHTML = data[0].author;
    document.getElementById('author-2').innerHTML = data[1].author;
    document.getElementById('author-3').innerHTML = data[2].author;
    document.getElementById('author-4').innerHTML = data[3].author;

    document.getElementById('image-1').src = data[0].image;
    document.getElementById('image-2').src = data[1].image;
    document.getElementById('image-3').src = data[2].image;
    document.getElementById('image-4').src = data[3].image;

    let data2 = "";
    data.map((values) => {
        data2 += `<div class="d1" id="image-1">
        <img class="s1" src="${values.image}" alt=""><p id="headline-1" class="a"><b>${values.headline}</b><br><br>
        <i class='bx bx-calendar'></i> ${values.date} </p></div>`;
    });
    document.getElementById("lefty").innerHTML = data2;
})
.catch(error => console.error('Error fetching data:', error));
