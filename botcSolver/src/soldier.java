package botcSolver;

public class soldier extends character {

    public soldier(Player p, String n, String almt, boolean alv) {
        super(p, n, almt, "Townsfolk", alv);
        setProtection(true);
    }
	
	public void setPoison(boolean p) {
		poisoned = p;
		
		if (p == true) 
			setProtection(false);
			
		else
			setProtection(true);
	}
	
}
