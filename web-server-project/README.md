# Web Server Project

This project sets up a local web server to serve a portfolio website. It uses Node.js and Express to handle incoming requests and serve static files.

## Project Structure

```
web-server-project
├── public
│   └── index.html       # HTML structure of the website
├── src
│   └── server.js        # Node.js server setup
├── package.json         # npm configuration and dependencies
└── README.md            # Project documentation
```

## Getting Started

To set up and run the web server, follow these steps:

1. **Clone the repository** (if applicable):
   ```bash
   git clone <repository-url>
   cd web-server-project
   ```

2. **Install dependencies**:
   Make sure you have Node.js installed. Then run:
   ```bash
   npm install
   ```

3. **Run the server**:
   Start the server using the following command:
   ```bash
   node src/server.js
   ```

4. **Access the website**:
   Open your web browser and navigate to `http://localhost:3000` to view the portfolio website.

## Dependencies

This project uses the following npm packages:
- `express`: A web framework for Node.js to handle routing and serving static files.

## License

This project is licensed under the MIT License.