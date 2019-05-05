import * as express from "express";
import Db from "./infra/db";
import * as bodyparser from "body-parser";
import NewsController from "./controller/newsController";

class StartUp {
  public app: express.Application;
  private _db: Db;
  private bodyParser;

  constructor() {
    this.app = express();
    this._db = new Db();
    this._db.createConnection();
    this.middler();
    this.routes();
  }

  middler() {
    this.app.use(bodyparser.json());
    this.app.use(bodyparser.urlencoded({ extended: false }));
  }
  routes() {
    this.app.route("/").get((req, res) => {
      res.send({
        versao: "0.0.1"
      });
    });
    // Rotas
    this.app.route("/api/v1/news").get(NewsController.get);
    this.app.route("/api/v1/news/:id").get(NewsController.getById);
    this.app.route("/api/v1/news").post(NewsController.create);
    this.app.route("/api/v1/news/:id").put(NewsController.update);
    this.app.route("/api/v1/news/:id").delete(NewsController.delete);
  }
}
export default new StartUp();
