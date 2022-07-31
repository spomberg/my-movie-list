import ResultsItem from "../components/SearchMovie/ResultsItem";

export default {
  title: 'ResultsItem',
  component: ResultsItem
};

const Template = (args) => <ResultsItem {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  title: "Everything Everywhere All at Once",
  poster_path: "/w3LxiVYdWWRvEVdn5RYq6jIqkb1.jpg"
};