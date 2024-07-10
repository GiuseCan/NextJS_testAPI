import { GetStaticProps, GetStaticPropsContext } from "next";
import * as React from "react";

export interface IPostPageProps {
  posts: any[];
}

export default function PostPage(props: IPostPageProps) {
  return (
    <div>
      <p>Post Page</p>
    </div>
  );
}

export const getStaticProps: GetStaticProps<IPostPageProps> = async (
  context: GetStaticPropsContext
) => {
  // server side code
  // build-time code
  console.log("static props");
  return {
    props: {
      posts: [],
    },
  };
};
