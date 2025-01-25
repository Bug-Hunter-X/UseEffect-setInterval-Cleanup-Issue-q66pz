# React useEffect setInterval Cleanup Issue

This repository demonstrates a common issue in React components: using `setInterval` within the `useEffect` hook without proper cleanup.  This leads to memory leaks and unexpected behavior. The `bug.js` file contains the problematic code, while `bugSolution.js` shows the corrected version.

## Problem

The original component uses `setInterval` to update the count every second. However, it fails to clear the interval when the component unmounts. This means the interval continues to run even after the component is no longer displayed, consuming resources and potentially leading to unpredictable behavior.

## Solution

The solution involves using the return value of `useEffect` to implement a cleanup function. This cleanup function clears the interval when the component unmounts or when the dependencies change. This ensures that the interval is stopped when it's no longer needed, preventing memory leaks.