package model;

public class Site {
    private int id, id_adm;
    private String link, logo, nome; //lembrete; logo � o caminho do diret�rio onde a img est�
    
    public Site() {
        id = -1;
        link = "";
        logo = "";
        nome = "";
        id_adm = -1;
    }

    public Site(int id, String link, String logo, String nome, int id_adm) {
        setId(id);
        setLink(link);
        setLogo(logo);
        setNome(nome);
        setIdAdm(id_adm);
    }       
    
    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getLink() {
        return link;
    }

    public void setLink(String link) {
        this.link = link;
    }

    
    public String getLogo() {
        return logo;
    }

    public void setLogo(String logo) {
        this.logo = logo;
    }

    public String getNome() {
        return nome;
    }

    public void setNome(String nome) {
        this.nome = nome;
    }

    public int getIdAdm() {
        return id_adm;
    }

    public void setIdAdm(int id_adm) {
        this.id_adm = id_adm;
    }

    /**
     * M�todo sobreposto da classe Object. � executado quando um objeto precisa
     * ser exibido na forma de String.
     */
    @Override
    public String toString() {
        return "Nome: " + nome + "   Link: " + link;
    }
    
    // @Override
    // public boolean equals(Object obj) {
    //  return (this.getID() == ((Produto) obj).getID());
    // }    
}
