import java.util.*;

/* === LIMITATION ===
 * this class represents how to apply a possible piece of "TRUE" information
 * to tell whether a gamestate is possible or not
 * e.g. if you think you're the empath and you get a 1 on N2
 * we can represent this as a tree:
 * (any (my role is the DRUNK)
 *      (all (my role is the EMPATH)
 *           (any (on N2 I am Poisoined)
 *                (all (Alice reads Good) (Bob reads Evil)
 *                (all (Alice reads Evil) (Bob reads Good))))))
 */
public class Limitation {
    /* TODO:
     * connect rest of project with placeholder classes:
     * Predicate, GameState
     */
    
    private enum Type {
        LEAF, ANY, ALL
    }

    private final Type type;
    // ANY or ALL of children. ignored for leaf node.
    private final List<Limitation> children;
    // actual predicate to apply. only for leaf node.
    private final Predicate pred;

    // private constructor
    private Limitation(Type type,
                       List<Limitation> children,
                       Predicate pred) {
        this.type = type;
        this.children = children;
        this.pred = pred;
    }

    // public special-case constructors
    public static Limitation any(Limitation... children) {
        return new Limitation(Type.ANY,
                              Arrays.asList(children),
                              null);
    }

    public static Limitation all(Limitation... children) {
        return new Limitation(Type.ALL,
                              Arrays.asList(children),
                              null);
    }

    public static Limitation leaf(Predicate pred) {
        return new Limitation(Type.LEAF,
                              null,
                              pred);
    }

    // test state
    public boolean test(GameState state) {
        switch (type) {
        case ANY:
            for (Limitation child : children) {
                if (child.test(state)) {
                    return true;
                }
            }
            return false;
            
        case ALL:
            for (Limitation child : children) {
                if (!child.test(state)) {
                    return false;
                }
            }
            return true;
            
        case LEAF:
            return pred.test(state);
            
        default:
            throw new AssertionError("Unknown limitation type: " + type);
        }
    }
    
    @Override
    public String toString() {
        switch (type) {
        case ANY:
            String out = "(any ";
            for (Limitation child : children) {
                out += child.toString();
            }
            out += ")";
            return out;
            
        case ALL:
            String out = "(all ";
            for (Limitation child : children) {
                out += child.toString();
            }
            out += ")";
            return out;
            
        case LEAF:
            return "(" + pred.toString() + ")";

        default:
            throw new AssertionError("Unknown limitation type: " + type);
        }
    }
}
