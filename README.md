1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?

Ans: Here getElementById is single element and getElementsByClassName Html collections. the main difference is  getElementById  contain  unique id and  getElementsByClassName multiple element by class. And querySelector is single element on the other hand  
 querySelectorAll is Nodelist. the main difference between querySelector and querySelectorAll if querySelector match fist selector css it will be stop on the  other hand querySelectorAll all selector contain step by step.
 
2. How do you create and insert a new element into the DOM?
Ans: There are several way but given below
const newHeader = document.createElement('h1'); 
newHeader.textContent = 'I am Student programming Hero Batch-12';
const container = document.getElementById('newdiv');

3. What is Event Bubbling and how does it work?
Ans: when Capturing Phase reached target element then Target Phase trigger fire target element after complete targeted element event the back to parent node it's bubbling even occur.  
const container = document.getElementById('container');
const button = document.getElementById('submit);
container.addEventListener('click', (event) => {
  console.log('Clicked on: ' + event.target.textContent);
});
This behavior, where a single click on a child element activates an event listener on a parent element, is the core concept of event bubbling. It's a key part of event delegation, an efficient technique for handling events on multiple child elements with a single listener on their parent.


4. What is Event Delegation in JavaScript? Why is it useful?

Ans: Event Delegation is a process of controlling.where not more then one child element you can declare only one parent element event listener it will do. then it reached child event bubble position to parent element then it will done.event delegation, you only need to write the event handling logic once in the parent element's event listener. This makes the code more maintainable and easier to update.

5. What is the difference between preventDefault() and stopPropagation() methods?
Ans: preventDefault() that stops the default action of a browser event. It's like telling the browser, He is handle this, don't do what you normally would. like form submission  time without declare action only using  preventDefault();

stopPropagation()  that prevents an event from continuing go ahead through the Document Object Model (DOM) tree. It is putting a roadblock on the event's path, after ensuring it doesn't affect any type of the element's ancestors.

finally can say preventDefault() stops the browser's default action for an event, while stopPropagation() stops the event from traveling up the DOM tree to parent elements it's the main differences.



