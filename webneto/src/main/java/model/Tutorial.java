package model;

public class Tutorial {
    private int id, id_site;
    private String passos, video, titulo, foto; //lembrete; logo � o caminho do diret�rio onde a img est�
    
    public Tutorial() {
        id = -1;
        passos = "";
        video = "";
        titulo = "";
        foto = "";
        id_site = -1;
    }

    public Tutorial(int id, String passos, String video, String titulo, String foto, int id_site) {
        setId(id);
        setPassos(passos);
        setVideo(video);
        setTitulo(titulo);
        setFoto(foto);
        setIdSite(id_site);
    }       
    
    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getPassos() {
        return passos;
    }

    public void setPassos(String passos) {
        this.passos = passos;
    }

    public String getVideo() {
        return video;
    }

    public void setVideo(String video) {
        this.video = video;
    }

    public String getTitulo() {
        return titulo;
    }

    public void setTitulo(String titulo) {
        this.titulo = titulo;
    }

    public String getFoto() {
        return foto;
    }

    public void setFoto(String foto) {
        this.foto = foto;
    }

    public int getIdSite() {
        return id_site;
    }

    public void setIdSite(int id_site) {
        this.id_site = id_site;
    }

    /**
     * M�todo sobreposto da classe Object. � executado quando um objeto precisa
     * ser exibido na forma de String.
     */
    @Override
    public String toString() {
        return "Titulo: " + titulo + "   Passos: " + passos;
    }
    
    // @Override
    // public boolean equals(Object obj) {
    //  return (this.getID() == ((Produto) obj).getID());
    // }    
}
