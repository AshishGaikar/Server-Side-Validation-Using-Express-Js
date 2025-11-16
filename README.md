# Server-side Validation Demo

Express.js application showcasing how to handle robust server-side validation with `express-validator`. The app renders an accessible registration form, performs validation on submit, and returns helpful errors back into the UI.

## Features
- Server-side validation rules for fields like `fullName`, `email`, `password`, `confirmPassword`, `age`, and `terms`.
- Re-renders the form with original user input and specific validation messages.
- User-friendly success and error states with polished UI styling.
- Production-ready structure using `express` with `ejs` templates and static assets.

## Project Structure
```
.
├── app.js             # Express server and validation logic
├── views/             # EJS templates (form, success, error)
├── public/            # Static assets (CSS)
├── package.json
└── README.md
```

## Validation Rules
| Field            | Rule(s)                                                                 |
| ---------------- | ------------------------------------------------------------------------ |
| `fullName`       | Required, minimum 3 characters                                           |
| `email`          | Required, must be a valid email                                          |
| `password`       | Required, minimum 6 characters                                           |
| `confirmPassword`| Must match `password`                                                    |
| `age`            | Optional, if present must be an integer between 18 and 120               |
| `terms`          | Must be checked to proceed                                               |

All rules are defined in `registrationValidationRules` inside `app.js` and use `express-validator` to create a declarative pipeline.

## Getting Started
### Prerequisites
- Node.js 18+ installed locally.

### Installation
```bash
npm install
```

### Develop
Hot-reload using nodemon:
```bash
npm run dev
```

### Production
Run a production build of the server:
```bash
npm start
```
Then open `http://localhost:3000` in your browser.

## Deployment

### Deploying to Render

This project is configured for easy deployment on [Render.com](https://render.com).

#### Option 1: Using render.yaml (Recommended)
1. Push your code to GitHub/GitLab/Bitbucket
2. Connect your repository to Render
3. Render will automatically detect `render.yaml` and deploy your service
4. Your app will be live at `https://your-app-name.onrender.com`

#### Option 2: Manual Setup
1. Create a new **Web Service** on Render
2. Connect your Git repository
3. Use these settings:
   - **Build Command:** `npm install`
   - **Start Command:** `npm start`
   - **Environment:** Node
4. Render automatically sets the `PORT` environment variable

#### Environment Variables
- `PORT`: Automatically set by Render (defaults to 3000 if not set)
- `NODE_ENV`: Set to `production` in production environment

#### Docker Deployment (Optional)
If you prefer containerized deployment, Render also supports Docker:
- The included `Dockerfile` is ready to use
- Render will automatically detect and use it

### Other Platforms
For other platforms (Railway, Heroku, etc.):
- Set the environment variable `PORT` to the port your hosting provider exposes
- Install dependencies with `npm install`
- Start the app via `npm start`
- Static assets in `public/` and EJS templates in `views/` are served automatically by Express.

## Next Steps
- Persist submissions to a database.
- Add integration tests covering validation flow with `supertest`.
- Enhance client-side hints while keeping server-side validation as the source of truth.

