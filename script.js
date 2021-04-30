function download(filename, text) {
    var element = document.createElement('a');
    element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
    element.setAttribute('download', filename);
  
    element.style.display = 'none';
    document.body.appendChild(element);
  
    element.click();
  
    document.body.removeChild(element); 
  } //thanks SO

function generateInput(){
    var classnum = $('#classes_amount').find('input[name="classes"]').val();
    
    var question = 1;
    var i = document.getElementById( 'old' );
    
    for (var i = 1; i <= classnum; i++){
        
        var n = document.getElementById( 'main' );
        var o = document.getElementById( 'old' );
        n.innerHTML += o.innerHTML;
        
    }
    n.innerHTML += '<button' + 'type="submit"' + ' class="nes-btn is-primary" ' + 'onclick="generate()"' + ">Generate</button>" //dont ask
    
    $("#classes_amount.classes_amount").hide();


}

function generate(){
    ek = [];
    al = [];
    
    $('input.nes-input.is-dark').each(function() { ek.push($(this).val()); });
    

    
    

    ek.splice(0, 4);
    console.log(ek);

    var i,j,temparray,chunk = 3;
    for (i=0,j=ek.length; i<j; i+=chunk) {
        temparray = ek.slice(i,i+chunk);

        al.push(temparray)
        
    }
    
    console.log(al);
    main = ""
    

    
    main += `
<!--${JSON.stringify(al)}-->   
<link href="https://unpkg.com/nes.css@latest/css/nes.min.css" rel="stylesheet" />
<title>The Legend of the Zoom</title>
<link href="data:image/x-icon;base64,AAABAAEAEBAQAAEABAAoAQAAFgAAACgAAAAQAAAAIAAAAAEABAAAAAAAgAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAA////AAD/9wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACIiICIiIAAAAiIBAiIAAAACIgECIgAAAAAgERAgAAAAACARECAAAAAAARERAAAAAAAAAAAAAAAAAAIiIgAAAAAAACIgAAAAAAAAIiAAAAAAAAACAAAAAAAAAAIAAAAAAAAAAAAAAAD//wAA//8AAIADAACAAwAAwAcAAMAHAADgDwAA4A8AAPAfAADwHwAA8B8AAPg/AAD4PwAA/H8AAPx/AAD+/wAA" rel="icon" type="image/x-icon" /> 
<head> 
<link href="https://fonts.googleapis.com/css?family=Press+Start+2P" rel="stylesheet"> <link href="https://unpkg.com/nes.css/css/nes.css" rel="stylesheet" /> 
<style> html, body, pre, code, kbd, samp { font-family: 'Press Start 2P', cursive; } .nes-container is-dark with-title { width:100% top: 40px; bottom: 20px; margin :0; } </style> 
</head> 

<script> 
function copyToClipboard(text) { var dummy = document.createElement("textarea"); document.body.appendChild(dummy); dummy.value = text; dummy.select(); document.execCommand("copy"); document.body.removeChild(dummy); }; 
function pushhistory(){ const state = { 'page_id': 1, 'user_id': 5 }; const title = ''; history.pushState(state, title, window.location.href);};
</script> 

<div class="nes-container is-dark with-title"> <p class="title">Choose your Adventure</p> <p>Another day, another Zoom</p>`

    for (var i = 0; i < al.length; i++) {
        main += `<button type="button" class="nes-btn is-primary"onclick="pushhistory();copyToClipboard('${al[i][1]}');window.location.replace('${al[i][0]}')">${al[i][2]}</button>\n`;
    }


main += `<br><i class="nes-bulbasaur"></i> <i class="nes-charmander"></i> <i class="nes-squirtle"></i>\n 
</div>`


    download("links.html", main);
    window.location.href = '/ZoomLinkUI'             
    


}

                