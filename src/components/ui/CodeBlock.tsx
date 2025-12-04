import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
// Import a style/theme. 'dracula' is a popular dark theme similar to VSCode.
// You can browse other styles in the library's documentation.
import { atomDark } from "react-syntax-highlighter/dist/esm/styles/prism";

const CodeBlock = ({ code }: { code: string }) => {
  return (
    // You can remove or simplify some of the Tailwind classes from the outer div
    // depending on the theme you choose, but I'll keep your styling for the wrapper.
    <div className="w-[700px] bg-[#0d1117] rounded-xl border border-cyan-500/30 shadow-lg shadow-cyan-500/10 overflow-hidden">
      {/* Top bar (kept as is) */}
      <div className="flex items-center gap-2 px-4 py-3 bg-[#0b0e12] border-b border-white/5">
        <span className="w-3 h-3 rounded-full bg-red-500" />
        <span className="w-3 h-3 rounded-full bg-yellow-500" />
        <span className="w-3 h-3 rounded-full bg-green-500" />
        <span className="ml-auto text-xs text-gray-400 font-mono">
          developer.js
        </span>
      </div>

      <SyntaxHighlighter
        // 1. Language: Specify the language for correct highlighting (e.g., 'javascript', 'typescript')
        language="javascript"
        // 2. Style: Apply the imported theme
        style={atomDark}
        // 3. Custom Style: Apply Tailwind/custom styles to override defaults, e.g., padding/font size
        customStyle={{
          padding: "1.25rem", // p-5
          margin: 0,
          fontSize: "0.875rem", // text-sm
          lineHeight: "1.5rem", // leading-6
          backgroundColor: "transparent",
          // The background color from the theme will likely override your wrapper's background.
          // If you want to use the wrapper's background, you may need to set backgroundColor to 'transparent'
          // and adjust the theme slightly, but it's usually best to let the theme handle the colors.
        }}
        // 4. Show Line Numbers (Optional)
        showLineNumbers={false}

        // 5. Code: The content to highlight
      >
        {code}
      </SyntaxHighlighter>
    </div>
  );
};

export default CodeBlock;
