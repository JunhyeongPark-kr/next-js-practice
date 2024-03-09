import React from "react";
import { GetServerSideProps } from "next";
import EditPostForm from "../../../components/EditPostForm";
import { ParsedUrlQuery } from "querystring";
import { Post as PostType, PrismaClient } from "@prisma/client";

interface Params extends ParsedUrlQuery {
  id: string;
}

interface EditPostProps {
  initialData: PostType;
}

const prisma = new PrismaClient();

export const getServerSideProps: GetServerSideProps<
  EditPostProps,
  Params
> = async (context) => {
  const { id } = context.params as Params;
  const post = await prisma.post.findUnique({
    where: { id: parseInt(id, 10) },
  });

  if (!post) {
    return { notFound: true };
  }

  return {
    props: { initialData: post },
  };
};

const EditPostPage: React.FC<EditPostProps> = ({ initialData }) => {
  return (
    <div className="max-w-4xl mx-auto mt-10">
      <h1 className="text-2xl font-bold mb-5">Edit Post</h1>
      <EditPostForm
        postId={initialData.id}
        initialTitle={initialData.title}
        initialContent={initialData.content}
      />
    </div>
  );
};
export default EditPostPage;
