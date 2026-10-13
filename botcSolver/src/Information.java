import java.util.*;

/* === INFORMATION ===
 * this class represents 1 piece of information
 * complete with its containing limitation,
 * the originating player/the storyteller
 * and whether we can assume it is unquestionably true
 * think of this as "Alice said she's the Washerwoman and that either Bob or Charlie are the Empath"
 * maybe Alice is telling the truth. maybe she's lying
 * drunk/poisoning is handled in Limitation
 */
public class Information {
    private final boolean fromST;   // directly from ST (e.g. public announcement, your own night action)
    private final Player origin;
    private final Limitation limit;

    // TODO: maybe split into private constructor + public special case?
    public Information (boolean fromST,
                        Player origin,
                        Limitation limit) {
        this.fromST = fromST;
        this.origin = origin;
        this.limit = limit;
    }

    @Override
    public String toString() {
        return origin
            + (fromST ? " (TRUE)" : "")
            + " gave "
            + limit
            + ".";
    }
}
