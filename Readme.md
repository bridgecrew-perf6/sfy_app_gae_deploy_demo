# Shopify app deploying template
-- Can be used to deploy a Koa powered api router using NextJS as the interface engine, and Google Cloud SQL as the database layer onto Google App Engine.

-- This will ideally be helpful for deploying any shopify embeded app, since shopify is so fond of this stack.

Notes for connecting are as follows:

-- Much of the following will be taken from the basic service example on Google's github
plus the tutorial at this page:
    -- https://objectpartners.com/2020/08/11/deploying-nextjs-v9-on-google-app-engine/
    REPO: https://github.com/bradrisse/nextjs-9-gae-demo

-- The biggest change in this repo and the one above is the start script, the above has "next -p 8080 start" in thier script, where (because of the koa api router) we are using "node server.js" for our start script, and specifiying the port in the usual Koa/Express way in that file.

This app has a minimal next configuration, purely enough details to get a demo app up. 

Once a demo app is build and depolyed on a test App Engine, we will connect a cloudSQL instance.

From there we should have everything we need to get the inform app up and running on AE.

## Connecting CloudSQL to App Engine with Next.js
 mostly following this tutorial: https://youtu.be/dURd1aTdJqg
 This demo app is configured to contain the credientials to make this work.
 This video is done in python/flask, but we're modifying to make things work in node/next

FYI: In a terminal environment postgres is picky about quotes, and prefers ''

 Fill in the following parameters to app.yaml.template env_variables
    
    CLOUD_SQL_USERNAME: 
    
    CLOUD_SQL_PASSWORD: 
    
    CLOUD_SQL_DATABASE_NAME: 
    
    CLOUD_SQL_CONNECTION_NAME: 
    
    GOOGLE_APPLICATION_CREDENTIALS:

follow the instructions at: https://cloud.google.com/sql/docs/postgres/connect-external-app#4_if_required_by_your_authentication_method_create_a_service_account
    to create the service account json key file for connecting to DB

dbConnect.js should be able to connect to db once depolyed

There is a readilly available guid to deploying locally using the cloud_sql_proxy scrip provided by Google. Some details here: https://cloud.google.com/sql/docs/postgres/sql-proxy