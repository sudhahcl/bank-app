// Get edit data
let id = 1;
let xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function() {
    if (this.status == 200) {
      let myArr = JSON.parse(this.responseText);
      console.log(myArr)
      myEditFunc(myArr);       
    }
  };
xhttp.open("GET", "http://localhost:3000/payee?id="+id, true );
xhttp.setRequestHeader('Content-Type', 'application/json');
xhttp.send(id);

// Put data to html fields
myEditFunc=(myArr)=>{
    console.log(myArr)
    document.getElementById("name").value = myArr[0].name;
    document.getElementById("accountNumber").value = myArr[0].accountNumber;
    document.getElementById("bankName").value = myArr[0].bankName;
    document.getElementById("code").value = myArr[0].mobile;
    }