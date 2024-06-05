import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type BlogPostWhereInput = {
  author?: StringNullableFilter;
  content?: StringNullableFilter;
  id?: StringFilter;
  image?: StringNullableFilter;
  slug?: StringNullableFilter;
  title?: StringNullableFilter;
};
