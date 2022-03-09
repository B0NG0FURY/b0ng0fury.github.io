const projects = [
    {
        name: "Trivia Time",
        about: "Trivia app built with a React frontend and Rails backend. A postgreSQL database holds the data. Allows the user to create custom games based on the category and number of questions of their choosing.",
        img: "/trivia-time.png", 
        demo: "https://drive.google.com/file/d/1f5USsq7zOqadGm6V_VYepPUtfpc35E_k/view",
        github: "https://github.com/B0NG0FURY/trivia-time"
    },
    {
        name: "Top Five",
        about: "List app giving user ability to make simple ranked lists and categorize them. Lists can be easily edited, filtered by category, and item ranks quickly and dynamically changed. Uses a pure JavaScript frontend and a Rails API backend to save the user's lists to a postgreSQL database.",
        img: "/top-five.png",
        demo: "https://drive.google.com/file/d/1ULwBVoa0-CAlTt2rZW4ONtAnn-jUZfm6/view",
        github: "https://github.com/B0NG0FURY/top-five"
    },
    {
        name: "Beer Enthusiast",
        about: "Beer Enthusiast is a full stack application built with Rails that allows the user to explore beers, find information, and read reviews from those who have tried them. The user can also rate beers and keep track of what they have liked and what they didn't. Application uses a MVC structure, omniauth sign in capability with Google, and sqlite database.",
        img: "/beer-enthusiast-main.png",
        demo: "https://drive.google.com/file/d/1_WXM-vchO-PS27p_vsi5p3eG6cxeZjjx/view",
        github: "https://github.com/B0NG0FURY/beer_enthusiast"
    },
    {
        name: "Movie Collection Database",
        about: "Application built with Sinatra to catalog the user's personal movie collection. Movie's can be categorized and viewed by title, director, genre, and format. Features a sqlite database to store the user's collection. Bcrypt and sessions handle authentication for sign up and login.",
        img: "/movie-app.png",
        demo: "https://drive.google.com/file/d/1M-Ise8Qp_8wf_oFlV09f08J7QGhYOmcN/view?usp=sharing",
        github: "https://github.com/B0NG0FURY/movie_collection"
    }
];

export default projects;