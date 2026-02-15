import { cn } from "@/lib/utils";

interface CodeBlockProps {
  code: string;
  language?: string;
  className?: string;
}

export function CodeBlock({ code, language = "javascript", className }: CodeBlockProps) {
  // Simple syntax highlighting for demo
  const highlightCode = (code: string) => {
    return code
      .replace(/(\/\/.+)/g, '<span class="text-muted-foreground">$1</span>')
      .replace(/('.*?'|".*?")/g, '<span class="text-emerald-600 dark:text-emerald-400">$1</span>')
      .replace(/\b(import|from|const|await|async|console)\b/g, '<span class="text-violet-600 dark:text-violet-400">$1</span>')
      .replace(/\b(true|false|null|undefined)\b/g, '<span class="text-amber-600 dark:text-amber-400">$1</span>')
      .replace(/\b(\d+)\b/g, '<span class="text-amber-600 dark:text-amber-400">$1</span>');
  };

  return (
    <div className={cn("relative", className)}>
      <pre className="bg-muted rounded-lg p-5 overflow-x-auto border border-border">
        <code
          className="font-mono text-code text-foreground"
          dangerouslySetInnerHTML={{ __html: highlightCode(code) }}
        />
      </pre>
    </div>
  );
}
