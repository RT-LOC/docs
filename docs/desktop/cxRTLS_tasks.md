# Tasks
The tasks offer a way to send commands and settings to any of the nodes. 
Tasks can be sent to individual nodes are multiple at once. 

## How to send a task

## Instant Tasks
Instant tasks are built as `Fire-and-Forget` tasks. They are sent only once, also if the task remains unacknowledged.
This is the fastest way to send some commands to the nodes.

## Task Queue
Sometimes there is the need for more persistant tasks. These can be sent via the `Task Queue`.
This is a FIFO-stack of tasks that can grow until a certain limit. 
Tasks can remain unprocessed for a longer time (the node can for example be temporarily switched off or out of range). Until they are processed and acknowledged, they can remain in the queue.

## Task History
In the Task History screen you can see the status of all sent tasks.
This screen shows you whether or not the tasks have been acknowledged and if so by whom. 
...



## List of Tasks
