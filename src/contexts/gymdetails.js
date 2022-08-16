import { randomId } from "$utils";

// get "correctFormat" from "mapcontext"
export default (correctFormat = arr => arr) => ({
  selectedGym: null,
  init() {
    this.gymData = [
      {
        id: randomId(8),
        name: "Planet Fitness",
        coords: correctFormat([9.064239371359989, 7.48158660703928])
      },
      {
        id: randomId(8),
        name: "Best Way Gym & Fitness Center",
        coords: correctFormat([9.104602083023918, 7.403337172821537])
      },
      {
        id: randomId(8),
        name: "Planet Fitness",
        coords: correctFormat([9.064239371359989, 7.48158660703928])
      }
    ];
  },
  get hasSelected() {
    return !!this.selected;
  }
});
