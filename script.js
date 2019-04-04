// vanilla JS
var xhr = new XMLHttpRequest();
xhr.onreadystatechange = function () {
    if (xhr.readyState == 4 && xhr.status == 200) {

        // merubah JSON jadi object biasa
        var data = JSON.parse(this.responseText);
        var people = data.results;

        var x = 1;

        // perulangan untuk menampilkan data
        people.forEach(function (data) {

            var dataTable = document.querySelector('#data-table');
            dataTable.innerHTML += '<tr> <td>' + x + '</td> <td>' + data.name + '</td>  <td >' + data.model + '</td>  <td >' + data.manufacturer + '</td><td >' + data.passengers + '</td></tr> ';

            // console.log("data");
            x++
        });
    }
}

xhr.open('GET', 'https://swapi.co/api/starships/', true);
// xhr.open('GET', 'people.json', true);
xhr.send();

//evebtlistener setelah mengetik
keyword.addEventListener('keyup', function () {

    // mengabil nilai dari inputan
    var value = this.value.toLowerCase();

    // menfilter data dari #data-table tr (search) pakai jQuery
    $("#data-table tr").filter(function () {
        $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
    });
});