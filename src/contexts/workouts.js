import { randomId } from "$utils";
import workoutslist from "./workoutslist";

export default () => ({
  init() {
    this.defaultWorkouts = workoutslist;
    this.selectedWorkouts = [];
  },
  randomId
});
