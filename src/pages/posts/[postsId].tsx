import {
  GetStaticPaths,
  GetStaticPathsContext,
  GetStaticProps,
  GetStaticPropsContext,
} from "next";
import * as React from "react";

export interface IPostsDetailProps {
  postsId: any[];
}

export default function PostsDetail(props: IPostsDetailProps) {
  return <div>Posts detail</div>;
}

export const getStaticPaths: GetStaticPaths = async () => {
  console.log("static Paths: ");
  return {
    paths: [
      {
        params: {
          postsId: "1",
        },
      },
      {
        params: {
          postsId: "2",
        },
      },
    ],
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps<IPostsDetailProps> = async (
  context: GetStaticPropsContext
) => {
  console.log("static props: ", context.params?.postsId);
  return {
    props: {
      postsId: [],
    },
  };
};
