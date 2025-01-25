```javascript
function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // Incorrect: using a setInterval inside useEffect without cleanup
    const intervalId = setInterval(() => {
      setCount((prevCount) => prevCount + 1);
    }, 1000);
  }, []);

  return <div>Count: {count}</div>;
}
```