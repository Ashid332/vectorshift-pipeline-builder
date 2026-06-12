import { Position } from 'reactflow';
import { BaseNode } from './BaseNode';

export const EmailNode= ({ id }) => {
return (
<BaseNode
title="Email"
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
> <span>Send Email</span> </BaseNode>
);
};
