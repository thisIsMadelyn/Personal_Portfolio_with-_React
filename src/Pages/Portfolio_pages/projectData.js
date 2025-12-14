import eCommerceLite from '../../assets/project_pics/e_commerce_lite.png';

const myProjects = [{
    id: 1,
    title: "E Commerce Lite REST API",
    description: "E-Commerce Lite is a simplified online " +
        "store backend API built with Spring Boot. It provides core " +
        "e-commerce functionality including user management, product catalog, " +
        "and order processing with inventory management.",

    // CORRECT: Assign the imported variable directly (no curly braces)
    imageUrl: eCommerceLite,
    techStack: ["Java", "Spring Boot", "MySQL", "Maven", "PostMan"],
    detailsLink: "/projects/ecommerce-lite",
    liveDemoLink: null,
    githubLink: "https://github.com/thisIsMadelyn/E-commerce-Lite"
}];

export default myProjects;