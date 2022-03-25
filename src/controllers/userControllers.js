import User from "../models/user";

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
    await User.create({
        name, username,email,password,location
    });
    return res.redirect("/login");
};
export const edit = (req,res) =>res.send("Edit User");
export const deleteUser = (req,res) => res.send("Delete User");
export const login = (req,res) => res.send("Login");
export const logout = (req,res) => res.send("Logout");
export const see = (req,res) =>res.send("See User");