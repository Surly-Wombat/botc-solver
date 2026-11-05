package botcSolver;

/* === CHARACTER ===
 * this class represents a generic role in the game, this is a parent class 
 * for all specific roles
 * Stores info about character and claimed information
 * Generates predicates based on claims
 */
 
public class Character {
    private int pos; // used for e.g. Empath
	private boolean isEvil;
	private RoleType roleType;

    // TODO: registering should be a function returning a list of what you CAN register as
    // recluse can register as good OR evil depending on ST decisions
    // same as spy
	private boolean registersEvil;
	
    // TODO: other role's tokens on you should be in player class
    // also, probably would be better as a list? since many different roles can have tokens on you
	private boolean ftRegistersEvil;
	private boolean safe;
    private boolean poisoned;
	
	
	// Contructor
	public Character (Player p, String n, String almt, String rt, , boolean alv) {
		
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

    // TODO: function that generates predicates
}
