package botcSolver;

public class librarian extends character {

    private Limitation [] limitations;
	private Information night1info;
	private boolean outsiderExists;
	
	public librarian (Player p, String n, String almt, boolean alv) {
        super(p, n, almt, "Townsfolk", alv);
    }
	
	public learn (boolean outsiderExists, character role, Player p1, Player P2) {
		
		this.outsiderExists = outsiderExists;
		
		if (outsiderExists) {
			
			night1info = new Information(true, getPlayer(), /* Add limitation */ );
		}
		else ()
	}
}
