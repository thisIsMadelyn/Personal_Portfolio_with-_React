const detailedCaseStudies = {
    // Use the Project ID (1, 2, 3, etc.) as the key
    1: {
        // This is the case study content for Project ID 1 (E-Commerce Lite REST API)
        challenge: "The primary goal was to design a scalable RESTful API " +
            "using Spring Booot 3 and MySQL that could " +
            "guarantee secure connection between the endpoints and the inventory. ",
        solution: "The backend was structured fllowing the established " +
            "Controller -> Service -> Repository patten, with Entity models " +
            "for database persistance. This enforced strict separation " +
            "of concerns and testability. to manage data transfer and decouple " +
            "the API layer from the domain model, DTOs (Data Tranfser Objects)" +
            " were implemented for all request and response payloads. " +
            "Transactional consistency was guaranteed by utilizing " +
            "@Transactional annotations on the service layer methods," +
            "ensuring that any failure (such as low inventory signaled by " +
            "custom exceptions) automatically triggered a complete database rollback.",
        results: [
            "Validated API functionality and stability through comprehensive Postman " +
            "HTTP integration tests, confirming correct status codes and accurate " +
            "JSON responses across all endpoints.",
            "Achieved low-latency performance.",
            "Achieved successful user authentication.",
            "The project successfully highlighted the robustness " +
            "of Spring Boot's declarative transaction management."
        ]
    },
    // Add another object for your next project (e.g., Project ID 2)
    2: {
        // This is the case study content for Project ID 2 (Your next project)
        challenge: "The goal was to render complex, high-resolution data visualizations efficiently on a client-side React application without server-side rendering.",
        solution: "Implemented D3.js bindings inside React Hooks and utilized React.memo to optimize rendering performance, reducing redraw time by 40%.",
        results: [
            "Reduced component re-render time by 40%.",
            "Created 8 unique interactive charts (line, bar, scatter).",
            "Successfully integrated data from a PostgreSQL database via a Flask API."
        ]
    }
    // for every project...
};

export default detailedCaseStudies;