import * as S from "./styles";

import Heading from "components/Heading";
import Button from "components/Button";
import Checkbox from "components/Checkbox";
import Radio from "components/Radio";

export type ItemProps = {
  title: string;
  name: string;
  type: string;
  fields: Field[];
};

type Field = {
  label: string;
  name: string;
};

export type ExploreSidebarProps = {
  items: ItemProps[];
};

const ExploreSideBar = ({ items }: ExploreSidebarProps) => (
  <S.Wrapper>
    {items.map((item) => (
      <div key={item.title}>
        <Heading lineBottom lineColor="secondary" size="small">
          {item.title}
        </Heading>

        {item.type === "checkbox" &&
          item.fields.map((field) => (
            <Checkbox
              key={field.name}
              name={field.name}
              label={field.label}
              labelFor={field.name}
            />
          ))}

        {item.type === "radio" &&
          item.fields.map((field) => (
            <Radio
              key={field.name}
              id={field.name}
              value={field.name}
              name={item.name}
              label={field.label}
              labelFor={field.name}
            />
          ))}
      </div>
    ))}

    <Button fullWidth size="medium">
      Filter
    </Button>
  </S.Wrapper>
);

export default ExploreSideBar;
