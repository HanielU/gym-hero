import Alpine from "alpinejs";
import gymcontext from "./contexts/gymdetails";
import mapcontext from "./contexts/map";
import workouts from "./contexts/workouts";

Alpine.store("user", {
  init() {
    this.details = JSON.parse(localStorage.getItem("userdata")) || null;
    this.selectedGym = null;
  }
});

Alpine.data("account", () => ({
  email: "",
  password: "",
  confirmPassword: "",
  signup() {
    const fieldsEmpty = !this.email.trim() && !this.password.trim() && !this.confirmPassword.trim();
    if (fieldsEmpty) return;
    if (this.password.trim() !== this.confirmPassword.trim()) return;

    const userData = {
      email: this.email,
      password: this.password
    };
    console.log({ userData });
    localStorage.setItem("userdata", JSON.stringify(userData));
    Alpine.store("user").details = userData;
  }
}));

Alpine.data("home", () => ({
  watchStore(s, href = "/src/home.html") {
    const link = document.createElement("a");
    s && (link.href = href)(link.click());
  }
}));

Alpine.data("map", mapcontext);

Alpine.data("gymdetails", gymcontext);

Alpine.data("workouts", workouts);

window.Alpine = Alpine;
window.Alpine.start();