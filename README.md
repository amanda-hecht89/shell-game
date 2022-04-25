## The Golden Rule: 

🦸 🦸‍♂️ `Stop starting and start finishing.` 🏁

If you work on more than one feature at a time, you are guaranteed to multiply your bugs and your anxiety.

## Making a plan

1) **Make a drawing of your app. Simple "wireframes"** 
1) **Look at the drawing and name the HTML elements you'll need to realize your vision**
   // shell image.. ball.. buttons x3..
1) **Look at the drawing and imagine using the app. What _state_ do you need to track?** 
   //track wins.. looses.. and total of both
1) **For each HTML element ask: Why do I need this? (i.e., "we need div to display the results in")** 
   // shell image: to hide the ball
   // ball: to find and play game
   // button 1: check for ball
   // button 2: check for ball
   // button 3: check for ball
1) **Once we know _why_ we need each element, think about how to implement the "Why" as a "How" (i.e., `resultsEl.textContent = newResults`)**
   // use button 1.. guess shell 1.. button.addEventListener
   // use button 2.. guess shell 2.. button.addEventListener
   // use button 3.. guess shell 3.. button.addEventLIstener
   //count wins/losses/total.. span textcontent = count
1) **Find all the 'events' (user clicks, form submit, on load etc) in your app. Ask one by one, "What happens when" for each of these events. Does any state change? Does any DOM update?**
   //click on button 1= ball revealed= win. ball not revealed= loss
   //click on button 2= ball revealed= win. ball not revealed= loss
   //click on button 3= ballrevealed= win. ball not revealed= loss
   //needs to reset after each time
1) **Think about how to validate each of your features according to a Definition of Done. (Hint: console.log usually helps here.)**
   //console.log()
   //console.log()
   //console.log()
1) **Consider what features _depend_ on what other features. Use this dependency logic to figure out what order to complete tasks.**
   //wins/losses/total depends on clicks
   //need ball to have game to win/lose
   //make ball
   //shells needed to hide ball
   //upload shell

   
Additional considerations:
- Ask: which of your HTML elements need to be hard coded, and which need to be dynamically generated?
- Consider your data model. 
  - What kinds of objects (i.e., Dogs, Friends, Todos, etc) will you need? 
  - What are the key/value pairs? 
  - What arrays might you need? 
  - What needs to live in a persistence layer?
- Is there some state we need to initialize?
- Ask: should any of this work be abstracted into functions? (i.e., is the work complicated? can it be resused?)
