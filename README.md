# Demo ØMQ library Node bindings

Demonstration of:

  * [ØMQ](http://zeromq.org/) distributed messaging
  * [Node.js bindings to the ØMQ library](https://github.com/zeromq/zeromq.js/)


## Setup

Install:

```sh
npm install zeromq
```


## Run "push and pull"

To run the demo that shows push and pull:

```sh
cd examples/push_and_pull
```

Run this in one shell:

```sh
node pusher.js
```

Run this in another shell:

```sh
node puller.js
```


## Run "publish and subscribe"

To run the demo that shows publish and subscribe:

```sh
cd examples/publish_and_subscribe
```

Run this in one shell:

```sh
node publisher.js
```

Run this in another shell:

```sh
node subscriber.js
```

