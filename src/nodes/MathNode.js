import { Position } from 'reactflow';
import { BaseNode } from './BaseNode';

export const MathNode = ({ id }) => {
return (
<BaseNode
title="Math"
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
> <span>Math Operation</span> </BaseNode>
);
};
