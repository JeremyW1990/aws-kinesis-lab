# aws-kinesis-lab

The client from work raises a request to catch users' behaviors on the webpage, send these big data to the Business Intelligence team.

Those data will give visual insight about the efficiency of web layout/design, promotion activity ...

Let the client give a quick response to the market.

____

This lab aims to catch users' actions on the webpage.
Users' action information includes button click, page/route navigation, viewpoint staying time, etc.


The architecture solution will be iterating.

Hopefully, it will eventually envolves to a full stable/scalable solution that can be found on AWS documents.

For practice purposes, I will start with something very simple.

___

1/27/2020
V1:

Architecture : React-frontend   ------------->   kinesis-stream 

Goal: React app log some button-click event to Kinesis-stream


