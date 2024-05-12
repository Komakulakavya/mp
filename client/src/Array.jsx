import React from 'react';
import { Link } from 'react-router-dom'; // Assuming you're using React Router for routing

function Array() {
  return (
    <div style={{ 
      maxWidth: '800px',
      margin: 'auto',
      padding: '20px',
      border: '1px solid #ddd',
      borderRadius: '5px',
      boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)',
      backgroundColor: '#fff'

    }}>
      <h1 style={{marginBottom:'-25px',textAlign:'center' }}>Array Data Structure</h1>
      <p style={{ fontSize: '15px'}}>
        An array data structure is a fundamental concept in computer science that stores a collection of elements in a contiguous block of memory. It allows for efficient access to elements using indices and is widely used in programming for organizing and manipulating data.
      </p>
      <div style={{ textAlign: 'center', margin: '20px 0' }}>
        <iframe 
          width="560" 
          height="315" 
          src="https://www.youtube.com/embed/eXFItikqw8c" 
          title="YouTube video player" 
          frameBorder="0" 
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
          allowFullScreen
          muted='1'
          autoPlay='1'
        ></iframe>
      </div>

      <h2>What is an Array?</h2>
      <img src="https://docs.oracle.com/javase/tutorial/figures/java/objects-tenElementArray.gif" alt="Array Image" style={{ width: '500px', height: 'auto', margin: '10px 0' , marginLeft:'150px'}} />
      <p style={{ fontSize: '15px'}}>An array is a collection of items of the same variable type that are stored at contiguous memory locations. It’s one of the most popular and simple data structures and is often used to implement other data structures. Each item in an array is indexed starting with 0. Each element in an array is accessed through its index.</p>
      <h2>Need of Array Data Structures</h2>
      <p style={{fontSize: '15px'}}>Arrays are a fundamental data structure in computer science. They are used in a wide variety of applications, including:</p>
      <ul>
        <li style={{fontSize:'15px'}}>Storing data for processing</li>
        <li style={{fontSize:'15px'}}>Implementing data structures such as stacks and queues</li>
        <li style={{fontSize:'15px'}}>Representing data in tables and matrices</li>
        <li style={{fontSize:'15px'}}>Creating dynamic data structures such as linked lists and trees</li>
      </ul>
      <h2>Types of Array</h2>
      <p style={{fontSize : '15px'}}>There are two main types of arrays:</p>
      <ul>
        <li style={{fontSize:'15px'}}>One-dimensional arrays: These arrays store a single row of elements.</li>
        <li style={{fontSize:'15px'}}>Multidimensional arrays: These arrays store multiple rows of elements.</li>
      </ul>
      <h2>Array Operations</h2>
      <p style={{fontSize : '15px'}}>Common operations performed on arrays include:</p>
      <ul>
        <li style={{fontSize:'15px'}}>Traversal: Visiting each element of an array in a specific order (e.g., sequential, reverse).</li>
        <li style={{fontSize:'15px'}}>Insertion: Adding a new element to an array at a specific index.</li>
        <li style={{fontSize:'15px'}}>Deletion: Removing an element from an array at a specific index.</li>
        <li style={{fontSize:'15px'}}>Searching: Finding the index of an element in an array.</li>
      </ul>
      <h2>Applications of Array</h2>
      <p style={{fontSize : '15px'}}>Arrays are used in a wide variety of applications, including:</p>
      <ul>
        <li style={{fontSize:'15px'}}>Storing data for processing</li>
        <li style={{fontSize:'15px'}}>Implementing data structures such as stacks and queues</li>
        <li style={{fontSize:'15px'}}>Representing data in tables and matrices</li>
        <li style={{fontSize:'15px'}}>Creating dynamic data structures such as linked lists and trees</li>
      </ul>
      <h2>Easy Problems on Array:</h2>
      <ul>
        <li style={{fontSize:'15px'}}><a href="https://www.geeksforgeeks.org/find-the-largest-three-elements-in-an-array/">Find the largest three elements in an array</a></li>
        <li style={{fontSize:'15px'}}><a href="https://www.geeksforgeeks.org/find-second-largest-element-array/">Find Second largest element in an array</a></li>
        <li style={{fontSize:'15px'}}><a href="https://www.geeksforgeeks.org/move-zeroes-end-array/">Move all zeroes to end of array</a></li>
        <li style={{fontSize:'15px'}}><a href="https://www.geeksforgeeks.org/rearrange-array-such-that-even-positioned-are-greater-than-odd/">Rearrange array such that even positioned are greater than odd</a></li>
        <li style={{fontSize:'15px'}}><a href="https://www.geeksforgeeks.org/rearrange-array-maximum-minimum-form/">Rearrange an array in maximum minimum form using Two Pointer Technique</a></li>
        <li style={{fontSize:'15px'}}><a href="https://www.geeksforgeeks.org/segregate-even-odd-numbers-set-3/">Segregate even and odd numbers</a></li>
        <li style={{fontSize:'15px'}}><a href="https://www.geeksforgeeks.org/program-for-array-rotation-continued-reversal-algorithm/">Reversal algorithm for array rotation</a></li>
        <li style={{fontSize:'15px'}}><a href="https://www.geeksforgeeks.org/print-left-rotation-array/">Print left rotation of array in O(n) time and O(1) space</a></li>
        <li style={{fontSize:'15px'}}><a href="https://www.geeksforgeeks.org/sort-array-wave-form-2/">Sort an array in wave form</a></li>
        <li style={{fontSize:'15px'}}><a href="https://www.geeksforgeeks.org/sort-array-contain-1-n-values/">Sort an array which contain 1 to n values</a></li>
        <li style={{fontSize:'15px'}}><a href="https://www.geeksforgeeks.org/find-number-of-triangles-possible/">Count the number of possible triangles</a></li>
        <li style={{fontSize:'15px'}}><a href="https://www.geeksforgeeks.org/print-distinct-elements-given-integer-array/">Print All Distinct Elements of a given integer array</a></li>
        <li style={{fontSize:'15px'}}><a href="https://www.geeksforgeeks.org/find-element-appears-array-every-element-appears">Find the element that appears once in Array where every other element appears twice</a></li>
        <li style={{fontSize:'15px'}}><a href="https://www.geeksforgeeks.org/leaders-in-an-array/">Leaders in an array</a></li>
        <li style={{fontSize:'15px'}}><a href="https://www.geeksforgeeks.org/find-subarray-with-given-sum/">Find sub-array with given sum</a></li>
      </ul>
      <h2>Medium Problems on Array:</h2>
      <ul>
        <li style={{fontSize:'15px'}}><a href="https://www.geeksforgeeks.org/rearrange-array-arri/">Rearrange an array such that arr[i] = i</a></li>
        <li style={{fontSize:'15px'}}><a href="https://www.geeksforgeeks.org/rearrange-positive-and-negative-numbers-publish/">Rearrange positive and negative numbers in O(n) time and O(1) extra space</a></li>
        <li style={{fontSize:'15px'}}><a href="https://www.geeksforgeeks.org/reorder-a-array-according-to-given-indexes/">Reorder an array according to given indexes</a></li>
        <li style={{fontSize:'15px'}}><a href="https://www.geeksforgeeks.org/search-an-element-in-a-sorted-and-pivoted-array/">Search an element in a sorted and rotated array</a></li>
        <li style={{fontSize:'15px'}}><a href="https://www.geeksforgeeks.org/find-rotation-count-rotated-sorted-array/">Find the Rotation Count in Rotated Sorted array</a></li>
        <li style={{fontSize:'15px'}}><a href="https://www.geeksforgeeks.org/k-th-largest-sum-contiguous-subarray/">K-th Largest Sum Contiguous Subarray</a></li>
        <li style={{fontSize:'15px'}}><a href="https://www.geeksforgeeks.org/find-the-first-missing-number/">Find the smallest missing number</a></li>
        <li style={{fontSize:'15px'}}><a href="https://www.geeksforgeeks.org/difference-array-range-update-query-o1/">Difference Array | Range update query in O(1)</a></li>
        <li style={{fontSize:'15px'}}><a href="https://www.geeksforgeeks.org/maximum-profit-by-buying-and-selling-a-share-at-most-twice/">Maximum profit by buying and selling a share at most twice</a></li>
        <li style={{fontSize:'15px'}}><a href="https://www.geeksforgeeks.org/minimum-length-subarray-sum-greater-given-value/">Smallest subarray with sum greater than a given value</a></li>
        <li style={{fontSize:'15px'}}><a href="https://www.geeksforgeeks.org/inversion-count-in-array-using-merge-sort/">Inversion count in Array using Merge Sort</a></li>
        <li style={{fontSize:'15px'}}><a href="https://www.geeksforgeeks.org/sort-an-array-of-0s-1s-and-2s/">Sort an array of 0s, 1s and 2s</a></li>
        <li style={{fontSize:'15px'}}><a href="https://www.geeksforgeeks.org/merge-two-sorted-arrays-o1-extra-space/">Merge two sorted arrays with O(1) extra space</a></li>
        <li style={{fontSize:'15px'}}><a href="https://www.geeksforgeeks.org/majority-element/">Majority Element</a></li>
        <li style={{fontSize:'15px'}}><a href="https://www.geeksforgeeks.org/two-pointers-technique/">Two Pointers Technique</a></li>
        <li style={{fontSize:'15px'}}><a href="https://www.geeksforgeeks.org/find-a-peak-in-a-given-array/">Find a peak element</a></li>
        <li style={{fontSize:'15px'}}><a href="https://www.geeksforgeeks.org/find-a-triplet-that-sum-to-a-given-value/">Find a triplet that sum to a given value</a></li>
        <li style={{fontSize:'15px'}}><a href="https://www.geeksforgeeks.org/minimum-increment-k-operations-make-elements-equal/">Minimum increment by k operations to make all elements equal</a></li>
        <li style={{fontSize:'15px'}}><a href="https://www.geeksforgeeks.org/equilibrium-index-of-an-array/">Equilibrium index of an array</a></li>
      </ul>
      <h2>Hard Problems on Array:</h2>
      <ul>
        <li style={{fontSize:'15px'}}><a href="">Find k numbers with most occurrences in the given array</a></li>
        <li style={{fontSize:'15px'}}><a href="">MO’s Algorithm</a></li>
        <li style={{fontSize:'15px'}}><a href="">Square Root (Sqrt) Decomposition Algorithm</a></li>
        <li style={{fontSize:'15px'}}><a href="">Sparse Table</a></li>
        <li style={{fontSize:'15px'}}><a href="">Range sum query using Sparse Table</a></li>
        <li style={{fontSize:'15px'}}><a href="">Range Minimum Query (Square Root Decomposition and Sparse Table)</a></li>
        <li style={{fontSize:'15px'}}><a href="">Range LCM Queries</a></li>
        <li style={{fontSize:'15px'}}><a href="">Merge Sort Tree for Range Order Statistics</a></li>
        <li style={{fontSize:'15px'}}><a href="">Minimum number of jumps to reach end</a></li>
        <li style={{fontSize:'15px'}}><a href="">Space optimization using bit manipulations</a></li>
        <li style={{fontSize:'15px'}}><a href="">Sort a nearly sorted (or K sorted) array</a></li>
        <li style={{fontSize:'15px'}}><a href="">Find maximum value of Sum( i*arr[i]) with only rotations on given array allowed</a></li>
        <li style={{fontSize:'15px'}}><a href="">Median in a stream of integers (running integers)</a></li>
        <li style={{fontSize:'15px'}}><a href="">Construct an array from its pair-sum array</a></li>
        <li style={{fontSize:'15px'}}><a href="">Maximum equlibrium sum in an array</a></li>
        <li style={{fontSize:'15px'}}><a href="">Smallest Difference Triplet from Three arrays</a></li>
        <li style={{fontSize:'15px'}}><a href="">Find all triplets with zero sum</a></li>
      </ul> 
      <Link to="/quiza"><button className='about' >Take Quiz</button></Link> {/* Link to the quiz component */}
    </div>
  );
}
export default Array;
