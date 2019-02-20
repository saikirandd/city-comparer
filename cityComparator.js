function min(){
    var x=document.getElementById("input1").value;
    var y=document.getElementById("input2").value;
    var s1=x.length;
    var s2=y.length;
    document.getElementById("result").innerHTML=Math.min(s1, s2);	
    }
