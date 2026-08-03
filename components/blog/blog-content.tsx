export function BlogContent({ html }: { html: string }) {
  return <div className="blog-prose prose prose-lg max-w-none" dangerouslySetInnerHTML={{ __html: html }} />;
}
