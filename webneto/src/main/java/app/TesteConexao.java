package app;

import dao.AdmDAO;
import dao.DAO;
import model.Adm;

public class TesteConexao {
    public static void main(String[] args) {
        DAO dao = new DAO();
        
        dao.conectar();
        
        AdmDAO admDAO = new AdmDAO();
        
        Adm adm = new Adm(-1, "fulano", "234");
        if(admDAO.insert(adm) == true) {
            System.out.println("Inserção com sucesso -> " + adm.toString());
        }
    }
}
