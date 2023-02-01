# MARSHOTPROJECT

[globalRouter]
/ => Freedom
/users => Users
/talks => MarsTalk
/videos => MarsTube
/search => Search
/signup => Sign Up
/signin => Sign In

[Users]
/users/:id => See Profile
/users/signout => Sign Out
/users/edit => Edit Profile
/users/delete => Delete My Profile

[MarsTalk]
/talks/:id/friends => See Friends
/talks/:id/chats => Chats
/talks/:id/views => Views
/talks/:id/shopping => Shopping
/talks/:id/more => More

[MarsTube]
/videos/:id => Watch Video
/videos/:id/edit => Edit Video
/videos/:id/delete => Delte Video
/videos/upload => Upload Video
