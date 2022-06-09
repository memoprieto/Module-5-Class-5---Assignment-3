//object constructor
function User(email,password,fname,lname,age){
    this.email=email;
    this.password=password;
    this.firstName=fname;
    this.lastName=lname;
    this.age=age;
}
function isValid(user){
    //return false when the user in not valid
    //return true when the user is valid
    let valid=true;
    //add validation for email,password,fname,lname
    if(user.email.length==0){
        valid=false;
        console.log("Please add an email");
        $("#txtEmail").addClass("input-error");
    }
    if(user.password.length==0){
        valid=false;
        console.log("Please add an password");
        $("#txtPassword").addClass("input-error");
    }
    return valid;
}

 //register function
function register(){
    let userName=$("#txtEmail").val();
    let userPass=$("#txtPassword").val();
    let userFirstName= $("#txtFirstName").val();
    let userLastName=$("#txtLastName").val();
    let userAge=$("#txtAge").val();
     
    //creating the obj
    let newUser=new User(userName,userPass,userFirstName,userLastName,userAge);
    if(isValid(newUser)==true){
        //console.log(newUser);
        saveUser(newUser);//thin fn is in the StoreManager
        //clear the inputs
        $("input").val("");
    } 
}

function init(){
    console.log("Register");
    //hook events
    $("#btnRegister").click(register);
    $("#txtLastName").keypress(function(e){
       if(e.key=="Enter"){
           register();
       }; 
    });
}

window.onload=init;