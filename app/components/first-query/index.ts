import Component from "@glimmer/component";
import { action } from "@ember/object";
import { tracked } from "@glimmer/tracking";
import { useUserByIdQuery } from "./resources";

export default class FirstQuery extends Component {
  @tracked userId = 1;
  readonly userIds = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  query = useUserByIdQuery(this, () => ({
    variables: {
      id: this.userId.toString(),
    },
  }));

  @action onUserIdChange(event: Event): void {
    this.userId = Number((event.target as HTMLSelectElement).value);
  }
}
