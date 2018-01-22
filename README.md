### ReactJS based to-do-list 

- a to do list in react running ExpressJS for fs operations

## How to run
- `yarn install`
- `yarn start`
	- go to `localhost:8081`
- if on create no response better use the bellow approach 	

### if that doesn't work (cuz...windows)
- open a bash/cmd and run `yarn serve` starts webpack-dev-server
- and `yarn start:dev` starts the express server


### you can also run the app through docker
- `docker build -t tasks .`
- `docker run -d -p 127.0.0.1:80:8081 --name tasks tasks`
	- navigate to your VM ip and check it on port 8081


#### Some unit tests based on enzyme, but no focus on them.
- `yarn test`

I would suggets that you check package.json -> scripts object for better understanding on running the app.
