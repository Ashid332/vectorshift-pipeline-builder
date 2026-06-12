import { Position } from 'reactflow';
import { BaseNode } from './BaseNode';

export const APINode = ({ id }) => {
return (
<BaseNode
title="API"
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
> <span>API Request</span> </BaseNode>
);
};
