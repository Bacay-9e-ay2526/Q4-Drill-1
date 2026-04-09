function Kilorate() {
    let Kwh = Number(document.getElementById("kilowat").value);
    let ans = document.getElementById("Ans");

    if (Kwh >= 0 && Kwh <= 100) {
        window.alert("Lifeline Consumer: Discounted electricity rates");
       
    }
    else if (Kwh >= 101 && Kwh <= 200) {
        window.alert("Low Consumption: Normal residential rate");
        
    }
    else if (Kwh >= 201 && Kwh <= 300) {
        window.alert("Average Consumption: Typical electricity usage");
        
    }
    else if (Kwh >= 301 && Kwh <= 500) {
        window.alert("High Consumption: Higher electricity usage");
        
    }
    else if (Kwh > 500) {
        window.alert("Very High Consumption: Heavy electricity users");
     
    }
    else {
        ans.textContent = "Please input a non-negative number";
    }
}