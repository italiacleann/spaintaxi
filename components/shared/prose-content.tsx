export function ProseContent({ html }: { html: string }) {
  return <div className="site-prose prose prose-lg max-w-none" dangerouslySetInnerHTML={{ __html: html }} />;
}
