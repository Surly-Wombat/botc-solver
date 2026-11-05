package botcSolver;

import java.util.*;

/* === PLAYER ===
 * This class represents a person playing the game and the claims they have made.
 *
 * ASSUMPTION: if player is good, they're one of the roles they've claimed (no good bluffing)
 * this assumption could be relaxed
 *
 * Claimed characters contain given info for each role and can generate predicates
 * e.g. Alice's claims are Soldier (), Chef (N1: 1), Empath (N1: 0, N2: 1)
 */
public class Player {
    private Boolean isYou; // if we're the player, we KNOW our info is true
    private Boolean alive;
    
    // every character this player is CURRENTLY claiming as
	private ArrayList<Characters> currentClaims;

    // TODO: meta information? whether we trust this player or not. use as weights for Z3 solver
	
	public Player () {
		// TODO
	}

    // TODO: function that generates predicates for this player
}
