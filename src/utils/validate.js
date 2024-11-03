export const checkValidData = (email, password, name) =>{
    const isValidMail = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/.test(email);
    const isValidPassword = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/.test(password);
    const isValidName = /\b([A-ZÀ-ÿ][-,a-z. ']+[ ]*)+/.test(name)

    if (!isValidMail) return "EmailId is not valid";
    if (!isValidPassword) return "Password is not valid";
    if (!isValidName) return "Enter Name Properly"
}