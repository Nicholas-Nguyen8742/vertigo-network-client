# Vertigo Network
<p align="center">
  <a href="https://skillicons.dev">
    <img src="https://user-images.githubusercontent.com/97898047/170509950-e52b60c7-fd65-46f5-8e8f-959bf6a3e8ef.png" />
  </a>
</p>
Drone pilots are becoming more popularized in every realm of industry whether it range from real estate business to insurance claims to even something as small as wedding events. 
The point of this application is to be able to be a platform that is more user centric towards pilots by being able to connect them directly with clients and to grow their own brand and image. 



## Built with: 
### Front-End
[![My Skills](https://skillicons.dev/icons?i=react,js,sass )]([https://skillicons.dev](https://reactjs.org/)(https://developer.mozilla.org/en-US/docs/Web/JavaScript)(https://sass-lang.com/documentation))


### Back-End
[![My Skills](https://skillicons.dev/icons?i=express,mysql,nodejs)](https://skillicons.dev)

## Libaries
* [React-Leaflet](https://react-leaflet.js.org)
* [React-Icons](https://react-icons.github.io/react-icons/)
* [ReactJS-Popup](https://www.npmjs.com/package/reactjs-popup)
* [React-Router-Dom](https://v5.reactrouter.com/web/guides/quick-start)
* [Knex](http://knexjs.org/)
* [JWT](https://jwt.io/)
* [bcryptJS](https://www.npmjs.com/package/bcryptjs)

## Database Entity-Relationship-Diagram
![Database ER diagram (crow's foot)](https://user-images.githubusercontent.com/97898047/170516798-7666691c-ef78-44b1-a84a-2ddef01d42f6.svg)


## Run Locally

### Vertigo Network Client
Clone the project

```bash
  git clone https://github.com/Nicholas-Nguyen8742/vertigo-network-client
```

Go to the project directory

```bash
  cd vertigo-network-client
```

Install dependencies

```bash
  npm install
```


### Vertigo Network Server
Clone the project

```bash
  git clone https://github.com/Nicholas-Nguyen8742/vertigo-network-server
```

Go to the project directory

```bash
  cd vertigo-network-server
```

Install dependencies

```bash
  npm install
```

Run knex migrations & seeds to setup & populate the mySQL server.
```bash
    npx knex migrate:latest
    npx knex seed:run
```

Run the script on vertigo-network-server terminal.
```bash
    node index.js
```



## ScreenShots
![image](https://user-images.githubusercontent.com/97898047/170506731-245df590-d6ab-4189-8f63-077132f5ef50.png)
![image](https://user-images.githubusercontent.com/97898047/170508070-9b84d3af-b9a1-466f-99a1-e8bccd0dac07.png)
![image](https://user-images.githubusercontent.com/97898047/170508143-1e52d0a8-34ac-4c7e-b4a6-88bf212f93dd.png)
![image](https://user-images.githubusercontent.com/97898047/170508772-8b8f7602-b812-4120-989f-2f3a7aa42a33.png)


## Down the Road

- Integrating React Context & Private Routes for types of users
- Integrate Client user dashboard routes. 
- Implement more CRUD Operations on the Front-End
- Back-End Points need more concise querying
