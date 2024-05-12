import React from 'react';
import { Link } from 'react-router-dom';
function Trees(){
    return(
        <div style={{ 
            display: 'flex',
            flexDirection: 'column',
            padding: '20px',
            border: '1px solid #ddd',
            borderRadius: '5px',
            margin: '10px'
        }}>
        <h2 style={{ marginBottom: '10px',textAlign:'center' }}>Trees</h2>
        <p>Tree Data Structure is a hierarchical data structure in which a collection of elements known as nodes are connected to each other via edges such that there exists exactly one path between any two nodes.</p>
        <h5>What is Tree Data Structure?</h5>
        <p>A tree data structure is a hierarchical structure that is used to represent and organize data in a way that is easy to navigate and search. It is a collection of nodes that are connected by edges and has a hierarchical relationship between the nodes. </p>
        <p>The topmost node of the tree is called the root, and the nodes below it are called the child nodes. Each node can have multiple child nodes, and these child nodes can also have their own child nodes, forming a recursive structure.</p>
        <h5>Terminologies In Tree Data Structure:</h5>
        <ul>
            <li>Parent Node: The node which is a predecessor of a node is called the parent node of that node. B is the parent node of (D, E).</li>
            <li>Child Node: The node which is the immediate successor of a node is called the child node of that node. Examples: (D, E) are the child nodes of B.</li>
            <li>Root Node: The topmost node of a tree or the node which does not have any parent node is called the root node. A is the root node of the tree. A non-empty tree must contain exactly one root node and exactly one path from the root to all other nodes of the tree.</li>
            <li>Leaf Node or External Node: The nodes which do not have any child nodes are called leaf nodes. (K, L, M, N, O, P, G) are the leaf nodes of the tree.</li>
            <li>Ancestor of a Node: Any predecessor nodes on the path of the root to that node are called Ancestors of that node. (A,B) are the ancestor nodes of the node E</li>
            <li>Descendant: A node x is a descendant of another node y if and only if y is an ancestor of y.</li>
            <li>Sibling: Children of the same parent node are called siblings. (D,E) are called siblings.</li>
            <li>Level of a node: The count of edges on the path from the root node to that node. The root node has level 0.</li>
            <li>Internal node: A node with at least one child is called Internal Node.</li>
            <li>Neighbor of a Node: Parent or child nodes of that node are called neighbors of that node.</li>
            <li>Subtree: Any node of the tree along with its descendant.</li>
        </ul>
        <h5>Types of Tree Data Structure:</h5>
        <ul>
            <li>Binary tree: In a binary tree, each node can have a maximum of two children linked to it. Some common types of binary trees include full binary trees, complete binary trees, balanced binary trees, and degenerate or pathological binary trees.</li>
            <li>Ternary Tree: A Ternary Tree is a tree data structure in which each node has at most three child nodes, usually distinguished as “left”, “mid” and “right”</li>
            <li>N-ary Tree or Generic Tree: Generic trees are a collection of nodes where each node is a data structure that consists of records and a list of references to its children(duplicate references are not allowed). Unlike the linked list, each node stores the address of multiple nodes.</li>
        </ul>
        <h5>Applications of Tree Data Structure:</h5>
        <ul>
            <li>File System:  This allows for efficient navigation and organization of files.</li>
            <li>Data Compression: Huffman coding is a popular technique for data compression that involves constructing a binary tree where the leaves represent characters and their frequency of occurrence. The resulting tree is used to encode the data in a way that minimizes the amount of storage required.</li>
            <li>Compiler Design: In compiler design, a syntax tree is used to represent the structure of a program.</li>
            <li>Database Indexing: B-trees and other tree structures are used in database indexing to efficiently search for and retrieve data.</li>
        </ul>
        <h5>For more information and questions open below link</h5>
        <a href="https://www.geeksforgeeks.org/tree-data-structure/">questions</a>
        <Link to="/quiztrees"><button style={{ backgroundColor: 'green', color: 'white', border: 'none', borderRadius: '5px', padding: '10px 20px', cursor: 'pointer' }} >Take Qu iz</button></Link> {/* Link to the quiz component */}      
        </div>
    );
}
export default Trees;