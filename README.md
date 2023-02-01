# MarshotProject

[rootRouter]
/ => Freedom
/users => Users
/marstalk => MarsTalk
/marstube => MarsTube
/search => Search
/signup => Sign Up
/signin => Sign In

[Users]
/users/:id => See Profile
/users/signout => Sign Out
/users/edit => Edit Profile
/users/delete => Delete My Profile

[MarsTalk]
/marstalk/:id/friends => See Friends
/marstalk/:id/chats => Chats
/marstalk/:id/views => Views
/marstalk/:id/shopping => Shopping
/marstalk/:id/more => More

[MarsTube]
/marstube/:id => Watch Video
/marstube/:id/edit => Edit Video
/marstube/:id/delete => Delte Video
/marstube/upload => Upload Video
