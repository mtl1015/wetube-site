let videos = [
    {
        title: "First",
        rating:5,
        comment:2,
        createdAt: "3 minutes ago",
        views: 1,
        id: 1,
    },
    {
        title: "Second",
        rating:7,
        comment:1,
        createdAt: "2 minutes ago",
        views: 42,
        id: 2,
    },
    {
        title: "Third",
        rating:9,
        comment:6,
        createdAt: "1 minutes ago",
        views: 123,
        id: 3,
    }
]
export const trending = (req,res) =>{
    res.render("home", {pageTitle: "Home", videos});}
export const watch = (req,res) => {
    const {id} = req.params;
    const video = videos[id - 1];
    return res.render("watch",{pageTitle: `Watching ${video.title}`, video});
};

export const upload = (req,res) => res.send("Upload Video");
export const edit = (req,res) => res.render("edit");
export const search = (req,res) => res.send("Search");
export const deleteVideo = (req,res) => res.send("Delete Video");
