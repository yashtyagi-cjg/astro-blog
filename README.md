# Astro Blog

This repository hosts my blog writeups, which will be added soon.

## Getting Started

To run this project locally, follow these steps:

1. Clone the repository:
```bash
   git clone <repository-url>
   cd <repository-folder>
```

2. Install dependencies

```bash
  npm install
```

3. Start the local development server
```bash
  npm run dev
```

This will start the server at http://localhost:4321

## CI/CD Pipeline
My CI/CD pipeline uses GitHub Actions to push updates to the registry. Deployment is managed by Watchtower, which automatically updates the running container when a new image is available.

## Hosting
For production deployment, choose a hosting provider from the many available options.
