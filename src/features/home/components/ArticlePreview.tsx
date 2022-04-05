import React from 'react';
import ArticleMeta from './ArticleMeta';

const ArticlePreview = () => {
  return (
    <div className="article-preview">
      <ArticleMeta />
      
      <a href="post.html" className="preview-link">
        <h1>The song you won't ever stop singing. No matter how hard you try.</h1>
        <p>
          In my demo, the holy grail layout is nested inside a document, so there's no body or main
          tags like shown above. Regardless, we're interested in the className names and the
          appearance of sections in the markup as opposed to the actual elements themselves. In
          particular, take note of the modifier classNamees used on the two sidebars, and the
          trivial order in which they appear in the markup. Let's break this down to paint a clear
          picture of what's happening...
        </p>
        <span>Read more...</span>
      </a>
    </div>
  );
};

export default ArticlePreview;
