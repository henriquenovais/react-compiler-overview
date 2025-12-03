# Overview step by step

## Send this to phone before presentation enable airplane mode

> Send feedback form on the cat
1. Send feedback form on the chat
> Show react compiler configuration
2. Show vite.config.js
3. Show annotations
4. Show react compiler in React Developer Tools
5. Comment: "This is great for Typescript!"
> Show application functonality
6. Trigger "number" increase
7. Trigger "counter" increase
> Show application code
8. Show memoized component
10. Show non memoized component
> Remove useMemo and test app
11. Remove useMemo from MemoizedComponent
12. Show application on trigger "number" increase
13. Show application on trigger "counter" increase
> Add "use memo" on App.jsx and test app
14. Change "use no memo" in App.jsx to "use memo"
15. Show React Developer Tools in console
16. Show application on trigger "number" increase
17. Show application on trigger "counter" increase
> Disable memo on parent, enable memo on children and test app
18. Change to "use no memo" in App.jsx
19. Show React Developer Tools in console
20. Change to "use memo" in NonMemoizedComponent.jsx
21. Change to "use memo" in MemoizedComponent.jsx
22. Show application on trigger "number" increase
23. Show application on trigger "counter" increase
> Enable compiler everywhere and pass counter as props and test app
24. Change to "use memo" in App.jsx
25. Pass "counter" props to NonMemoizedComponent.jsx through App.jsx
26. Pass "counter" props to MemoizedComponent.jsx through App.jsx
27. Receive and use "counter" props in NonMemoizedComponent.jsx
28. Receive and use "counter" props in MemoizedComponent.jsx
29. Show application on trigger "number" increase
30. Show application on trigger "counter" increase
> Add useMemo hook again to MemoizedComponent pass counter as props and test app
31. Add "useMemo" again to MemoizedComponent.jsx
32. Receive and use "counter" props in NonMemoizedComponent.jsx
33. Receive and use "counter" props in MemoizedComponent.jsx
34. Comment: "useMemo hook won't be useless but it will have much more specific usage"
35. Comment: "React Compiler also is applicable, in the same way, for custom hooks"

## Opportunities (back to slides)

### Optimization: Usage performance improvement with minor upgrade risks
* PROS
    * Easy to control which components use the Compiler
    * Performance gain at application start up and use
    * Code looks easier to read
* CONS
    * Bigger build times
        * How big? We don't know for sure.
    * Must remove previous non-strategic useMemo invocations

### Breath of fresh air: a bright looking future
* React was made popular due to its friendliness
    * Hooks was a game changer
    * React 16 to 18 have been "okay"
* React 19 was really good
    * Stable server components
    * useOptimistic
    * useTransitions on async functions
* React Compiler is a continuation that opens a lot of possibilities
    * Double major releases: React and React Compiler
    * Under the hood optimization
        * Smoother React for vanilla and meta-framework projects
    * Better developer experience
        * Less or no useMemo "spam"
