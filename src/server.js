import express from "express";

const port  = 4000;

//express application을 만드는게 첫번째 규칙
const app = express(); 

//sandwitch부분
//여기서 application설정을 한다.

const gossipMiddleware = (req, res ,next) =>
{
    //console.log(`Someone is going to: ${req.url}`);//middleware, 중간 함수 -> 기본으로할려했던것
    console.log(`${req.method} ${req.url}`);
    //return res.send("lalalalal") 라는 식으로 보내면 안된다.
    next();
}

const privateMiddleware = (req,res,next) =>
{
    const url = req.url;
    if (url === "/protected")
    {
        return res.send("<h1>Not allowed</h1>");
    }
    console.log("Allowed, you may continue");
    next();
}

const protectedRuleHandle = (req,res) =>
{
    return res.send("Welcome to the private lounge");   
}

const handleHome = (req, res) => {
    //return res.end();
    return res.send("I love middlewares")//여기서는 finalware, 마지막 함수()
};
app.use(gossipMiddleware);
app.use(privateMiddleware);
app.get("/", handleHome) //누군가가 root page(/)로 get request를 보냈을 때 해당 function을 작동시키라는 코드
app.get("/protected",protectedRuleHandle);

const handleListening = () => console.log(`Server Listening on port http://localhost:${port}`);

app.listen(port, handleListening)
