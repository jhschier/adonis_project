# Adonis_Project

Adonis_Project is a backend project built using the AdonisJS framework with TypeScript. The project is designed to facilitate the Model-View-Controller (MVC) structure and handle HTTP requests. The application leverages Postman for testing and employs SQLite as the database to store information created through the HTTP POST method. This includes the creation of a unique ID generated using UUID v4 and a "Moment" entity.

## Features

1. **Moment Creation:**
   - Endpoint: `/{{URL}}/moments`
   - Method: `POST`
   - Creates a new "Moment" with the ability to include a comment and upload a photograph.

2. **Get a Moment:**
   - Endpoint: `/{{URL}}/moments/:id`
   - Method: `GET`
   - Retrieves details of a specific "Moment" using its ID.

3. **Get All Moments:**
   - Endpoint: `/{{URL}}/moments`
   - Method: `GET`
   - Retrieves details of all "Moments."

4. **Delete a Moment:**
   - Endpoint: `/{{URL}}/moments/:id`
   - Method: `DELETE`
   - Deletes a specific "Moment" using its ID.

5. **Update a Moment:**
   - Endpoint: `/{{URL}}/moments/:id`
   - Method: `PUT`
   - Updates details of a specific "Moment" using its ID.

6. **Create a Comment:**
   - Endpoint: `/{{URL}}/moments/:momentId/comments`
   - Method: `POST`
   - Creates a new comment for a specific "Moment" using its ID.

7. **Delete a Comment:**
   - Endpoint: `/{{URL}}/moments/:momentId/comments/:commentId`
   - Method: `DELETE`
   - Deletes a specific comment for a specific "Moment" using both the "Moment" ID and comment ID.

## Technologies Used

- **AdonisJS:** A Node.js web framework that provides a solid foundation for building robust web applications.
- **TypeScript:** A superset of JavaScript that adds static typing and other features to the language.
- **SQLite:** A lightweight, file-based database management system used for storing data.

## Testing

Postman was utilized for testing the functionality of the HTTP requests. The collection of tests can be found in the `/tests` directory.

## Front-end Integration

The backend project is designed to work seamlessly with a front-end project named Moments, a social media created using Angular.
