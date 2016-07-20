### Install Dependencies

We have two kinds of dependencies in this project: tools and angular framework code.  The tools help
us manage and test the application.

```
sudo yum install ruby
or
sudo apt-get install ruby-full

npm install
sudo gem install sass
sudo npm install -g bower
sudo npm install -g grunt-cli
bower install
```

Pre compile workflow

```
grunt

```


Populate MongoSB with script in:

```
app/models/scriptInsert/pois.rm

```

Execute

```
cd dist/ & node server.js

```

Now browse to the app at `http://localhost:8000`