var backendDataResult=null;
var final =  null;
function backendData(){
    return fetch('http://localhost:3000/users')
    .then(response => response.json())
    .then((resp) => {
        backendDataResult = resp;
        readFormData(resp);
    })
    }
    backendData();
 
    readFormData=(data)=>{
        final = data;
        return final;
    }
    resetForm=()=> {
        // document.getElementById("rollNo").value = "";
        document.getElementById("name").value = "";
        document.getElementById("password").value = "";
    }

encryptPassword=()=>
{
var pass=document.getElementById('password').value;

if(pass=="")
{
return false;
}
else
{
var hash = CryptoJS.MD5(pass);
document.getElementById('password').value=hash;
return true;
}
}
redirectForm=()=>{
    let userFormData =  final;
    console.log(userFormData)
    let formData={};
    formData["name"]=document.getElementById("name").value;
    formData["password"]=document.getElementById("password").value;
    console.log("formData",formData)
    let compareUserData = final.map(val=>val.userName === formData.name).filter(val=>val==true).join()
    let comparePassword=final.map(val=>val.password === formData.password).filter(val=>val==true).join();
    console.log("compareUserData",compareUserData)
    if(compareUserData.toString()==="true" && comparePassword.toString()==="true"){
        window.location.href="http://localhost:5500/public/payeeList.html";
    }
   
    else{
        alert("Invalid user name and password");
        window.location.href="http://localhost:5500/public/index.html"
       
    }
    resetForm();
}
    