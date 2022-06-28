Javascript Task

Complete each task, building on the knowledge gained from the previous task.
We will provide you with the assets and the initial javascript code.

Prerequisites

Use the javascript code provided. Open the index.html file. It will draw a billiard table, a ball and a stick.

The code you will be changing is located in objects folder
There are 4 objects in the folder
ball.js
stick.js
table.js
gameWorld.js

All these objects have constructor and two methods update and draw
constructor is called when object is created
update is called on every frame ( it’s called constantly in a loop ). This is the place where your logic for each object usually goes. The update method is like an infinite loop. You can use it for getting inputs or constantly calculating values for example collisions.
draw is also called on every frame, its responsible for drawing objects, you most probably will not touch/change it 

Ball - is the ball object which gets position and color from the constructor. At the beginning you have one white ball drawn on the board.  
Stick - is the stick object which gets position from the constructor. At the beginning you have one stick drawn under the billiard table.
Table - The billiard table. It has some constants for keeping borders and hole positions.
GameWorld - The GameWorld object which contains all the other objects and draws them. If you need to add more balls you should do it here. If you add new balls don’t forget to call their update/draw methods in GameWorld. This GameWorld is a generic place for keeping all the objects, so any generic logic goes here. 

There are also some utilities in the project which will help you to complete the tasks
For mouse inputs there are examples in GameWorld commented with //example in code
For 2D vector calculations there is a vector2.js in math folder

Here is the complete list of project files/folders and it’s descriptions
assets/ - contains assets/images for the project 
input/ - contains code for mouse input interaction ( usage examples in gameWorld.js )
math/ - contains vector2.js for 2D vector calculations.
objects/ - the main objects folder which we already described above. This is the place you are going to write code.
assets.js - contains code for loading assets
canvas.js - Is responsible for drawing sprites. Usage examples are in all object’s draw methods.
main.js - Responsible for creating and updating GameWorld.
index.html - The main html file you should start for running the game.

Tasks
Here is the task list you need to complete. Each task is harder than the previous ones and requires knowledge of the previous ones to complete. Please do tasks in order and go as much as you can.

Task1: Move the ball to the right at any rate of speed you choose.


Task2: Move the ball to the right. When it hits the right border, make it bounce towards the left and bounce again when you hit the wall on the left.


Task3: When clicking on the ball move it in a random direction and it bounces back from the walls at the same angle it hits it.


Task4. When dragging from the ball, the stick should be drawn pointing in the direction. When released, the ball should shoot like a billiard ball in that direction and bounce back from the borders. The further you pull before firing, the greater the speed should be. The ball should slow over time and eventually stop.


Task5. Create a small mini billiard game, with two balls, where you have two balls and one hole. You can drag and shoot the ball and hit the other ball and drop it into the hole.


Task6. Draw an entire billiard board with 6 holes and 9 balls where you can select and shoot with any ball. Make sure that you can aim, when dragging from the ball show direction and depending on the strength the speed/force of the ball.
