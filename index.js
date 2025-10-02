function convert(){
    let rslt = 0;
    let num = document.getElementById("inp1").value;
    if (document.getElementById("inp3").value === "Milles to kilometters"){
        rslt = num * 1.60934;
         document.getElementById("inp2").innerText = `Result:  ${num} Milles to kilometters => ${rslt.toFixed(4)}`;
    }else if (document.getElementById("inp3").value  === "Kilometters to milles") {
        rslt =  num / 1.6093;
         document.getElementById("inp2").innerText = `Result:  ${num} Kilometters to milles => ${rslt.toFixed(4)}`;
    }
    
    // document.getElementById("inp2").innerText =  ${inp} rslt.toFixed(4);
   

}