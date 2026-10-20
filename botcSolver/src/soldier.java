package botcSolver;

public class soldier extends character {

    public soldier(String n, String almt, boolean alv) {
        super(n, almt, "Townsfolk", alv);
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
