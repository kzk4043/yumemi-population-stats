import type { Meta, StoryObj } from "@storybook/react";
import { AtomsHeading } from "./index.tsx";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  component: AtomsHeading,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {
    level: { control: "radio", options: ["h1", "h2"] },
    text: { control: "text" },
    subtext: { control: "text" },
  },
} satisfies Meta<typeof AtomsHeading>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const H1: Story = {
  args: {
    level: "h1",
    text: "都道府県別人口推移",
  },
};

export const H1WithSubtext: Story = {
  args: {
    level: "h1",
    text: "都道府県別人口推移",
    subtext: "POPULATION STATS for YUMEMI inc.",
  },
};

export const H2: Story = {
  args: {
    level: "h2",
    text: "都道府県",
  },
};
