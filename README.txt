Student Name: Xin Shi
Student Number: 13151148
CS id: e7l0b

Student Name: Liming Liu
Student Number: 95660163
CS id: p2o1b

Story: A long time ago in a galaxy far, far away, the astromech droid BB-8 and R2D2 discovered a lightsaber. Curious BB-8 wanted to unveal the mystrious force behind the lightsaber and had some interesting interactions. 

Scene: The scene inlcudes three characters: BB-8(geometry), R2D2 (a file object) and lightsaber (a texture map). We used a rotated sky box with cube map to create the galaxy. The floor is a bended plane (sphere geometry) with Phong Material (diffuse map and bump map). We also added the sound effects for BB-8 and lightsaber. 

Motion: 

We changed the luxo completly to BB-8. It consists of a half sphere as head, a full sphere as the body and a cylinder as the wire. BB-8 has 12 degrees of freedom, controling XYZ position of the body, XYZ rotation of the body, XYZ rotation of the head and XYZ position of the head. The head is linked to the body XYZ position, so it will move along with the body but no rotation attached. It is able to do movements such as moving around with rotating body, jumping and moving head to express the feeling. We have over 50 keyframes for BB-8's animation. 

For lightSaber, we updated position control function, added control over 4 control points, x,y position, and rotation around z-axis of lightsaber. 

R2D2 we simply used cosine function to update its x position. It can do simple movements such as rotating head and jumping around. 

Several principles of animation were applied to the motion:
We used staging to guide the viewer's eye and draw attention to what's important within the scene. The main character were BB-8 and light saber. The movement of R2D2 was kept to minimum. We used squash and stretch to change the length of lightsaber. Follow through and overlapping was applied when the characters are running accross the scene. BB8's head is moving ahead of the body. When lightsaber ran away to the left, the body bended first, and then started to ran. We used secondary action for BB8's jumping. After it landed, the head would have a secondary action and go up again to emphasize the jumping action. Correct timing allows us to control the reaction of BB-8 and lightsaber. We used anticipation when lightsaber twitched its body and pointed to BB-8 before lightsaber started to chase the BB-8. 


We included a video demo for our animation.

Reference & Source:
https://starwars.fandom.com/wiki/BB-8
https://www.videocopilot.net/blog/2016/05/free-star-wars-model-pack/

