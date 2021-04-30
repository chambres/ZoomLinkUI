window.onload=function(){

let re = /<!--(.*?)-->/;
function read(text){
    console.log(text)
    try{a = JSON.parse(text.match(re)[1]);}
    catch(e){alert("This file is not supported!"); location.reload()}

    var merged = [].concat.apply([], a);
    console.log(merged);
    a = merged;

    for (var i = 1; i <= a.length/3; i++){
     
     var n = document.getElementById( 'main' );
     var o = document.getElementById( 'old' );
     n.innerHTML += o.innerHTML;
     
 }
 $("#classes_amount.classes_amount").hide();
    n.innerHTML += '<button' + 'type="submit"' + ' class="nes-btn is-primary" ' + 'onclick="generate()"' + ">Generate</button>" //dont ask



    var hi = $('input#links.nes-input.is-dark')
    hi.splice(0, 3)
    var j = 0;
    for (var i = 0; i < hi.length; i++){
        console.log("iternation " + i);


    var merged = [].concat.apply([], a);
        $(hi[i]).val(a[i])
        }


}


var input = document.getElementById("file");

input.addEventListener("change", function () {
    if (this.files && this.files[0]) {
      var myFile = this.files[0];
      var reader = new FileReader();
      
      reader.addEventListener('load', function (e) {
         text = e.target.result;
        read(text);
      });
      
      reader.readAsBinaryString(myFile);
    }   
  });

}