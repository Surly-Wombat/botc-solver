import java.util.*;

// TODO: add meta information
// so Z3 solver has weights to generate worlds

/* === INFORMATION ===
 * this class represents 1 piece of claimed information
 * complete with its containing limitation and the originating player
 * think of this as "Alice said she's the Washerwoman and that either Bob or Charlie are the Empath"
 * maybe Alice is telling the truth. maybe she's lying
 * drunk/poisoning is handled in Limitation
 */
public class Information {
    private final Player origin;
    private final Limitation limit;

    // TODO: maybe split into private constructor + public special case?
    public Information (Player origin,
                        Limitation limit) {
        this.origin = origin;
        this.limit = limit;
    }

    @Override
    public String toString() {
        return origin
            + " gave "
            + limit
            + ".";
    }
}

/* potential classes
   
  public class NumberInformation extends Information {
  private final int value;
  }

  public class PlayerPairInformation extends Information {
  private final Player first;
  private final Player second;
  }

  public class RoleInformation extends Information {
  private final Role;
  }
*/
