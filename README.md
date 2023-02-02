## Express.js  with bootstrap5
##### Frontend
- Bootstrap
##### Backend
-  Nodejs
-  Expressjs
-  Nginx
-  Docker
-  Docker-compose
##### Integration Testing.
- cypress

### Run the Devlopment server on localhost.
#### Dependencies
- Nodejs
- nodemon
- browsersync
#### 1. Clone the soure repository.
```bash
https://github.com/micrometre/express.git
```
##### 2. Change to the cloned repository.
```bash
cd express
```
##### 3. Install node dependencies
```bash
npm i
```
```bash
npm run dev
```
Acsess
- website/app via http://localhost:3000
- Browsersync Ui  http://localhost:3001
- website/app via http://localhost:9998
### Run Cypress
#### Test runner used for End-to-End (E2E) and Integration Testing.
##### Run Cypress headlessly
**Step 1**: While the the developmet server is runing open another terminal
```bash
 npm run autotest
```
**Step 2**: out puts video of the test
-  located at cypress/video

##### Run the interactive browser
- not ideal for CI environments.

```bash
 npm run test
```

### Run the Production server in docker
#### 4. Run the Production server in docker

**Step 1**: Clone  repo
```bash
 git clone https://github.com/micrometreuk/express
```

**Step 2**: Move into the directory start the docker containers
```bash
make start
```

Acsess
- website/app via http://localhost:9998

**Step 3**: To uninstall run

```bash
make remove
```
