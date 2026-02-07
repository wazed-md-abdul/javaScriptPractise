function validOtp(otp) {
    if (otp.length==8 && otp.startsWith("ph-"))
    {
        return true;
    }
    else if (typeof otp !== "string")
    {
        return "Invalid";
    }
    else 
    {
        return false;
    }
}