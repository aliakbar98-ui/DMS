let username = "admin";
let password = "password123";
let twofactorcode = "123456";

if (username === "admin")
{
    if (password === "password123") 
    {
        if (twofactorcode === "123456") {
        
            console.log("Login successful!");
        } 
    else 
        {
        console.log("Invalid two-factor authentication code.");
        }
} 
    else {
    
        console.log("Invalid password.");
        }
}
else { 
    console.log("Invalid username.");   
}