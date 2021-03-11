// Get url params
const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const id = urlParams.get('id');
// Get edit data
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

// Update data into json server
onEditFormSubmit=() =>{
    let formData={};
    formData["name"]=document.getElementById("name").value;
    formData["accountNumber"]=document.getElementById("accountNumber").value;
    formData["bankName"]=document.getElementById("bankName").value;
    formData["code"]=document.getElementById("code").value;
    let allData = JSON.stringify(formData);  
    xhttp.open("PUT", "http://localhost:3000/payee/"+id, true );
    xhttp.setRequestHeader('Content-Type', 'application/json');
    xhttp.send(allData);
    window.location.href = "http://localhost:5500/public/payeeList.html";    
    alert("Updated successfully");

}
/*to delete the record*/
function onDelete(){
    console.log(id)
    // if (confirm('Are you sure to delete this record ?')) {     
    //     fetch("http://localhost:3000/payee/"+id,{
    //             method:"DELETE"
    //         })
    //     }   
    }     

    
