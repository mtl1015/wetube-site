export const trending = (req,res) =>{
    const videos = [
        {
            title: "First",
            rating:5,
            comment:2,
            createdAt: "3 minutes ago",
            views: 59,
            id: 1,
        },
        {
            title: "Second",
            rating:7,
            comment:1,
            createdAt: "2 minutes ago",
            views: 42,
            id: 1,
        },
        {
            title: "Third",
            rating:9,
            comment:6,
            createdAt: "1 minutes ago",
            views: 123,
            id: 1,
        }
    ]
    res.render("home", {pageTitle: "Home", videos});}
export const see = (req,res) => {
    return res.render("watch");
};

export const upload = (req,res) => res.send("Upload Video");
export const edit = (req,res) => res.render("edit");
export const search = (req,res) => res.send("Search");
export const deleteVideo = (req,res) => res.send("Delete Video");
