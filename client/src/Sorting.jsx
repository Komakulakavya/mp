import React from 'react';
import { Link } from 'react-router-dom';
function Sorting(){
    return(
        <div style={{ 
            display: 'flex',
            flexDirection: 'column',
            padding: '20px',
            border: '1px solid #ddd',
            borderRadius: '5px',
            margin: '10px'
        }}>
        <h2 style={{ marginBottom: '10px',textAlign:'center' }}>Sorting</h2>
        <p>A Sorting Algorithm is used to rearrange a given array or list of elements according to a comparison operator on the elements. The comparison operator is used to decide the new order of elements in the respective data structure.</p>
        <p>For Example: The below list of characters is sorted in increasing order of their ASCII values. That is, the character with a lesser ASCII value will be placed first than the character with a higher ASCII value.</p>
        <h5>What is Sorting?</h5>
        <p>Sorting refers to rearrangement of a given array or list of elements according to a comparison operator on the elements. The comparison operator is used to decide the new order of elements in the respective data structure. Sorting means reordering of all the elements either in ascending or in descending order.</p>
        <h5>Sorting Terminology:</h5>
        <ul>
            <li>In-place Sorting: An in-place sorting algorithm uses constant space for producing the output (modifies the given array only). It sorts the list only by modifying the order of the elements within the list. Examples: Selection Sort, Bubble Sort Insertion Sort and Heap Sort.</li>
            <li>Internal Sorting: Internal Sorting is when all the data is placed in the main memory or internal memory. In internal sorting, the problem cannot take input beyond its size. Example: heap sort, bubble sort, selection sort, quick sort, shell sort, insertion sort.</li>
            <li>External Sorting : External Sorting is when all the data that needs to be sorted cannot be placed in memory at a time, the sorting is called external sorting. External Sorting is used for the massive amount of data. Examples: Merge sort, Tag sort, Polyphase sort, Four tape sort, External radix sort, etc.</li>
            <li>Stable sorting: When two same data appear in the same order in sorted data without changing their position is called stable sort. Examples: Merge Sort, Insertion Sort, Bubble Sort.</li>
            <li>Unstable sorting: When two same data appear in the different order in sorted data it is called unstable sort. Examples: Quick Sort, Heap Sort, Shell Sort.</li>
        </ul>
        <h5>Characteristics of Sorting Algorithms:</h5>
        <ul>
            <li>Time Complexity: Time complexity, a measure of how long it takes to run an algorithm, is used to categorize sorting algorithms. The worst-case, average-case, and best-case performance of a sorting algorithm can be used to quantify the time complexity of the process.</li>
            <li>Space Complexity: Sorting algorithms also have space complexity, which is the amount of memory required to execute the algorithm.</li>
            <li>Stability: A sorting algorithm is said to be stable if the relative order of equal elements is preserved after sorting. This is important in certain applications where the original order of equal elements must be maintained.</li>
            <li>In-Place Sorting: An in-place sorting algorithm is one that does not require additional memory to sort the data. This is important when the available memory is limited or when the data cannot be moved.</li>
            <li>Adaptivity: An adaptive sorting algorithm is one that takes advantage of pre-existing order in the data to improve performance.</li>
        </ul>
        <h5>Applications of Sorting Algorithms:</h5>
        <ul>
            <li>Searching Algorithms: Sorting is often a crucial step in search algorithms like binary search, Ternary Search, where the data needs to be sorted before searching for a specific element.</li>
            <li>Data management: Sorting data makes it easier to search, retrieve, and analyze.</li>
            <li>Database optimization: Sorting data in databases improves query performance.</li>
            <li>Machine learning: Sorting is used to prepare data for training machine learning models.</li>
            <li>Data Analysis: Sorting helps in identifying patterns, trends, and outliers in datasets. It plays a vital role in statistical analysis, financial modeling, and other data-driven fields.</li>
            <li>Operating Systems: Sorting algorithms are used in operating systems for tasks like task scheduling, memory management, and file system organization.</li>
        </ul>  
        <h5>Sorting Algorithms:</h5>
        <ul>
            <li><a href="https://www.geeksforgeeks.org/selection-sort/">Selection Sort</a></li>
            <li><a href="https://www.geeksforgeeks.org/bubble-sort/">Bubble Sort</a></li>
            <li><a href="https://www.geeksforgeeks.org/insertion-sort/">Insertion Sort</a></li>
            <li><a href="https://www.geeksforgeeks.org/merge-sort/">Merge Sort</a></li>
            <li><a href="https://www.geeksforgeeks.org/quick-sort/">Quick Sort</a></li>
            <li><a href="https://www.geeksforgeeks.org/heap-sort/">Heap Sort</a></li>
            <li><a href="https://www.geeksforgeeks.org/counting-sort/">Counting Sort</a></li>
            <li><a href="https://www.geeksforgeeks.org/radix-sort/">Radix Sort</a></li>
            <li><a href="https://www.geeksforgeeks.org/bucket-sort-2/">Bucket Sort</a></li>
            <li><a href="https://www.geeksforgeeks.org/bingo-sort-algorithm/">Bingo Sort Algorithm</a></li>
            <li><a href="https://www.geeksforgeeks.org/shellsort/">ShellSort</a></li>
            <li><a href="https://www.geeksforgeeks.org/timsort/">TimSort</a></li>
            <li><a href="https://www.geeksforgeeks.org/comb-sort/">CombSort</a></li>
            <li><a href="https://www.geeksforgeeks.org/pigeonhole-sort/">Pigeonhole Sort</a></li>
            <li><a href="https://www.geeksforgeeks.org/cycle-sort/">Cycle Sort</a></li>
            <li><a href="https://www.geeksforgeeks.org/cocktail-sort/">Cocktail Sort</a></li>
            <li><a href="https://www.geeksforgeeks.org/strand-sort/">Strand Sort</a></li>
            <li><a href="https://www.geeksforgeeks.org/bitonic-sort/">Bitonic Sort</a></li>
            <li><a href="https://www.geeksforgeeks.org/pancake-sorting/">Pancake Sort</a></li>
            <li><a href="https://www.geeksforgeeks.org/bogosort-permutation-sort/">BogoSort or Permutation Sort</a></li>
            <li><a href="https://www.geeksforgeeks.org/gnome-sort-a-stupid-one/">Gnome Sort</a></li>
            <li><a href="https://www.geeksforgeeks.org/sleep-sort-king-laziness-sorting-sleeping/">Sleep Sort-The King of Laziness</a></li>
            <li><a href="https://www.geeksforgeeks.org/structure-sorting-in-c/">Structure Sorting in C++</a></li>
            <li><a href="https://www.geeksforgeeks.org/stooge-sort/">Stooge Sort</a></li>
            <li><a href="https://www.geeksforgeeks.org/tag-sort/">Tag Sort(To get both sorted and original)</a></li>
            <li><a href="https://www.geeksforgeeks.org/tree-sort/">Tree sort</a></li>
            <li><a href="https://www.geeksforgeeks.org/odd-even-sort-brick-sort/">Odd-Even Sort/ Brick Sort</a></li>
            <li><a href="https://www.geeksforgeeks.org/3-way-merge-sort/">3-way Merge Sort</a></li>
        </ul>
        <h5>Easy Problems on sorting:</h5>
        <ul>
            <li><a href="https://www.geeksforgeeks.org/sort-elements-by-frequency/">Sort elements by frequency</a></li>
            <li><a href="https://www.geeksforgeeks.org/sort-an-array-of-0s-1s-and-2s/">Sort an array of 0s,1s and 2s</a></li>
            <li><a href="https://www.geeksforgeeks.org/sort-numbers-stored-on-different-machines/">Sort numbers stored on different machines</a></li>
            <li><a href="https://www.geeksforgeeks.org/sort-array-wave-form-2/">Sort an array in wave form</a></li>
            <li><a href="https://www.geeksforgeeks.org/check-if-any-two-intervals-overlap-among-a-given-set-of-intervals/">Check if any two intervals overlap among a agiven set of intervals</a></li>
            <li><a href="https://www.geeksforgeeks.org/how-to-sort-an-array-of-dates-in-cc/">How to sort an array of dates in C/C++?</a></li>
            <li><a href="https://www.geeksforgeeks.org/sorting-strings-using-bubble-sort-2/">Sorting Strings using Bubble sort</a></li>
            <li><a href="https://www.geeksforgeeks.org/find-missing-elements-of-a-range/">Find missing elements of a range</a></li>
            <li><a href="https://www.geeksforgeeks.org/sort-array-according-count-set-bits/">Sort an array according to count of set bits</a></li>
            <li><a href="https://www.geeksforgeeks.org/sort-even-placed-elements-increasing-odd-placed-decreasing-order/">Sort even-placed elements in increasing and odd-placed in decreasing order</a></li>
            <li><a href="https://www.geeksforgeeks.org/sort-array-two-halves-sorted/">Sort an array when two halves are sorted</a></li>
            <li><a href="https://www.geeksforgeeks.org/sorting-big-integers/">Sorting Big Integers</a></li>
            <li><a href="https://www.geeksforgeeks.org/sort-a-linked-list-of-0s-1s-or-2s/">Sort a linked list of 0s,1s and 2s</a></li>
        </ul>
        <h5>Medium Problems on Sorting:</h5>
        <ul>
            <li><a href="https://www.geeksforgeeks.org/inversion-count-in-array-using-merge-sort/">Inversion count in Array using Merge Sort</a></li>
            <li><a href="https://www.geeksforgeeks.org/minimum-length-unsorted-subarray-sorting-which-makes-the-complete-array-sorted/">Find the Minimum length Unsorted Subarray, sorting which makes the complete array sorted</a></li>
            <li><a href="https://www.geeksforgeeks.org/nearly-sorted-algorithm/">Sort a nearly sorted (or K sorted) array</a></li>
            <li><a href="https://www.geeksforgeeks.org/sort-n-numbers-range-0-n2-1-linear-time/">Sort n numbers in range from 0 to n^2-1 in linear time</a></li>
            <li><a href="https://www.geeksforgeeks.org/sort-array-according-order-defined-another-array/">Sort an array according to the order defined by another array</a></li>
            <li><a href="https://www.geeksforgeeks.org/find-the-point-where-maximum-intervals-overlap/">Find the point where maximum intervals overlap</a></li>
            <li><a href="https://www.geeksforgeeks.org/find-a-permutation-that-causes-worst-case-of-merge-sort/">Find a permutation that causes worst case of Merge Sort</a></li>
            <li><a href="https://www.geeksforgeeks.org/sort-vector-of-pairs-in-ascending-order-in-c/">Sort Vector of Pairs in ascending order in C++</a></li>
            <li><a href="https://www.geeksforgeeks.org/minimum-swaps-to-make-two-array-identical/">Minimum swaps to make two arrays identical</a></li>
            <li><a href="https://www.geeksforgeeks.org/chocolate-distribution-problem/">Chocolate Distribution Problem</a></li>
            <li><a href="https://www.geeksforgeeks.org/permute-two-arrays-sum-every-pair-greater-equal-k/">Permute two arrays such that sum of every pair is greater or equal to K</a></li>
            <li><a href="https://www.geeksforgeeks.org/bucket-sort-to-sort-an-array-with-negative-numbers/">Bucket Sort To Sort an Array with Negative Numbers</a></li>
            <li><a href="https://www.geeksforgeeks.org/sort-matrix-way-increasing-order/">Sort a Matrix in all way increasing order</a></li>
            <li><a href="https://www.geeksforgeeks.org/convert-an-array-to-reduced-form-using-vector-of-pairs/">Convert an Array to reduced form using Vector of pairs</a></li>
            <li><a href="https://www.geeksforgeeks.org/smallest-difference-triplet-from-three-arrays/">Smallest Difference Triplet from Three arrays</a></li>
            <li><a href="https://www.geeksforgeeks.org/check-possible-sort-array-conditional-swapping-adjacent-allowed/">Check if it is possible to sort an array with conditional swapping of adjacent allowed</a></li>
        </ul>
        <h5>Hard Problems on Sorting:</h5>
        <ul>
            <li><a href="https://www.geeksforgeeks.org/find-surpasser-count-of-each-element-in-array/">Find Surpasser Count of each element in array</a></li>
            <li><a href="https://www.geeksforgeeks.org/count-distinct-occurrences-as-a-subsequence/">Count distinct occurrences as a subsequence</a></li>
            <li><a href="https://www.geeksforgeeks.org/count-minimum-number-subsets-subsequences-consecutive-numbers/">Count minimum number of subsets (or subsequences) with consecutive numbers</a></li>
            <li><a href="https://www.geeksforgeeks.org/k-numbers-difference-maximum-minimum-k-number-minimized/">Chose k array elements such that difference of maximum and minimum is minimized</a></li>
            <li><a href="https://www.geeksforgeeks.org/minimum-swap-required-convert-binary-tree-binary-search-tree/">Minimum swap required to convert binary tree to binary search tree</a></li>
            <li><a href="https://www.geeksforgeeks.org/k-th-smallest-element-removing-integers-natural-numbers/">K-th smallest element after removing some integers from natural numbers</a></li>
            <li><a href="https://www.geeksforgeeks.org/maximum-difference-between-frequency-of-two-elements-such-that-element-having-greater-frequency-is-also-greater/">Maximum difference between frequency of two elements such that element having greater frequency is also greater</a></li>
            <li><a href="https://www.geeksforgeeks.org/minimum-swaps-reach-permuted-array-2-positions-left-swaps-allowed/">Minimum swaps to reach permuted array with at most 2 positions left swaps allowed</a></li>
            <li><a href="https://www.geeksforgeeks.org/find-whether-possible-make-array-elements-using-one-external-number/">Find whether it is possible to make array elements same using one external number</a></li>
            <li><a href="https://www.geeksforgeeks.org/sort-array-applying-given-equation/">Sort an array after applying the given equation</a></li>
            <li><a href="https://www.geeksforgeeks.org/print-array-strings-sorted-order-without-copying-one-string-another/">Print array of strings in sorted order without copying one string into another</a></li>
        </ul>
        <h5>For more information and questions open below link</h5>
        <a href="https://www.geeksforgeeks.org/sorting-algorithms/">questions</a>
        <Link to="/quizsorting"><button style={{ backgroundColor: 'green', color: 'white', border: 'none', borderRadius: '5px', padding: '10px 20px', cursor: 'pointer' }} >Take Qu iz</button></Link> {/* Link to the quiz component */}
        </div>
    );
}
export default Sorting;