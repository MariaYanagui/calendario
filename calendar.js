function colorirDia() {
    let days = document.getElementById('day').value;
    let color = document.getElementById('color').value;
    let calendar = document.getElementById('calendar');
  
    if (days < 1) {
        alert("Número não existente");
    } else if (days >= 32) {
        alert("Número não existente");
    } else{
        let td = calendar.getElementsByTagName('td')[(parseInt(days) + 1)];
        td.style.backgroundColor = color;
    
    }
}
