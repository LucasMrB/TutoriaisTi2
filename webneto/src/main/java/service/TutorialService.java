package service;

import dao.TutorialDAO;
import model.Tutorial;
import spark.Request;
import spark.Response;


public class TutorialService {

    private TutorialDAO tutorialDAO;

    public TutorialService(){
        tutorialDAO = new TutorialDAO();
    }

    public Object add(Request request, Response response) { //Tutorial(int id, String passos, String video, String titulo, String foto)
        String passos = request.queryParams("passos");
        String video = request.queryParams("video");
        String titulo = request.queryParams("titulo");
        String foto = request.queryParams("foto");
        int id_site = Integer.parseInt(request.queryParams("id_site"));

        //int id = tutorialDAO.getMaxId() + 1;

        Tutorial tutorial = new Tutorial(-1, passos, video, titulo, foto, id_site);

        tutorialDAO.insert(tutorial);

        response.status(201); // 201 Created
        return titulo;
    }

    public Object get(Request request, Response response) {
        int id = Integer.parseInt(request.params(":id"));
        
        Tutorial tutorial = (Tutorial) tutorialDAO.get(id);
        
        if (tutorial != null) {
            response.header("Content-Type", "application/xml");
            response.header("Content-Encoding", "UTF-8");

            return "<tutorial>\n" + 
                    "\t<id>" + tutorial.getId() + "</id>\n" +
                    "\t<passos>" + tutorial.getPassos() + "</passos>\n" +
                    "\t<video>" + tutorial.getVideo() + "</video>\n" +
                    "\t<titulo>" + tutorial.getTitulo() + "</titulo>\n" +
                    "\t<foto>" + tutorial.getFoto() + "</foto>\n" +
                    "\t<site>" + tutorial.getIdSite() + "</id_site>\n" +
                    "</tutorial>\n";
        } else {
            response.status(404); // 404 Not found
            return "Tutorial " + id + " n�o encontrado.";
        }

    }

    public Object update(Request request, Response response) {
        int id = Integer.parseInt(request.params(":id"));
        
        Tutorial tutorial = (Tutorial) tutorialDAO.get(id);

        if (tutorial != null) {
            tutorial.setPassos(request.queryParams("passos"));
            tutorial.setVideo(request.queryParams("video"));
            tutorial.setTitulo(request.queryParams("titulo"));
            tutorial.setFoto(request.queryParams("foto"));
            tutorial.setIdSite(Integer.parseInt(request.queryParams("id_site"))); 

            tutorialDAO.update(tutorial);
            
            return id;
        } else {
            response.status(404); // 404 Not found
            return "Tutorial n�o encontrado.";
        }

    }

    public Object remove(Request request, Response response) {
        int id = Integer.parseInt(request.params(":id"));

        Tutorial tutorial = (Tutorial) tutorialDAO.get(id);

        if (tutorial != null) {

            tutorialDAO.delete(id);

            response.status(200); // success
            return id;
        } else {
            response.status(404); // 404 Not found
            return "Tutorial n�o encontrado.";
        }
    }

    // public Object getAll(Request request, Response response) {
    //  StringBuffer returnValue = new StringBuffer("<adm type=\"array\">");
    //  for (Tutorial tutorial : tutorialDAO.getAll()) {
    //      returnValue.append("\n<tutorial>\n" + 
    //              "\t<id>" + tutorial.getId() + "</id>\n" +
    //              "\t<passos>" + tutorial.getPassos() + "</passos>\n" +
    //              "\t<video>" + adm.getVideo() + "</video>\n" +
    //                          "\t<titulo>" + adm.getTitulo() + "</titulo>\n" +
    //                          "\t<foto>" + adm.getFoto() + "</foto>\n" +
    //              "</tutorial>\n");
    //  }
    //  returnValue.append("</tutorial>");
    //     response.header("Content-Type", "application/xml");
    //     response.header("Content-Encoding", "UTF-8");
    //  return returnValue.toString();
    // }
}