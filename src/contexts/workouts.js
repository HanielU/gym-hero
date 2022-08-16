import workoutslist from "./workoutslist";

export default () => ({
  init() {
    this.defaultWorkouts = workoutslist;
    this.selectedWorkouts = [];
  }
});
