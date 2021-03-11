var backendDataResult=null;
/*to fetch the data from json-server*/
function backendData(){
    return fetch('http://localhost:3000/payee')
    .then(response => response.json())
    .then((resp) => {
        backendDataResult = resp;
        onFormSubmit(resp);
    })
    }
    backendData();
    readFormData= () =>{
        let formData={};
        formData["name"]=document.getElementById("name").value;
        formData["accountNumber"]=document.getElementById("accountNumber").value;
        formData["bankName"]=document.getElementById("bankName").value;
        console.log(formData);
        return formData;   
    }


    onFormSubmit= () =>
    { 
        let formData=readFormData();
        console.log("form data"+formData)
        let finalFormData = formData;
        let compareDatauser = backendDataResult.filter(val=>val.userName === finalFormData.name)
      let compareDataaccount = backendDataResult.filter(val=>val.accountNumber === finalFormData.accountNumber)
        console.log("comapred data" +backendDataResult.filter(val=>val.userName === finalFormData.name));
           if(compareDatauser.length!== 0){ 
           alert("This Name Already exists");
           }
           else if (compareDataaccount.length!==0 ) {
            alert("This Account Number already exists");
           } 
        else {
            let xhttp = new XMLHttpRequest(); 
            let finalFormData = formData;
            backendDataResult.push(finalFormData);
            
         let allData = JSON.stringify(formData);  
            xhttp.open("POST", "http://localhost:3000/payee", true );
            xhttp.setRequestHeader('Content-Type', 'application/json');
             xhttp.send(allData);
             console.log(allData);
           window.location.href="http://localhost:5500/public/payeeList.html"
         }}
        
        

        resetForm=()=> {
            // document.getElementById("rollNo").value = "";
            document.getElementById("firstName").value = "";
            document.getElementById("emailAddress").value = "";
            document.getElementById("mobile").value = "";
            selectedRow = null;
        }