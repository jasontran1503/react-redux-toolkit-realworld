import React from 'react';

const Tag = ({ tag }: { tag: string }) => {
  return (
    <div style={{ cursor: 'pointer' }} className="tag-pill tag-default">
      {tag}
    </div>
  );
};

export default Tag;
