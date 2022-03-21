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
export const watch = async(req,res) => {
    const {id} = req.params;
    const video = await Video.findById(id);
    if(!video)
    {
        return res.render("404", {pageTitle: "Video not Found."});
    }
    return res.render("watch",{pageTitle: video.title, video});

};  

export const getUpload = (req,res) => res.render("upload", {pageTitle: "Upload Video"});

export const postUpload = async (req,res) => {
    try
    {
        const {title, description, hashtags} = req.body;
        await Video.create({
            title,
            description,
            hashtags,
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

export const getEdit = async (req,res) => 
{
    const {id} = req.params;
    const video = await Video.findById(id);
    if(!video)
    {
        return res.render("404", {pageTitle: "Video not Found."});
    }
    return res.render("edit",{pageTitle: `Edit ${video.title }`, video})
}
export const postEdit = async (req,res) => {
    const {id} = req.params;
    const {title, description, hashtags} = req.body;
    const video = await Video.exists({_id: id});
    if(!video)
    {
        return res.render("404", {pageTitle: "Video not Found."});
    }
    await Video.findByIdAndUpdate(id, {
        title,
        description,
        hashtags: hashtags.split(",").
        map((word) => word.startsWith('#') ? word : `#${word}`),
    })
    await video.save();
    return res.redirect(`/video/${id}`);
}   

export const search = (req,res) => res.send("Search");
export const deleteVideo = (req,res) => res.send("Delete Video");
