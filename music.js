// Shereen Hasan ID:1001437130
// Put your Last.fm API key here
var api_key = "bf8b03607b3bb327437adbc4c2d36182";

var xhr1 = new XMLHttpRequest();
var xhr2 = new XMLHttpRequest();
var xhr3 = new XMLHttpRequest();
function sendRequest () {
    
    var method1 = "artist.getinfo";
    var method2 = "artist.getTopAlbums";
    var method3 = "artist.getSimilar";
    var artist = encodeURI(document.getElementById("form-input").value);
    xhr1.open("GET", "proxy.php?method="+method1+"&artist="+artist+"&api_key="+api_key+"&format=json", true);
    xhr1.setRequestHeader("Accept","application/json");
    xhr1.onreadystatechange = outputMethod1;


    //xhr2
    xhr2.open("GET", "proxy.php?method="+method2+"&artist="+artist+"&api_key="+api_key+"&format=json", true);
    xhr2.setRequestHeader("Accept","application/json");
    xhr2.onreadystatechange = outputMethod2;


    //xhr3
    xhr3.open("GET", "proxy.php?method="+method3+"&artist="+artist+"&api_key="+api_key+"&format=json", true);
    xhr3.setRequestHeader("Accept","application/json");
    xhr3.onreadystatechange = outputMethod3;   
 

    xhr1.send(null);
    xhr2.send(null);
    xhr3.send(null);
};


    function outputMethod1() {
        if (xhr1.readyState == 4) {
            var json = JSON.parse(xhr1.responseText);
            var str = JSON.stringify(json,undefined,2);

            var name = json.artist.name;
            var web = json.artist.url;
            var info =json.artist.bio.summary;
            var img = json.artist.image[3]['#text'];

            document.getElementById("name").innerHTML = "<h3>NAME:</h3><p>" + name +"</p>";
            document.getElementById("web").innerHTML = "LINK: <a href='"+web+"'>"+name+"</a>";
            document.getElementById("info").innerHTML = "<p>" + info +"</p>";
            document.getElementById("img").innerHTML = "<img src='"+img+"' >";
            //document.getElementById("output").innerHTML = "<p>" + str +"</p>";
            
        }
    };

    function outputMethod2() {
        if (xhr2.readyState == 4) {

            var json = JSON.parse(xhr2.responseText);
            var str = JSON.stringify(json,undefined,2);
            var length = json.topalbums.album.length;
           document.getElementById("topname").innerHTML = "<h3>Top Albums:</h3>";
            for(var i=0;i<length;i++){
                    
                
                var topalbum = json.topalbums.album[i]['name'];
                var image = json.topalbums.album[i].image[3]['#text'];

                document.getElementById("topalbum").innerHTML = document.getElementById("topalbum").innerHTML + "<div class='thumbnail'><p>" + topalbum + "</p><img src='"+image+"' class='img-thumbnail'></div></div>";
                /*document.getElementById("image").innerHTML = "<img src='"+image+"' width='10%' height='10%'>";*/
            }               

        }
    };


    function outputMethod3() {
        if (xhr3.readyState == 4) {
            var json = JSON.parse(xhr3.responseText);
            var str = JSON.stringify(json,undefined,2);
            var length = json.similarartists.artist.length;
            document.getElementById("SimilarArtist").innerHTML = "<h3>SimilarArtist:</h3>";
            
            for(var i=0;i<length;i++){
                var similarartists = json.similarartists.artist[i]['name'];
                document.getElementById("similarartists").innerHTML = document.getElementById("similarartists").innerHTML +"<p>" + similarartists +"</p>";
               // document.getElementById("output").innerHTML = "<p>" + str +"</p>";
            }
        }
    };

   