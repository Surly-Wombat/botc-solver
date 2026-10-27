package botcSolver;

/* === CHARACTER ===
 * this class represents a generic role in the game, this is a parent class 
 * for all specific roles
 * Stores info about character and its player's state
 */
 
public class character {
	
	private Player player;
	private String name;
	private String alignment;
	private String roleType;
	private boolean poisoned;
	private boolean alive;
	
	// e.g. monk, soldier
	private boolean safe;
	
	// e.g. recluse
	private boolean registersEvil;
	
	//does fortune teller register you as evil?
	private boolean ftRegistersEvil;
	
	
	
	
	// Contructors
	public character (Player p, String n, String almt, String rt, , boolean alv) {
		
		player = p;
		name = n;
		alignment = almt;
		roleType = rt;
		poisoned = false;
		alive = alv;
		registersEvil = false;
		ftRegistersEvil = false;
		safe = false;
	}
	
	
	
	// == Setters ==
	public void setName (String n) {
		name = n;
	}
	
	public void setAlignment (String a) {
		alignment = a;
	}
	
	public void setRoleType (String rt) {
		roleType = rt;
	}
	
	public void kill() {
		alive = false;
	}
	
	public void setProtection(boolean s) {
		safe = s;
	}
	
	public void setPoison(boolean p) {
		poisoned = p;
	}
	
	// == Getters ==
	public Player getPlayer() {
		return player;
	}
	
	public String getName() {
		return name;
	}
	
	public String getAlignment() {
		return alignment;
	}
	
	public String getRoleType() {
		return roleType;
	}
	
	public boolean isEvil() {
		if (alignment == "evil") 
			return true;
		return false;
	}
	
	public boolean isGood() {
		if (alignment == "good") 
			return true;
		return false;
	}
	
	public boolean isPoisoned() {
		return poisoned;
	}
	
	public boolean isAlive() {
		return alive;
	}
	
	public boolean isProtected() {
		return safe;
	}
	
	public boolean registersEvil() {
		return registersEvil;
	}
	
	public boolean ftRegistersEvil() {
		return ftRegistersEvil;
	}
	
}
