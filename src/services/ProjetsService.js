import AxiosService from "./AxiosService";

const projetsService = {
  /**
   * Retourne une liste de projets
   * @param {int} parPage  Indique le nombre de projets à renvoyer
   * @param {int} indexPage Indique le rang de la page à renvoyer
   * @returns
   */
  getProjets(parPage, indexPage) {
    return AxiosService.get(`/projets?_limit=${parPage}&_page=${indexPage}`);
  },
  /**
   * Retourne un projet de l'API, à partir de son ID
   * @param {int} id L'ID du projet à récupérer
   * @returns
   */
  getProjet(id) {
    return AxiosService.get(`/projets/${id}`);
  },
};

export default projetsService;
