function backendData(){
    return fetch('http://localhost:3000/payee')
    .then(response => response.json())
    .then((resp) => {
        backendDataResult = resp;
        appendData(resp);
    })
    }
    backendData();
     
  appendData=(data)=> {
    
        let table = "<h2>Favorite Accounts</h2><button class='btn1' onclick=addPayee()>Add Favorite</button><table border='1|1'>";
            // table+=`<tr class = "header"><th>Name</th><th>Account Number</th><th>Bank Name</th><th>Actions</th>
            // </tr>`
        for (var i = 0; i < data.length; i++) {
            table+=`<tr><td>${data[i].name}<br><br>${data[i].accountNumber}<br> <br>${data[i].bankName} <img onclick='editPayee()' src="../public/edit-icon.png" class="edit"/></td></tr>`
    }
    // table+=document.getElementById("font").innerHTML
     table+='';
    table+="</table>";
    document.getElementById("bankData").innerHTML = table;
    }

    addPayee=()=>{
        window.location.href="http://localhost:5500/public/addPayee.html"
    }
    editPayee=()=>{
        window.location.href="http://localhost:5500/public/editPayee.html"
    }