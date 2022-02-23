import express from "express";

const port  = 4000;

//express application을 만드는게 첫번째 규칙
const app = express(); 

//sandwitch부분
//여기서 application설정을 한다.

const handleHome = (req, res) => {
    //return res.end();
    return res.send("Everything will be good.")
};
app.get("/", handleHome) //누군가가 root page(/)로 get request를 보냈을 때 해당 function을 작동시키라는 코드

const handleListening = () => console.log(`Server Listening on port http://localhost:${port}`);

app.listen(port, handleListening)
