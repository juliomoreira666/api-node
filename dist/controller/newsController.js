"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const newService_1 = require("../services/newService");
const HttpStatus = require("http-status");
const helper_1 = require("../infra/helper");
class NewsController {
    get(req, res) {
        newService_1.default.get()
            .then(news => helper_1.default.sendResponse(res, HttpStatus.OK, news))
            .catch(error => console.error.bind(console, "Erro ao gerar get"));
    }
    getById(req, res) {
        const _id = req.params.id;
        newService_1.default.getById(_id)
            .then(news => helper_1.default.sendResponse(res, HttpStatus.OK, news))
            .catch(error => console.error.bind(console, "Erro ao gerar get por id"));
    }
    create(req, res) {
        let vm = req.body;
        newService_1.default.create(vm)
            .then(news => helper_1.default.sendResponse(res, HttpStatus.OK, "Noticia Cadastrada com sucesso!"))
            .catch(error => console.error.bind(console, `Error ${error}`));
    }
    update(req, res) {
        const _id = req.params.id;
        let vm = req.body;
        newService_1.default.update(_id, vm)
            .then(news => helper_1.default.sendResponse(res, HttpStatus.OK, `Noticia foi atualizada com sucesso!`))
            .catch(error => console.error.bind(console, "Erro no update"));
    }
    delete(req, res) {
        let _id = req.prams.id;
        newService_1.default.delete(_id)
            .then(news => helper_1.default.sendResponse(res, HttpStatus.OK, "Noticia deletada com sucesso"))
            .catch(error => console.error.bind(console, "Erro ao deletar"));
    }
}
exports.default = new NewsController();
