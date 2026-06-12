import { Position } from 'reactflow';
import { BaseNode } from './BaseNode';

export const DatabaseNode = ({ id }) => {
return (
<BaseNode
title="Database"
handles={[
{
type: 'target',
position: Position.Left,
id: `${id}-input`,
},
{
type: 'source',
position: Position.Right,
id: `${id}-output`,
},
]}
> <span>Database Query</span> </BaseNode>
);
};
