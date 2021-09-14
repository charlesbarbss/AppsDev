function add(){
    var Firstnum = Number (document.getElementById("Firstnum").value);
    var Secnum = Number (document.getElementById("Secnum").value);
    var ans = Firstnum+Secnum; 
    
    document.getElementById("answer").innerHTML=ans;
    }
    function min(){
        var Firstnum = Number (document.getElementById("Firstnum").value);
        var Secnum = Number (document.getElementById("Secnum").value);
        var ans = Firstnum-Secnum; 
        document.getElementById("answer").innerHTML=ans;
        }
    function mul(){
         var Firstnum = Number (document.getElementById("Firstnum").value);
         var Secnum = Number (document.getElementById("Secnum").value);
         var ans = Firstnum*Secnum; 
        document.getElementById("answer").innerHTML=ans;
          }
    function div(){
            var Firstnum = Number (document.getElementById("Firstnum").value);
            var Secnum = Number (document.getElementById("Secnum").value);
            var ans = Firstnum/Secnum; 
         document.getElementById("answer").innerHTML=ans;
            }
            function ChangeTheme(){
                var element = document.body;
               element.classList.toggle("ChangeTheme");
            }