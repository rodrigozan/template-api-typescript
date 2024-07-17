import { App } from "./app";

// Set the port number to either the value of process.env.PORT or 4000
const PORT = process.env.PORT || 4000;

// Create a new instance of the App class and start the server
new App().server.listen(PORT, () => console.log(`Server running on port ${PORT}`));