create TABLE person (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255),
    email VARCHAR(255)
);

create TABLE projects (
    id SERIAL PRIMARY KEY,
    title VARCHAR(255),
    skills VARCHAR(255),
    img VARCHAR(255),
    linkTo VARCHAR(255),
    frontEndRepo VARCHAR(255),
    backEndRepo VARCHAR(255),
    filter VARCHAR(255)
);