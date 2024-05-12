import React from 'react';
import { Link } from 'react-router-dom';
function LinkedList(){
    return(
        <div style={{ 
            display: 'flex',
            flexDirection: 'column',
            padding: '20px',
            border: '1px solid #ddd',
            borderRadius: '5px',
            margin: '10px'
          }}>
         <h2 style={{ marginBottom: '10px',textAlign:'center' }}>Linkedlist</h2>
         <p>A linked list is a fundamental data structure in computer science. It consists of nodes where each node contains data and a reference (link) to the next node in the sequence. This allows for dynamic memory allocation and efficient insertion and deletion operations compared to arrays.</p>
         <h5>What is a Linked List?</h5>
         <p>A linked list is a linear data structure that consists of a series of nodes connected by pointers. Each node contains data and a reference to the next node in the list. Unlike arrays, linked lists allow for efficient insertion or removal of elements from any position in the list, as the nodes are not stored contiguously in memory.</p>
         <h5>Linked Lists vs Arrays</h5>
         <h6>Linked List:</h6>
         <ul>
            <li>Data Structure: Non-contiguous</li>
            <li>Memory Allocation: Dynamic</li>
            <li>Insertion/Deletion: Efficient</li>
            <li>Access: Sequential</li>
         </ul>
         <h6>Array:</h6>
         <ul>
            <li>Data Structure: Contiguous</li>
            <li>Memory Allocation: Static</li>
            <li>Insertion/Deletion: Inefficient</li>
            <li>Access: Random</li>
         </ul>
         <h5>Types of Linked List</h5>
         <ol>
            <li><a href="https://www.geeksforgeeks.org/data-structures/linked-list/singly-linked-list/">Singly Linked List</a></li>
            <li><a href="https://www.geeksforgeeks.org/introduction-and-insertion-in-a-doubly-linked-list/">Doubly Linked List</a></li>
            <li><a href="https://www.geeksforgeeks.org/circular-linked-list/">Circular Linked List</a></li>
            <li><a href="https://www.geeksforgeeks.org/introduction-to-circular-doubly-linked-list/">Circular Doubly Linked List</a></li>
            <li><a href="https://www.geeksforgeeks.org/introduction-to-circular-doubly-linked-list/">Header Linked List</a></li>
         </ol>
         <h5>Operations of Linked Lists:</h5>
         <ul>
            <li>Linked List Insertion</li>
            <li>Search an element in a Linked List (Iterative and Recursive)</li>
            <li>Find Length of a Linked List (Iterative and Recursive)</li>
            <li>Reverse a linked list</li>
            <li>Linked List Deletion (Deleting a given key)</li>
            <li>Linked List Deletion (Deleting a key at given position)</li>
            <li>Write a function to delete a Linked List</li>
            <li>Write a function to get Nth node in a Linked List</li>
            <li>Nth node from the end of a Linked List</li>
         </ul>
         <h5>Linked List Applications</h5>
         <ul>
            <li>Implementing stacks and queues using linked lists.</li>
            <li>Using linked lists to handle collisions in hash tables.</li>
            <li>Representing graphs using linked lists.</li>
            <li>Allocating and deallocating memory dynamically.</li>
         </ul>
         <h5>For more information and questions open below link</h5>
        <a href="https://www.geeksforgeeks.org/data-structures/linked-list/">questions</a> 
        <Link to="/quizlinkedlist"><button style={{ backgroundColor: 'green', color: 'white', border: 'none', borderRadius: '5px', padding: '10px 20px', cursor: 'pointer' }} >Take Quiz</button></Link> {/* Link to the quiz component */}
        </div>
    );
}
export default LinkedList;