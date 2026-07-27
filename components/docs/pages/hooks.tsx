"use client";

import { CodeBlock } from "@/components/docs/shared/CodeBlock";

const HOOKS = [
  {
    name: "useState",
    desc: "Enhanced version of React's useState with reset() and get() methods. Returns a named object with set/get/reset instead of a tuple. The get() method reads the current value without creating a re-render dependency.",
    code: `<span class="keyword">const</span> count = <span class="component">useState</span>(<span class="string">0</span>);
count.set(<span class="string">1</span>);               <span class="comment">// set value</span>
count.set(prev =&gt; prev + <span class="string">1</span>); <span class="comment">// updater function</span>
count.get();                <span class="comment">// read without re-render dependency</span>
count.reset();              <span class="comment">// back to 0</span>`,
  },
  {
    name: "useStateLazy",
    desc: "Lazy-initialization variant. The initializer function only runs on first render, avoiding expensive computations on every re-render.",
    code: `<span class="keyword">const</span> state = <span class="component">useStateLazy</span>(() =&gt; expensiveCompute());`,
  },
  {
    name: "useRef",
    desc: "Enhanced useRef with setValue, getValue, and isSet methods. Direct .current assignment is not supported — use setValue() for controlled ref access.",
    code: `<span class="keyword">const</span> inputRef = <span class="component">useRef</span>&lt;HTMLInputElement&gt;(<span class="string">null</span>);
inputRef.setValue(document.getElementById(<span class="string">"my-input"</span>));
inputRef.getValue();  <span class="comment">// HTMLElement | null</span>
inputRef.isSet();     <span class="comment">// true</span>`,
  },
  {
    name: "usePreviousValue",
    desc: "Convenience wrapper around useRef for tracking the previous value of any variable. Returns the value from the previous render.",
    code: `<span class="keyword">const</span> prev = <span class="component">usePreviousValue</span>(initialValue);`,
  },
  {
    name: "useEffect variants",
    desc: "Four specialized effect hooks: useMountEffect (runs once on mount), useUpdateEffect (skips first render), usePreviousEffect (tracks previous deps), and useDebounceEffect (debounced execution with configurable delay).",
    code: `<span class="component">useMountEffect</span>(() =&gt; {
  init();
  <span class="keyword">return</span> () =&gt; cleanup();
}, []);

<span class="component">useDebounceEffect</span>(
  () =&gt; { fetchData(query); },
  <span class="string">300</span>,
  [query]
);`,
  },
  {
    name: "useCallback / useMemo",
    desc: "When the dependency array is omitted, defaults to [] (empty array) — this differs from React where omitting deps means 'every render'. This prevents accidental performance issues.",
    code: `<span class="keyword">const</span> fn = <span class="component">useCallback</span>(() =&gt; doSomething(), deps?);
<span class="keyword">const</span> value = <span class="component">useMemo</span>(() =&gt; computeExpensive(), deps?);`,
  },
  {
    name: "useMemoOnce",
    desc: "Memoizes a value that never recalculates after the initial call. Use for constants, static configurations, or expensive one-time computations.",
    code: `<span class="keyword">const</span> CONSTANT = <span class="component">useMemoOnce</span>(() =&gt; ({ <span class="prop">key</span>: <span class="string">"value"</span> }));`,
  },
  {
    name: "useStableCallback",
    desc: "Returns a permanently stable callback reference that never changes across renders. The returned function always calls the latest version of your callback, but its identity is stable — preventing unnecessary effect re-runs.",
    code: `<span class="keyword">const</span> stableFn = <span class="component">useStableCallback</span>((data) =&gt; {
  console.log(data);
});`,
  },
  {
    name: "createStore",
    desc: "Creates a vanilla JS store with no React dependency. Compatible with useSyncExternalStore for automatic reactivity. Supports getState, setState, and subscribe methods.",
    code: `<span class="keyword">const</span> store = <span class="component">createStore</span>({ <span class="prop">count</span>: <span class="string">0</span> });
store.getState();     <span class="comment">// { count: 0 }</span>
store.setState({ <span class="prop">count</span>: <span class="string">1</span> });
store.subscribe(listener);`,
  },
  {
    name: "useStore / useSetState",
    desc: "Hook that subscribes to a Store and re-renders when state changes. useSetState returns a stable setState callback bound to the given store — no context needed.",
    code: `<span class="keyword">const</span> { count } = <span class="component">useStore</span>(counterStore);
<span class="keyword">const</span> setCount = <span class="component">useSetState</span>(counterStore);
setCount({ <span class="prop">count</span>: <span class="string">1</span> });
setCount(prev =&gt; ({ <span class="prop">count</span>: prev.count + <span class="string">1</span> }));`,
  },
  {
    name: "useInstance",
    desc: "Creates or retrieves a named component instance in a global registry. Auto-registers on mount, auto-deletes on unmount. Enables cross-component data sharing without prop drilling or context providers.",
    code: `<span class="keyword">const</span> instance = <span class="component">useInstance</span>(<span class="string">"sidebar"</span>);
instance.setData(<span class="string">"width"</span>, <span class="string">280</span>);
instance.getData&lt;number&gt;(<span class="string">"width"</span>);`,
  },
  {
    name: "useComponentData",
    desc: "Read-only accessor to another component's useInstance data. Does not re-render when source data changes — use for one-time reads or manual subscription.",
    code: `<span class="keyword">const</span> width = <span class="component">useComponentData</span>&lt;number&gt;(<span class="string">"sidebar"</span>, <span class="string">"width"</span>);`,
  },
];

export function HooksPage() {
  return (
    <div className="max-w-4xl">
      <div className="animate-slide-up">
        <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight mb-3">Hooks Reference</h1>
        <p className="text-text-secondary text-sm sm:text-base leading-relaxed max-w-xl mb-3">
          Enhanced versions of React&apos;s core hooks plus{" "}
          <span className="highlight-green">lightweight stores</span> and{" "}
          <span className="highlight-cyan">cross-component data primitives</span> for
          building complex, well-structured applications.
        </p>
        <p className="text-text-secondary text-sm">
          Import from{" "}
          <code className="text-primary-light text-xs font-mono bg-primary/8 px-1.5 py-0.5 rounded">
            elk-components
          </code>
        </p>
      </div>

      <div className="my-8 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />

      <div className="space-y-5 animate-slide-up" style={{ animationDelay: "100ms" }}>
        {HOOKS.map((h) => (
          <div key={h.name} className="feature-card">
            <h3 className="text-base font-bold mb-2 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-primary shrink-0" />
              <code className="text-primary-light font-mono text-sm">{h.name}</code>
            </h3>
            <p className="text-text-secondary text-sm mb-4 leading-relaxed">{h.desc}</p>
            <CodeBlock>{h.code}</CodeBlock>
          </div>
        ))}
      </div>
    </div>
  );
}
