import * as express from "express";
import * as path from "path";
import fetch from "node-fetch";
import * as fs from "fs";

const app = express();
app.set('views', path.join(__dirname, '/'));
app.set('view engine', 'jade');

const backendUrl = "http://backend:3001";
const socket = "/tmp/front.socket"

app.get('/', async (req, res) => {
    const cat_data = await fetch(`${backendUrl}/cat_get`);
    const data = await cat_data.text();

    res.render('index.jade', { title: "KIT Frontend", cat_url: data });
});

app.listen(socket, () => {
  fs.chmod(socket, 0o666, (err) => {
    if (err) throw err;
    console.log('Permissions changed for socket: ', socket);
  });
  console.log("Now listening on socket: ", socket)
});
