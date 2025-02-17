import type { MDXComponents } from "mdx/types";
import CodeBlock from "./components/code-block";

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    h1: (props) => <h1 {...props} className="mb-4 text-4xl font-bold" />,
    p: (props) => <p {...props} className="mb-4" />,
    pre: (props) => <pre {...props} />,
    ul: (props) => <ul {...props} className="list-disc ps-8 mb-4" />,
    a: (props) => <a {...props} className="underline" />,
    code: (props) => <code {...props} className="rounded-0" />,
    CodeBlock: (props) => <CodeBlock {...props} />,
    ...components,
  };
}
