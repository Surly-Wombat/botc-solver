import com.microsoft.z3.*;
import java.util.*;

public class GameSolver {
    record Role(String name, RoleType roletype) {}

    public static void main(String[] args) {
        int players = 13;

        // Trouble Brewing roles per type
        // this is script dependent...
        List<Role> roles = new ArrayList<>();
        addRoles(roles, RoleType.TOWNSFOLK, "TF", 13);
        addRoles(roles, RoleType.OUTSIDER, "OUT", 4);
        addRoles(roles, RoleType.MINION, "MIN", 4);
        addRoles(roles, RoleType.DEMON, "DEM", 1);

        // TODO: generate this based on player count
        Map<RoleType, Integer> required = Map.of(
            RoleType.TOWNSFOLK, 9,
            RoleType.OUTSIDER, 0,
            RoleType.MINION, 3,
            RoleType.DEMON, 1
        );

        Context ctx = new Context();
        try {
            Solver solver = ctx.mkSolver();

            // assigned[p][r] means player p has role r.
            BoolExpr[][] assigned = new BoolExpr[players][roles.size()];
            for (int p = 0; p < players; p++) {
                for (int r = 0; r < roles.size(); r++) {
                    assigned[p][r] =
                        ctx.mkBoolConst("player_" + p + "_is_" + roles.get(r).name());
                }
            }

            // Every player gets exactly one role:
            // at least one, and no pair of roles can both be true.
            for (int p = 0; p < players; p++) {
                solver.add(ctx.mkOr(assigned[p]));

                for (int r1 = 0; r1 < roles.size(); r1++) {
                    for (int r2 = r1 + 1; r2 < roles.size(); r2++) {
                        solver.add(ctx.mkNot(ctx.mkAnd(
                            assigned[p][r1], assigned[p][r2]
                        )));
                    }
                }
            }

            // Each character can be assigned to at most one player.
            for (int r = 0; r < roles.size(); r++) {
                for (int p1 = 0; p1 < players; p1++) {
                    for (int p2 = p1 + 1; p2 < players; p2++) {
                        solver.add(ctx.mkNot(ctx.mkAnd(
                            assigned[p1][r], assigned[p2][r]
                        )));
                    }
                }
            }

            // Enforce the required count for each roletype.
            for (RoleType roletype : RoleType.values()) {
                List<BoolExpr> roletypeAssignments = new ArrayList<>();

                for (int p = 0; p < players; p++) {
                    for (int r = 0; r < roles.size(); r++) {
                        if (roles.get(r).roletype() == roletype) {
                            roletypeAssignments.add(assigned[p][r]);
                        }
                    }
                }

                addExactCount(
                    ctx,
                    solver,
                    roletypeAssignments,
                    required.get(roletype)
                );
            }

            Status result = solver.check();
            if (result == Status.SATISFIABLE) {
                Model model = solver.getModel();
                for (int p = 0; p < players; p++) {
                    for (int r = 0; r < roles.size(); r++) {
                        if (model.eval(assigned[p][r], true).isTrue()) {
                            System.out.println(
                                "Player " + (p + 1) + ": " + roles.get(r).name()
                            );
                            break;
                        }
                    }
                }
            } else {
                System.out.println("No setup satisfies these constraints: " + result);
            }
        } finally {
            ctx.close();
        }
    }

    private static void addExactCount(
        Context ctx,
        Solver solver,
        List<BoolExpr> variables,
        int expected
    ) {
        List<ArithExpr<?>> terms = new ArrayList<>();

        for (BoolExpr variable : variables) {
            // True contributes 1; false contributes 0.
            terms.add((ArithExpr<?>) ctx.mkITE(
                variable, ctx.mkInt(1), ctx.mkInt(0)
            ));
        }

        ArithExpr<?> total = ctx.mkAdd(terms.toArray(new ArithExpr<?>[0]));
        solver.add(ctx.mkEq(total, ctx.mkInt(expected)));
    }

    private static void addRoles(
        List<Role> roles,
        RoleType roletype,
        String prefix,
        int count
    ) {
        for (int i = 1; i <= count; i++) {
            roles.add(new Role(prefix + String.format("%02d", i), roletype));
        }
    }
}
