export const trending = (req,res) => res.render("home");
export const see = (req,res) => {
    return res.render("watch");
};

export const upload = (req,res) => res.send("Upload Video");
export const edit = (req,res) => res.send("Edit Video");
export const search = (req,res) => res.send("Search");
export const deleteVideo = (req,res) => res.send("Delete Video");
