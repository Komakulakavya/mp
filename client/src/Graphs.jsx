import React from 'react';
import { Link } from 'react-router-dom';
function Graphs() {
    return(
        <div style={{ 
            display: 'flex',
            flexDirection: 'column',
            padding: '20px',
            border: '1px solid #ddd',
            borderRadius: '5px',
            margin: '10px'
          }}>
        <h2 style={{ marginBottom: '10px',textAlign:'center' }}>Graphs</h2>
        <p>Graph Data Structure is a collection of nodes connected by edges. It’s used to represent relationships between different entities. Graph algorithms are methods used to manipulate and analyze graphs, solving various problems like finding the shortest path or detecting cycles.</p>
        <h5>What is Graph Data Structure?</h5>
        <p>Graph is a non-linear data structure consisting of vertices and edges. The vertices are sometimes also referred to as nodes and the edges are lines or arcs that connect any two nodes in the graph. More formally a Graph is composed of a set of vertices( V ) and a set of edges( E ). The graph is denoted by G(V, E).</p>
        <p>Graph data structures are a powerful tool for representing and analyzing complex relationships between objects or entities. They are particularly useful in fields such as social network analysis, recommendation systems, and computer networks. In the field of sports data science, graph data structures can be used to analyze and understand the dynamics of team performance and player interactions on the field.</p>
        <h5>Components of a Graph:</h5>
        <ul>
            <li>Vertices: Vertices are the fundamental units of the graph. Sometimes, vertices are also known as vertex or nodes. Every node/vertex can be labeled or unlabeled.</li>
            <li>Edges: Edges are drawn or used to connect two nodes of the graph. It can be ordered pair of nodes in a directed graph. Edges can connect any two nodes in any possible way. There are no rules. Sometimes, edges are also known as arcs. Every edge can be labelled/unlabelled.</li>
        </ul>
        <h5>Basic Operations on Graphs:</h5>
        <p>Below are the basic operations on the graph:</p>
        <ul>
            <li>Insertion of Nodes/Edges in the graph – Insert a node into the graph.</li>
            <li>Deletion of Nodes/Edges in the graph – Delete a node from the graph.</li>
            <li>Searching on Graphs – Search an entity in the graph.</li>
            <li>Traversal of Graphs – Traversing all the nodes in the graph.</li>
        </ul>
        <h5>Applications of Graph:</h5>
        <ul>
            <li> Graph data structures can be used to represent the interactions between players on a team, such as passes, shots, and tackles. Analyzing these interactions can provide insights into team dynamics and areas for improvement.</li>
            <li>Commonly used to represent social networks, such as networks of friends on social media.</li>
            <li>Graphs can be used to represent the topology of computer networks, such as the connections between routers and switches.</li>
            <li>Graphs are used to represent the connections between different places in a transportation network, such as roads and airports.</li>
            <li>Graphs are used in Neural Networks where vertices represent neurons and edges represent the synapses between them. Neural networks are used to understand how our brain works and how connections change when we learn. The human brain has about 10^11 neurons and close to 10^15 synapses.</li> 
        </ul>
        <h5>For more information and questions open below link</h5>
        <a href="https://www.geeksforgeeks.org/graph-data-structure-and-algorithms/">questions</a>
        <Link to="/quizgraphs"><button style={{ backgroundColor: 'green', color: 'white', border: 'none', borderRadius: '5px', padding: '10px 20px', cursor: 'pointer' }} >Take Qu iz</button></Link> {/* Link to the quiz component */}  
        </div>
    );
}
export default Graphs;