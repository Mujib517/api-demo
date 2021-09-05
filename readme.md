# NodeJS API 
### Rest api using nodejs and express

#### To run app

```npm install```

```node index.js```


#### Sequelize setup
``` npm install sequelize-cli -g```
``` npm install sequelize pg pg-hstore ```
``` sequelize init```


### Elasticsearch setup

```docker pull docker.elastic.co/elasticsearch/elasticsearch:6.8.18```

```docker run -d -p 9200:9200 -p 9300:9300 -e "discovery.type=single-node" docker.elastic.co/elasticsearch/elasticsearch:6.8.18```