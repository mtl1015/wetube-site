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
    try
    {
        const {title, description, hashtags} = req.body;
        await Video.create({
            title,
            description,
            hashtags: hashtags.split(",").map(word => `#${word}`),
        })
        return res.redirect("/");
    }
   catch(error)
   {
       console.log(error);
       return res.render("upload", {
           pageTitle: "Upload Video",
           errorMessage: error._message,
       });
   }
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
