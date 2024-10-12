# CubeMart
A mock e-commerce site built using Node, Express, and ??MongoDB??. This project was created over two weeks in October 2024.

## Why I made CubeMart
I made this project to practice and learn after taking time off from front-end development. Since my time away, I became interested in video editing, which led me to start learning Blender. I wanted to incorporate the new platforms I've been learning with the ones that I have experience in to create someting fun that shows off my core skills and pushes me outside of my front-end comfort zone.

### Process
The process for creating CubeMart wasn't 
1. Planning
  - 

### What I Learned from this project

#### Blender
- General lighting
- Area lighting for products
- More about PBR textures

#### Node
- Basic authentication with JWT
- Introduction to SQLite via Sequelize
- Migrating from MongoDB/Mongoose to SQLite/Sequelize
- Introduction to database seeding with faker.js (both mongodb and sqlite)

#### Front End
- Product image optimization

### TODO Dev
- ~~create initial db seed (random is fine for now)~~
- ~~decide on templating engine~~
- ~~migrate models and db code from mongodb/mongoose to sqlite/sequelize~~
- ~~better error handling in server.js, test non-404 errors~~
- add 'reviewer' role to users after a single purchase
- banner/advert for low-stock items (2-10)

### TODO Cleanup
- hamburger thick verts with 1-2px border radius - sharp, subtle drop shadows
- incorporate very sharp, subtle drop shadows in the UI to feel more cubey
- global/shared validation: sequelize models, BE <-> FE user inputs, FE form input error messages  (typescript?)
- product slugs for URLs
- set up email functionality: verify, password reset,  (mailtrap via nodemailer)
- create JSON files for live DB seed (and update seed file)
  - include correct product items
