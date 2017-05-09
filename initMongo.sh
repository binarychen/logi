#!/bin/bash

#MongoDB='./mongo 127.0.0.1:27017'
MongoDB='/usr/bin/mongo 127.0.0.1:27017'

$MongoDB <<EOF

#mongo 127.0.0.1:27017
use logi
db.createCollection("drivers")
db.createCollection("shippers")
db.createCollection("orders")
db.createCollection("cargos")
db.createCollection("enterprises")
db.createCollection("trucks")
db.createCollection("truck_medias")
db.createCollection("cargo_medias")
db.createCollection("order_medias")

show dbs
show collections


#######
# Add users
#######
db.addUser("test2", "testTest2")

exit;

EOF


mongod --auth --dbpath=/data/db --logpath=/data/dblog/20170505.log &