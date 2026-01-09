import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import {
  atomDark,
  oneLight,
} from "react-syntax-highlighter/dist/esm/styles/prism";
import { useTheme } from "../ThemeSwitch/ThemeProvider";

const CodeBlock = ({ code }: { code: string }) => {
  const { theme } = useTheme();
  return (
    <div className="w-full max-w-[700px] dark:bg-[#0d1117] light:bg-[#f5f5f5] rounded-xl border dark:border-cyan-500/30 light:border-blue-700/40 shadow-lg shadow-cyan-500/10 overflow-hidden mx-auto">
      {/* Top bar (kept as is) */}
      <div className="flex items-center gap-2 px-3 md:px-4 py-2 md:py-3 dark:bg-[#0b0e12] light:bg-[#f5f5f5] border-b border-white/5">
        <span className="w-3 h-3 rounded-full bg-red-500" />
        <span className="w-3 h-3 rounded-full bg-yellow-500" />
        <span className="w-3 h-3 rounded-full bg-green-500" />
        <span className="ml-auto text-xs text-gray-400 font-mono">
          developer.js
        </span>
      </div>

      <SyntaxHighlighter
        key={theme}
        // 1. Language: Specify the language for correct highlighting (e.g., 'javascript', 'typescript')
        language="javascript"
        // 2. Style: Apply the imported theme
        style={theme === "dark" ? atomDark : oneLight}
        // 3. Custom Style: Apply Tailwind/custom styles to override defaults, e.g., padding/font size
        customStyle={{
          padding: "0.875rem", // Slightly reduced padding for mobile
          margin: 0,
          fontSize: theme === "dark" ? "0.9rem" : "0.8rem", // ~13px - responsive via media queries would be better but this works
          lineHeight: "1.375rem",
          backgroundColor: "transparent",
          overflowX: "auto",
          wordBreak: "break-word",
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
