import React from 'react';
import { Link } from 'react-router-dom';
function Stackandqueues(){
    return(
        <div style={{ 
            display: 'flex',
            flexDirection: 'column',
            padding: '20px',
            border: '1px solid #ddd',
            borderRadius: '5px',
            margin: '10px'
        }}>
        <h2 style={{ marginBottom: '10px',textAlign:'center' }}>Stacks and Queues</h2>
        <h3>Stack</h3>
        <p>Stack is a linear data structure that follows a particular order in which the operations are performed. The order may be LIFO(Last In First Out) or FILO(First In Last Out). LIFO implies that the element that is inserted last, comes out first and FILO implies that the element that is inserted first, comes out last.</p>
        <h5>What is Stack Data Structure?</h5>
        <p>A stack is a linear data structure that follows the Last-In-First-Out (LIFO) principle. It behaves like a stack of plates, where the last plate added is the first one to be removed.</p>
        <h5>Basic Operations of Stack Data Structures:</h5>
        <ul>
            <li>Push: Adds an element to the top of the stack.</li>
            <li>Pop: Removes the top element from the stack.</li>
            <li>Peek: Returns the top element without removing it.</li>
            <li>IsEmpty: Checks if the stack is empty.</li>
            <li>IsFull: Checks if the stack is full (in case of fixed-size arrays).</li>
        </ul>
        <h5>Applications of Stack Data Structures:</h5>
        <ul>
            <li>Recursion</li>
            <li>Expression Evaluation and Parsing</li>
            <li>Depth-First Search (DFS)</li>
            <li>Undo/Redo Operations</li>
            <li>Browser History</li>
        </ul>
        <h5>For more information and questions open below link</h5>
        <a href="https://www.geeksforgeeks.org/stack-data-structure/">questions</a>  
        <h3>Queue</h3>
        <p>A Queue Data Structure is a fundamental concept in computer science used for storing and managing data in a specific order. It follows the principle of “First in, First out” (FIFO), where the first element added to the queue is the first one to be removed. Queues are commonly used in various algorithms and applications for their simplicity and efficiency in managing data flow.</p>
        <p>A queue is a linear data structure that follows the First-In-First-Out (FIFO) principle. It operates like a line where elements are added at one end (rear) and removed from the other end (front).</p>
        <h5>Basic Operations of Queue Data Structure</h5>
        <ul>
            <li>Enqueue (Insert): Adds an element to the rear of the queue.</li>
            <li>Dequeue (Delete): Removes and returns the element from the front of the queue.</li>
            <li>Peek: Returns the element at the front of the queue without removing it.</li>
            <li>isEmpty: Checks if the queue is empty.</li>
            <li>isFull: Checks if the queue is full.</li>
        </ul>
        <h5>Applications of Queue</h5>
        <ul>
            <li>Task scheduling in operating systems</li>
            <li>Data transfer in network communication</li>
            <li>Simulation of real-world systems (e.g., waiting lines)</li>
            <li>Priority queues for event processing queues for event processing</li>
        </ul>
        <h5>For more information and questions open below link</h5>
        <a href="https://www.geeksforgeeks.org/queue-data-structure/">questions</a>
        <Link to="/quizstackandqueues"><button style={{ backgroundColor: 'green', color: 'white', border: 'none', borderRadius: '5px', padding: '10px 20px', cursor: 'pointer' }} >Take Qu iz</button></Link> {/* Link to the quiz component */}  
        </div>
    );
}
export default Stackandqueues;