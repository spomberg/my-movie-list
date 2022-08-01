import ResultsItem from "../components/SearchMovie/ResultsItem";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";

storiesOf('ResultsItem', module)
  .add("Base", () => <ResultsItem  
                      poster_path="/w3LxiVYdWWRvEVdn5RYq6jIqkb1.jpg"
                      title="Everything Everywhere All at Once"
                      onClick={action("button-clicked")}
                    />)