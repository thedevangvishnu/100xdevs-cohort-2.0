# Serverless backends

## What

- Serverless backends, also known as serverless computing or Function as a Service (FaaS), are a cloud computing model where cloud providers dynamically manage the allocation and provisioning of servers.

- In this model, developers write and deploy code in the form of functions, which are triggered by various events such as HTTP requests, database changes, file uploads, or scheduled tasks.

- These functions run in ephemeral (short-lived or temporary) containers that are spun up on-demand to execute the code, and they automatically scale based on demand.

### Characteristics of serverless backends

- Event-driven: Functions are triggered by events, such as HTTP requests, database changes, file uploads, or scheduled events. This event-driven architecture allows for a decoupled and scalable approach to building applications.

- Auto-scaling: Serverless platforms automatically scale the execution environment up or down based on the number of incoming requests. Developers don't need to worry about managing server resources; the platform handles scaling automatically.

- Pay-per-use pricing: With serverless computing, you only pay for the compute resources used during the execution of functions.

- Stateless: Functions in a serverless environment are stateless, meaning they don't retain any memory of previous invocations. Any required state must be managed externally, typically through services like databases, object storage, or cache services.

- Managed infrastructure: The underlying infrastructure, including servers, networking, and operating systems, is fully managed by the cloud provider.

## Serverless vs Server-based

### Advantages of serverless

- Cost-effectiveness: Serverless architectures typically follow a pay-per-use model, meaning you only pay for the actual compute time your functions use.

- Automatic scaling: Serverless platforms handle scaling automatically based on the number of incoming requests or events. This enables applications to handle sudden spikes in traffic without manual intervention, ensuring optimal performance and availability.

- Reduced operational complexity: With serverless, developers are relieved from managing servers, operating systems, and infrastructure scaling. This reduces operational overhead

- Faster time to market: Serverless architectures enable rapid development and deployment of applications.

- High availability: Serverless platforms are managed by cloud providers, which typically offer high availability and fault tolerance. Functions are distributed across multiple availability zones or data centers, reducing the risk of downtime due to hardware failures or maintenance.

### Disadvantages of serverless

- Cold start problem: When a function is invoked for the first time or after a period of inactivity, there may be a delay (known as a cold start) while the platform initializes the execution environment.

- Vendor lock-in: Serverless architectures are tightly coupled with the underlying cloud provider's services and APIs. Migrating to a different provider or transitioning to a self-managed infrastructure may require significant re-engineering effort.

- Monitoring and debugging complexity: Debugging and monitoring serverless functions can be more challenging compared to traditional server-based architectures. Since functions are ephemeral and stateless, traditional debugging techniques may not apply, and specialized tools may be required.

### Advantages of server-based

- Full control over infrastructure: With server-based architectures, developers have full control over the underlying infrastructure, including servers, networking, and storage.

- Flexibility: Server-based architectures offer greater flexibility in terms of runtime environments, libraries, and dependencies. Developers can choose the operating system, programming languages, and frameworks that best suit their needs.

- Predictable performance: Since resources are dedicated to specific applications or services in server-based architectures, performance is generally more predictable and consistent compared to serverless environments.

- No cold start latency: Unlike serverless architectures, server-based applications do not experience cold start latency since resources are pre-allocated and continuously available.

### Disadvantages of server-based

- Operational overhead: Managing servers, provisioning resources, and handling scalability manually can be time-consuming and require dedicated DevOps teams. This overhead increases as applications scale and grow in complexity.

- Higher costs: Server-based architectures often incur higher costs due to the need to provision and maintain servers, regardless of actual usage. Additionally, scaling infrastructure to handle peak loads may lead to over-provisioning and wasted resources.

- Limited scalability: Scaling server-based architectures requires manual intervention and careful capacity planning. Applications may struggle to handle sudden spikes in traffic without sufficient provisioning of resources.

- Complexity in high availability: Achieving high availability and fault tolerance in server-based architectures requires implementing redundancy, failover mechanisms, and load balancing, which adds complexity to the infrastructure configuration.

## Cloudflare

### Setup and commands

- `npm create cloudflare -- name` : Initializes a cloudflare worker
- `npm run dev` : Starts a development server
- `npx wrangler login` : Login into cloudflare using `wrangler` cli
- `npm run deploy` : Deploy your cloudflare worker

## Hono

### Setup and commands

- `npm create hono@latest my-app` : Initialize a hono app and select provider for your serverless
