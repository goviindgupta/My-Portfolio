import Highway from "@dogstudio/highway";
import { gsap } from "gsap";

class Fade extends Highway.Transition {
    in({ from, to, done }) { // ✅ Fixed function signature
        const tl = gsap.timeline({
            onComplete: () => {
                from.remove(); // Remove old page after transition
                done(); // Mark transition as complete
            }
        });

        tl.fromTo(to, 
            { left: "-100%", top: "50%" }, // Initial state
            { left: "0%", duration: 0.5, ease: "power2.out" } // Target state
        )
        .fromTo(to, 
            { height: "2vh" }, 
            { height: "90vh", top: "10%", duration: 0.5 }
        )
        .fromTo(to.children[0], 
            { opacity: 0 }, 
            { opacity: 1, duration: 2 }
        );
    }

    out({ from, done }) { // ✅ Fixed function signature
        gsap.to(from, {
            opacity: 0,
            duration: 0.5,
            onComplete: done
        });
    }
}

export default Fade;
