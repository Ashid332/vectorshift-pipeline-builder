import { Handle } from 'reactflow';

export const BaseNode = ({
  title,
  children,
  handles = [],
  width = 200,
  height = 120,
}) => {
  return (
    <div
      style={{
        width,
        height,
        border: '3px solid red',
        borderRadius: '8px',
        padding: '10px',
        background: 'white',
        position: 'relative',
      }}
    >
      {handles.map((handle) => (
        <Handle
          key={handle.id}
          type={handle.type}
          position={handle.position}
          id={handle.id}
          style={{
            width: 12,
            height: 12,
            background: 'blue',
            ...handle.style,
          }}
        />
      ))}

      <div
        style={{
          marginBottom: '10px',
          fontWeight: 'bold',
        }}
      >
        {title}
      </div>

      <div>{children}</div>
    </div>
  );
};