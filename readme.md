#Wetube

/first what we think about project: data

Data

1. Video(upload, watch, edit, comment, whatever, delete by user)
2. User

this two of things are domain in project

think about URL'S word

Website
/->Home
/join->Join
/login->Login
/search->Search

/users/edit->Edit Profile
/users/delete->Delete Profile

/videos/watch->Watch Video
/videos/edit -> Edit Video
/videos/delete -> Delete Video
/videos/comment -> Comment on a video
/videos/comment/delete -> Delete A Comment of a Video

/가장 좋은 방법은 라우터를 도메인 별로 나누는 것이더.
/예를 들어, 유저의 URL을 가져와서 라우터 안에 넣는 것이다.
/그리고, 동영상의 URL을 가져와서 라우터 안에 넣고,
/라우터는, 내가 작업중인 주제를 기반으로 URL를 그룹화해준다.

여기서는 3개의 라우터로 구분된다.
