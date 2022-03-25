import User from "../models/user";
import bcrypt from "bcrypt";

export const getJoin =(req,res) => 
res.render("join", {pageTitle: "Create Account"});
export const postJoin = async(req,res) =>
{
    const {name,username, email, password,password2, location} = req.body;

    if(password !==password2){
        return res.status(400).render("join",{
            pageTitle:"Password Error",
            errorMessage: "Password confirmation does not match."
        })
    }

    const alreadyExists = await User.exists({$or: [{username},{email}]});
    if (alreadyExists){
        return res.status(400).render("join", {pageTitle:"Join", errorMessage: "This username/email is already taken.",})
    }   
    try
    {
        await User.create({
            name, username,email,password,location
        });
        return res.redirect("/login");
    }
    catch(error)
    {
        return res.status(400).render("join",{pageTtitle: "Upload Viddeo", errorMessage: error._message})
    }
};
export const edit = (req,res) =>res.send("Edit User");
export const deleteUser = (req,res) => res.send("Delete User");
export const getLogin = (req,res) => {
    return res.render("login",{pageTitle:"Login!"} )
}
export const postLogin = async(req,res) => {
    const {password, username} = req.body;
    const user = await User.findOne({username});
    if (!user){
        return res.status(400).render("login", {pageTitle: "Login Page", errorMessage:"Username doesnt exist!"})
    }
    const ok = await bcrypt.compare(password, user.password);
    if(!ok){
        return res.status(400).render("login", {
            pageTitle: "Login!",
            errorMessage: "Wrong Passowrd"
        });
    }

}
export const logout = (req,res) => res.send("Logout");
export const see = (req,res) =>res.send("See User");