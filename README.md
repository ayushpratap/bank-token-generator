
# Bank-token-generator

  

This project provides you HTTP based API which lets you add customers to the bank, provided them a unique linearly incrementing token, and adds those customers to the counter queue, which will be served according to the priority of the customers. Privileged customers will be served as soon as possible, with minimum wait time.

### Prerequisites
This project requires the following to run, make sure all of the following components are installed before moving forward.
```
NodeJs		-	To run the application
npm			- 	To manage packages
MongoDB 	- 	Database
Robot3T		-	GUI to look into the database
```
### Installing
A step by step installation process.

Clone the repository
```
git clone https://github.com/ayushpratap/bank-token-generator.git
```
Go inside the bank-token-generator directory
```
cd bank-token-generator
```
Rename file ```.env.example``` to ```.env```

Install the required packages
```
npm install
```
## Getting Started

To start the service run ``` node server.js``` , this will start an HTTP server which will be listening at http://localhost:9001

This project provides 2 API endpoints currently. For information about these, go to http://localhost:9001/api/v1/docs/

To add a customer to the queue. Make a POST request with customer payload in the body.

```
curl -X POST "http://localhost:9001/api/v1/customer" -H "accept: application/json" -H "Content-Type: application/json" -d "{ \"name\": \"Ayush\", \"type\": 1, \"action\": \"Deposite\"}"
```
To serve the customer at the counter, make a POST request without any data in the body.
```
curl -X POST "http://localhost:9001/api/v1/counter" -H "accept: application/json" -H "Content-Type: application/json"
```
Whenever we server a customer at counter, it saved inside ```tokens``` collection inside ```bank``` database.

**note: only two routes are available ```/api/v1/customer``` and ```/api/v1/counter``` any other route will only return an error at this time**

## Business logic
* When a customer walks in the branch, he will be granted a unique token number. 
* The customer can be privileged or non-privileged.
* If the customer is privileged, he will serve as soon as possible, regardless of his token number ( when compared to nonprivileged)
* If the customer is nonprivileged, he will have to wait till any privileged customer is being served.
* As soon as the counter serves a customer, the customer details are added to the database with the information when the user entered the branch and when he is served, alongside other information.
### Data Structure used
_**I implemented a priority queue using an array as the container. This implementation lets me add customers to the queue according to the priority as well as token number (if priority is same).**_
## Authors
*  **Ayush Pratap Singh** - ayushs56@gmail.com

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

## Important API endpoints
*	/api/v1/docs/ - For API documentation
*	/api/v1/customer/ -  To add the customer
*	/api/v1/counter - To server the customer

## TODO
*	Add Redis support
*	Add support to add counters
*	Add support get current queue status
