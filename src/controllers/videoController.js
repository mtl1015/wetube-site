import Video from "../models/video"



export const home = async (req,res) =>{
    try{
        const videos = await Video.find({});
        return res.render("home", {pageTitle: "Home", videos});
    }
    catch(error) {
        return res.render("server-error")
    }
    }
export const watch = (req,res) => {
    const {id} = req.params;
    return res.render("watch",{pageTitle: `Watching`});
};  

export const getUpload = (req,res) => res.render("upload", {pageTitle: "Upload Video"});

export const postUpload = async (req,res) => {
    const {title, description, hashtags} = req.body;
    const video = new Video({
        title,
        description,
        createdAt: Date.now(),
        hashtags: hashtags.split(",").map(word => `#${word}`),
        meta:{
            views:0,
            rating:0,
        }
    })
    const dbVideo = await video.save();
    console.log(dbVideo);
    return res.redirect("/");
}

export const getEdit = (req,res) => 
{
    const {id} = req.params;
    return res.render("edit",{pageTitle: `Editing`})
}
export const postEdit = (req,res) => {
    const {id} = req.params;
    const { title } = req.body;
    return res.redirect(`/video/${id}`);
}   

export const search = (req,res) => res.send("Search");
export const deleteVideo = (req,res) => res.send("Delete Video");
