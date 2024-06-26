/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { BlogPostWhereInput } from "./BlogPostWhereInput";
import { IsOptional, ValidateNested, IsInt } from "class-validator";
import { Type } from "class-transformer";
import { BlogPostOrderByInput } from "./BlogPostOrderByInput";

@ArgsType()
class BlogPostFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => BlogPostWhereInput,
  })
  @IsOptional()
  @ValidateNested()
  @Field(() => BlogPostWhereInput, { nullable: true })
  @Type(() => BlogPostWhereInput)
  where?: BlogPostWhereInput;

  @ApiProperty({
    required: false,
    type: [BlogPostOrderByInput],
  })
  @IsOptional()
  @ValidateNested({ each: true })
  @Field(() => [BlogPostOrderByInput], { nullable: true })
  @Type(() => BlogPostOrderByInput)
  orderBy?: Array<BlogPostOrderByInput>;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsOptional()
  @IsInt()
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  skip?: number;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsOptional()
  @IsInt()
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  take?: number;
}

export { BlogPostFindManyArgs as BlogPostFindManyArgs };
