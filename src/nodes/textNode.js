import { useState, useMemo } from 'react';
import { Handle, Position } from 'reactflow';
import { BaseNode } from './BaseNode';

export const TextNode = ({ id, data }) => {
  const [currText, setCurrText] = useState(
    data?.text || '{{input}}'
  );

  const variables = useMemo(() => {
    const matches = [
      ...currText.matchAll(/{{\s*([a-zA-Z_$][a-zA-Z0-9_$]*)\s*}}/g),
    ];

    return [...new Set(matches.map(match => match[1]))];
  }, [currText]);

  const handles = [
    {
      type: 'source',
      position: Position.Right,
      id: `${id}-output`,
    },

    ...variables.map((variable, index) => ({
      type: 'target',
      position: Position.Left,
      id: `${id}-${variable}`,
      style: {
        top: `${30 + index * 20}px`,
      },
    })),
  ];

  return (
    <BaseNode
      title="Text"
      height={Math.max(150, 120 + variables.length * 20)}
      handles={handles}
    >
      <label>Text:</label>

      <br />

      <textarea
        value={currText}
        onChange={(e) => setCurrText(e.target.value)}
        rows={5}
        style={{
          width: '95%',
          resize: 'none',
        }}
      />

      <div style={{ marginTop: '8px', fontSize: '12px' }}>
        Variables:
        {variables.length > 0
          ? ` ${variables.join(', ')}`
          : ' None'}
      </div>
    </BaseNode>
  );
};