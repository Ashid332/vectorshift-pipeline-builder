import { useStore } from './store';

export const SubmitButton = () => {
  const nodes = useStore((state) => state.nodes);
  const edges = useStore((state) => state.edges);

  const handleSubmit = async () => {
    console.log("NODES:", nodes);
    console.log("EDGES:", edges);

    try {
      const response = await fetch(
        'http://localhost:8000/pipelines/parse',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            nodes,
            edges,
          }),
        }
      );

      const result = await response.json();

      alert(
        `Nodes: ${result.num_nodes}\n` +
        `Edges: ${result.num_edges}\n` +
        `Is DAG: ${result.is_dag}`
      );
    } catch (error) {
      console.error(error);
      alert('Failed to connect to backend');
    }
  };

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        marginTop: '20px',
      }}
    >
      <button onClick={handleSubmit}>
        Submit
      </button>
    </div>
  );
};