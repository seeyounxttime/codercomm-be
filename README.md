# CoderComm Backend

A demo application for teaching the FTW course at CoderSchool.

## Get Started

- Create `/.env`:

```
PORT=5000
MONGODB_URI='replace_this_with_your_mongodb_uri'
JWT_SECRET_KEY="replace_this_with_a_secret_key_for_jwt_auth"
```

- Run `npm run dev`

## Deployment Guide (for CoderSchool Internal)

This application is deployed on Google App Engine, under the coderschool-platform project, using our Google Cloud account. The DB is deployed to MongoDB Atlas.

Some background reading on how to deploy: https://cloud.google.com/appengine/docs/standard/nodejs/building-app/deploying-web-service. Follow the instructions to install gcloud and upload.

Note that app.yaml, while generally safe to have in source control, has been `.gitignore`d to avoid confusing our learners. It should just be two lines:

```
runtime: nodejs16
service: codercomm-be
```

To deploy a new version, it should just be: `gcloud app deploy ./app.yaml`. 
