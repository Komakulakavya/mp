import React from 'react';
import { Link } from 'react-router-dom';
function Searching() {
    return (
        <div style={{ 
            display: 'flex',
            flexDirection: 'column',
            padding: '20px',
            border: '1px solid #ddd',
            borderRadius: '5px',
            margin: '10px'
        }}>
        <h2 style={{ marginBottom: '10px',textAlign:'center' }}>Searching</h2>
        <p style={{fontSize : '15px'}}>
        Searching algorithms are essential tools in computer science used to locate specific items within a collection of data. These algorithms are designed to efficiently navigate through data structures to find the desired information, making them fundamental in various applications such as databases, web search engines, and more.
        </p>
        <h5>What is Searching?</h5>
        <p>Searching is the fundamental process of locating a specific element or item within a collection of data. This collection of data can take various forms, such as arrays, lists, trees, or other structured representations. The primary objective of searching is to determine whether the desired element exists within the data, and if so, to identify its precise location or retrieve it. It plays an important role in various computational tasks and real-world applications, including information retrieval, data analysis, decision-making processes, and more.</p>
        <h5>Searching terminologies:</h5>
        <h6>Target Element:</h6>
        <p>In searching, there is always a specific target element or item that you want to find within the data collection. This target could be a value, a record, a key, or any other data entity of interest.</p>
        <h6>Search Space:</h6>
        <p>The search space refers to the entire collection of data within which you are looking for the target element. Depending on the data structure used, the search space may vary in size and organization.</p>
        <h6>Complexity:</h6>
        <p>Searching can have different levels of complexity depending on the data structure and the algorithm used. The complexity is often measured in terms of time and space requirements.</p>
        <h6>Deterministic vs. Non-deterministic:</h6>
        <p>Some searching algorithms, like binary search, are deterministic, meaning they follow a clear, systematic approach. Others, such as linear search, are non-deterministic, as they may need to examine the entire search space in the worst case.</p>
        <h5>Importance of Searching in DSA:</h5>
        <ul>
            <li>Efficiency: Efficient searching algorithms improve program performance.</li>
            <li>Data Retrieval: Quickly find and retrieve specific data from large datasets.</li>
            <li>Database Systems: Enables fast querying of databases.</li>
            <li>Problem Solving: Used in a wide range of problem-solving tasks.</li>
        </ul>
        <h5>Applications of Searching:</h5>
        <p>Searching algorithms have numerous applications across various fields. Here are some common applications:</p>
        <ul>
            <li>Searching algorithms have numerous applications across various fields. Here are some common applications:</li>
            <li>Database Systems: Searching is fundamental in database systems for retrieving specific data records based on user queries, improving efficiency in data retrieval.</li>
            <li>E-commerce: Searching is crucial in e-commerce platforms for users to find products quickly based on their preferences, specifications, or keywords.</li>
            <li>Networking: In networking, searching algorithms are used for routing packets efficiently through networks, finding optimal paths, and managing network resources.</li>
            <li>Artificial Intelligence: Searching algorithms play a vital role in AI applications, such as problem-solving, game playing (e.g., chess), and decision-making processes</li>
            <li>Pattern Recognition: Searching algorithms are used in pattern matching tasks, such as image recognition, speech recognition, and handwriting recognition.</li>
        </ul>
        <h5>Easy Problems on Seraching</h5>
        <ul> 
            <li><a href="https://www.geeksforgeeks.org/find-the-largest-three-elements-in-an-array/">Find the largest three elements in an array</a></li>
            <li><a href="https://www.geeksforgeeks.org/find-the-missing-number/">Find the Missing Number</a></li>
            <li><a href="https://www.geeksforgeeks.org/find-first-repeating-element-array-integers/">Find the first repeating element in an array of integers</a></li>
            <li><a href="https://www.geeksforgeeks.org/find-a-repeating-and-a-missing-number/">Find the missing and repeating number</a></li>
            <li><a href="https://www.geeksforgeeks.org/search-insert-and-delete-in-a-sorted-array/">Search, insert and delete in a sorted array</a></li>
            <li><a href="https://www.geeksforgeeks.org/count-1s-sorted-binary-array/">Count 1’s in a sorted binary array</a></li>
            <li><a href="https://www.geeksforgeeks.org/two-elements-whose-sum-is-closest-to-zero/">Two elements whose sum is closest to zero</a></li>
            <li><a href="https://www.geeksforgeeks.org/find-a-pair-with-the-given-difference/">Find a pair with the given difference</a></li>
            <li><a href="https://www.geeksforgeeks.org/k-largestor-smallest-elements-in-an-array/">k largest(or smallest) elements in an array</a></li>
            <li><a href="https://www.geeksforgeeks.org/kth-smallest-element-in-a-row-wise-and-column-wise-sorted-2d-array/">Kth smallest element in a row-wise and column-wise sorted 2D array</a></li>
            <li><a href="https://www.geeksforgeeks.org/find-common-elements-three-sorted-arrays/">Find common elements in three sorted arrays</a></li>
            <li><a href="https://www.geeksforgeeks.org/ceiling-in-a-sorted-array/">Ceiling in a sorted array</a></li>
            <li><a href="https://www.geeksforgeeks.org/floor-in-a-sorted-array/">Floor in a Sorted Array</a></li>
            <li><a href="https://www.geeksforgeeks.org/find-the-maximum-element-in-an-array-which-is-first-increasing-and-then-decreasing/">Find the maximum element in an array which is first increasing and then decreasing</a></li>
            <li><a href="https://www.geeksforgeeks.org/given-an-array-of-of-size-n-finds-all-the-elements-that-appear-more-than-nk-times/">Given an array of of size n and a number k, find all elements that appear more than n/k times</a></li>
        </ul>
        <h5>Medium Problems on Searching</h5>
        <ul>
            <li> <a href="https://www.geeksforgeeks.org/find-triplets-array-whose-sum-equal-zero/">Find all triplets with zero sum</a></li>
            <li> <a href="https://www.geeksforgeeks.org/find-the-element-before-which-all-the-elements-are-smaller-than-it-and-after-which-all-are-greater-than-it/">Find the element before which all the elements are smaller than it, and after which all are greater</a></li>
            <li> <a href="https://www.geeksforgeeks.org/find-the-largest-pair-sum-in-an-unsorted-array/">Find the largest pair sum in an unsorted array</a></li>
            <li> <a href="https://www.geeksforgeeks.org/kth-smallest-largest-element-in-unsorted-array/">K’th Smallest/Largest Element in Unsorted Array</a></li>
            <li> <a href="https://www.geeksforgeeks.org/search-an-element-in-a-sorted-and-pivoted-array/">Search an element in a sorted and rotated array</a></li>
            <li> <a href="https://www.geeksforgeeks.org/find-minimum-element-in-a-sorted-and-rotated-array/">Find the minimum element in a sorted and rotated array</a></li>
            <li> <a href="https://www.geeksforgeeks.org/find-a-peak-in-a-given-array/">Find a peak element</a></li>
            <li> <a href="https://www.geeksforgeeks.org/maximum-and-minimum-in-an-array/">Maximum and minimum of an array using minimum number of comparisons</a></li>
            <li> <a href="Find a Fixed Point in a given array">Find a Fixed Point in a given array</a></li>
            <li> <a href="https://www.geeksforgeeks.org/find-the-k-most-frequent-words-from-a-file/">Find the k most frequent words from a file</a></li>
            <li> <a href="https://www.geeksforgeeks.org/find-k-closest-elements-given-value/">Find k closest elements to a given value</a></li>
            <li> <a href="https://www.geeksforgeeks.org/given-sorted-array-number-x-find-pair-array-whose-sum-closest-x/">Given a sorted array and a number x, find the pair in array whose sum is closest to x</a></li>
            <li> <a href="https://www.geeksforgeeks.org/given-two-sorted-arrays-number-x-find-pair-whose-sum-closest-x/">Find the closest pair from two sorted arrays</a></li>
            <li> <a href="https://www.geeksforgeeks.org/find-three-closest-elements-from-given-three-sorted-arrays/">Find three closest elements from given three sorted arrays</a></li>
            <li> <a href="https://www.geeksforgeeks.org/binary-search-for-rational-numbers-without-using-floating-point-arithmetic/">Binary Search for Rational Numbers without using floating point arithmetic</a></li>
        </ul>
        <h5>Hard Problems on Searching</h5>
        <ul>
            <li> <a href="https://www.geeksforgeeks.org/median-of-two-sorted-arrays/">Median of two sorted arrays</a></li>
            <li> <a href="https://www.geeksforgeeks.org/median-of-two-sorted-arrays-of-different-sizes/">Median of two sorted arrays of different sizes</a></li>
            <li> <a href="https://www.geeksforgeeks.org/search-almost-sorted-array/">Search in an almost sorted array</a></li>
            <li> <a href="https://www.geeksforgeeks.org/find-position-element-sorted-array-infinite-numbers/">Find position of an element in a sorted array of infinite numbers</a></li>
            <li> <a href="https://www.geeksforgeeks.org/given-a-sorted-and-rotated-array-find-if-there-is-a-pair-with-a-given-sum/">Given a sorted and rotated array, find if there is a pair with a given sum</a></li>
            <li> <a href="https://www.geeksforgeeks.org/kth-smallest-largest-element-in-unsorted-array-worst-case-linear-time/">K’th Smallest/Largest Element in Unsorted Array | Worst case Linear Time</a></li>
            <li> <a href="https://www.geeksforgeeks.org/kth-largest-element-in-a-stream/">K’th largest element in a stream</a></li>
            <li> <a href="https://www.geeksforgeeks.org/best-first-search-informed-search/">Best First Search (Informed Search)</a></li>
        </ul>
        <h5>For more information open below link</h5>
        <a href="https://www.geeksforgeeks.org/searching-algorithms/">information</a>
        <Link to="/quizsearching"><button style={{ backgroundColor: 'green', color: 'white', border: 'none', borderRadius: '5px', padding: '10px 20px', cursor: 'pointer' }} >Take Qu iz</button></Link> {/* Link to the quiz component */}
        </div>
    );
}
export default Searching;