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
    const video = videos[id - 1];
    return res.render("watch",{pageTitle: `Watching`});
};

export const upload = (req,res) => res.send("Upload Video");
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
