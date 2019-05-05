import NewsService from "../services/newService";
import * as HttpStatus from "http-status";
import Helper from "../infra/helper";

class NewsController {
  get(req, res) {
    NewsService.get()
      .then(news => Helper.sendResponse(res, HttpStatus.OK, news))
      .catch(error => console.error.bind(console, "Erro ao gerar get"));
  }
  getById(req, res) {
    const _id = req.params.id;
    NewsService.getById(_id)
      .then(news => Helper.sendResponse(res, HttpStatus.OK, news))
      .catch(error => console.error.bind(console, "Erro ao gerar get por id"));
  }
  create(req, res) {
    let vm = req.body;
    NewsService.create(vm)
      .then(news =>
        Helper.sendResponse(
          res,
          HttpStatus.OK,
          "Noticia Cadastrada com sucesso!"
        )
      )
      .catch(error => console.error.bind(console, `Error ${error}`));
  }
  update(req, res) {
    const _id = req.params.id;
    let vm = req.body;

    NewsService.update(_id, vm)
      .then(news =>
        Helper.sendResponse(
          res,
          HttpStatus.OK,
          `Noticia foi atualizada com sucesso!`
        )
      )
      .catch(error => console.error.bind(console, "Erro no update"));
  }
  delete(req, res) {
    let _id = req.prams.id;
    NewsService.delete(_id)
      .then(news =>
        Helper.sendResponse(res, HttpStatus.OK, "Noticia deletada com sucesso")
      )
      .catch(error => console.error.bind(console, "Erro ao deletar"));
  }
}
export default new NewsController();
