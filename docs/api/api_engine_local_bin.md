# Local Binary Data (TCP & UDP)

Access to real-time data is facilitated through our API. Our desktop application incorporates a UDP and/or TCP server that transmits this data in a binary format for efficient communication.
The transmitted data encompasses various information such as position data, status of tags/anchors, sensor data, among others.

## 1. Connection Protocol

1. Set up data transmission via UDP, TCP, or WebSocket using our desktop application (cxRTLS or cxParser).

2. Establish a connection to your computer/server using the appropriate IP address and port number.

## 2. Data Structure

The data format is a structured binary format designed for efficient transmission and parsing. It consists of a preamble, length, command, version, and other fields depending on the command type.

### Commands

Depending on the command indicated in he preamble, the rest of the message will be decoded as indicated below.

<ApiApp></ApiApp>

> the "GET" commands can be sent to retrieve the corresponding data


## Code examples
Check out basic code examples at [https://github.com/RT-LOC/APIs](https://github.com/RT-LOC/APIs) (C, Python, Javascript)
